"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Provider = {
  id: string;
  label: string;
};

type Copy = {
  providerLabel: string;
  promptLabel: string;
  promptPlaceholder: string;
  submit: string;
  generating: string;
  chooseProvider: string;
  defaultError: string;
  tokensLabel: string;
  statusLabel: Record<"ok" | "limit" | "error", string>;
};

type Props = {
  providers: Provider[];
  copy: Copy;
};

export default function AiChatPanel({ providers, copy }: Props) {
  const router = useRouter();
  const [providerId, setProviderId] = useState(providers[0]?.id ?? "");
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [tokens, setTokens] = useState<number | null>(null);
  const [status, setStatus] = useState<"ok" | "limit" | "error" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const statusTone: Record<"ok" | "limit" | "error", string> = {
    ok: "text-emerald-600 dark:text-emerald-300",
    limit: "text-amber-600 dark:text-amber-300",
    error: "text-rose-600 dark:text-rose-300",
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!providerId) {
      setError(copy.chooseProvider);
      return;
    }
    setPending(true);
    setError(null);
    setResponse(null);
    setTokens(null);
    setStatus(null);
    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ providerId, prompt }),
      });
      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(payload?.error ?? copy.defaultError);
        return;
      }
      const data = (await res.json()) as {
        result: { text: string; tokensUsed: number; status: "ok" | "limit" | "error"; error?: string };
      };
      setResponse(data.result.text);
      setTokens(data.result.tokensUsed);
      setStatus(data.result.status ?? "ok");
      if (data.result.error) {
        setError(data.result.error);
      }
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(copy.defaultError);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="space-y-5 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 md:grid-cols-[240px_1fr]">
          <label className="space-y-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
            {copy.providerLabel}
            <select
              value={providerId}
              onChange={(event) => setProviderId(event.target.value)}
              className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/20"
            >
              {providers.map((provider) => (
                <option key={provider.id} value={provider.id}>
                  {provider.label}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
            {copy.promptLabel}
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              required
              rows={4}
              className="w-full rounded-xl border border-slate-200/70 bg-white/80 px-3 py-2 text-sm text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/20"
              placeholder={copy.promptPlaceholder}
            />
          </label>
        </div>
        {error ? <p className="text-sm font-semibold text-rose-500">{error}</p> : null}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
        >
          {pending ? copy.generating : copy.submit}
        </button>
      </form>
      {response ? (
        <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-700 shadow-inner dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200">
          <p className="font-semibold text-slate-900 dark:text-white">Response</p>
          <p className="mt-2 whitespace-pre-wrap">{response}</p>
          {tokens !== null ? (
            <p className="mt-4 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {copy.tokensLabel}: {tokens}
            </p>
          ) : null}
          {status ? (
            <p className={`mt-1 text-xs font-semibold uppercase tracking-wide ${statusTone[status]}`}>
              {copy.statusLabel[status]}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
