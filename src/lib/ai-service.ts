import "server-only";

import crypto from "crypto";
import { decrypt, encrypt } from "./auth";
import {
  readDatabase,
  writeDatabase,
  withTimestamps,
  type AiProviderRecord,
  type ApiUsageRecord,
} from "./database";

async function seedProviders() {
  const db = await readDatabase();
  if (db.aiProviders.length > 0) {
    return;
  }
  const placeholderKey = encrypt("demo-key");
  const provider: AiProviderRecord = withTimestamps({
    id: crypto.randomUUID(),
    provider: "openai",
    label: "Sample OpenAI-compatible",
    rssSlug: "openai-demo",
    apiKeyCipher: placeholderKey,
    keyPreview: "demo-***",
    docsUrl: "https://platform.openai.com/docs",
    quotaResetDay: 1,
  });
  db.aiProviders.push(provider);
  await writeDatabase(db);
}

export type ProviderSummary = {
  id: string;
  provider: string;
  label: string;
  keyPreview: string;
  docsUrl?: string;
  quotaResetDay?: number;
};

export type UsageEntry = {
  id: string;
  providerId: string;
  providerLabel: string;
  userId: string;
  tokensUsed: number;
  status: "ok" | "limit" | "error";
  notes?: string;
  createdAt: string;
};

export async function listProviders(): Promise<ProviderSummary[]> {
  await seedProviders();
  const db = await readDatabase();
  return db.aiProviders.map((provider) => ({
    id: provider.id,
    provider: provider.provider,
    label: provider.label,
    keyPreview: provider.keyPreview,
    docsUrl: provider.docsUrl,
    quotaResetDay: provider.quotaResetDay,
  }));
}

export async function createProvider({
  provider,
  label,
  apiKey,
  rssSlug,
  docsUrl,
  quotaResetDay,
}: {
  provider: string;
  label: string;
  apiKey: string;
  rssSlug: string;
  docsUrl?: string;
  quotaResetDay?: number;
}) {
  const db = await readDatabase();
  const cipher = encrypt(apiKey);
  const record: AiProviderRecord = withTimestamps({
    id: crypto.randomUUID(),
    provider,
    label,
    rssSlug,
    apiKeyCipher: cipher,
    keyPreview: `${apiKey.slice(0, 4)}***`,
    docsUrl,
    quotaResetDay,
  });
  db.aiProviders.push(record);
  await writeDatabase(db);
  return record;
}

function mockAssistantResponse(prompt: string): string {
  return `This is a simulated assistant response for: "${prompt.slice(0, 80)}". Configure real API keys to enable live completions.`;
}

export async function runAssistant({
  providerId,
  prompt,
  userId,
}: {
  providerId: string;
  prompt: string;
  userId: string;
}): Promise<{ text: string; tokensUsed: number; status: ApiUsageRecord["status"]; error?: string }> {
  const db = await readDatabase();
  const provider = db.aiProviders.find((item) => item.id === providerId);
  if (!provider) {
    throw new Error("Provider not found");
  }

  let responseText = mockAssistantResponse(prompt);
  let tokensUsed = Math.max(Math.ceil(prompt.length / 4), 1);
  let status: ApiUsageRecord["status"] = "ok";
  let notes = `Prompt length ${prompt.length}`;
  let errorMessage: string | undefined;

  const proxyEndpoint = process.env.AI_PROXY_ENDPOINT;
  if (proxyEndpoint) {
    try {
      const apiKey = decrypt(provider.apiKeyCipher);
      const res = await fetch(proxyEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ prompt }),
      });
      if (res.ok) {
        const data = (await res.json()) as { text?: string; tokens?: number; status?: string; notes?: string };
        responseText = data.text ?? responseText;
        tokensUsed = data.tokens ?? tokensUsed;
        if (data.status === "limit") {
          status = "limit";
        }
        if (data.notes) {
          notes = data.notes;
        }
      } else {
        const body = await res.text();
        status = res.status === 429 ? "limit" : "error";
        notes = `Proxy status ${res.status}`;
        if (body) {
          notes = `${notes} · ${body.slice(0, 160)}`;
        }
        errorMessage = body ? body.slice(0, 160) : `Proxy responded with status ${res.status}`;
      }
    } catch (error) {
      console.error("AI proxy call failed", error);
      status = "error";
      const message = error instanceof Error ? error.message : "Unknown proxy error";
      errorMessage = message;
      notes = `Proxy error: ${message}`;
    }
  }

  const usage: ApiUsageRecord = withTimestamps({
    id: crypto.randomUUID(),
    providerId: provider.id,
    userId,
    tokensUsed,
    status,
    notes,
  });
  db.apiUsage.push(usage);
  await writeDatabase(db);

  return { text: responseText, tokensUsed, status, error: errorMessage };
}

export async function listUsage(): Promise<UsageEntry[]> {
  const db = await readDatabase();
  const providers = new Map(db.aiProviders.map((provider) => [provider.id, provider.label]));
  return db.apiUsage
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map((usage) => ({
      id: usage.id,
      providerId: usage.providerId,
      providerLabel: providers.get(usage.providerId) ?? usage.providerId,
      userId: usage.userId,
      tokensUsed: usage.tokensUsed,
      status: usage.status,
      notes: usage.notes,
      createdAt: usage.createdAt,
    }));
}

export async function generateAiRssFeed() {
  await seedProviders();
  const db = await readDatabase();
  const siteUrl = process.env.SITE_URL ?? "https://juana-diaz-hub.local";
  const items = db.aiProviders
    .slice()
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .map((provider) => ({
      title: provider.label,
      link: `${siteUrl}/ai-lab?provider=${provider.id}`,
      description: `Provider: ${provider.provider}. Key preview: ${provider.keyPreview}. Docs: ${provider.docsUrl ?? "N/A"}.`,
      pubDate: new Date(provider.updatedAt).toUTCString(),
    }));

  const rssItems = items
    .map((item) => `\n    <item>\n      <title>${item.title}</title>\n      <link>${item.link}</link>\n      <description>${item.description}</description>\n      <pubDate>${item.pubDate}</pubDate>\n    </item>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Juana Díaz Hub · AI Keys</title>\n    <link>${siteUrl}/ai-lab</link>\n    <description>Latest public AI API keys curated by the Juana Díaz Hub.</description>${rssItems}\n  </channel>\n</rss>`;
}
