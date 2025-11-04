import { createProvider, listProviders } from "../../../../lib/ai-service";
import { getSession } from "../../../../lib/auth";

export async function GET() {
  const providers = await listProviders();
  return Response.json({ providers });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }

  const payload = (await request.json().catch(() => null)) as {
    provider?: string;
    label?: string;
    apiKey?: string;
    rssSlug?: string;
    docsUrl?: string;
    quotaResetDay?: number;
  } | null;

  if (!payload?.provider || !payload?.label || !payload?.apiKey || !payload?.rssSlug) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const record = await createProvider({
    provider: payload.provider,
    label: payload.label,
    apiKey: payload.apiKey,
    rssSlug: payload.rssSlug,
    docsUrl: payload.docsUrl,
    quotaResetDay: payload.quotaResetDay,
  });
  return Response.json({ provider: record });
}
