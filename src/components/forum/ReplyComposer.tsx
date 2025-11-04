"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../providers/language-context";

type Props = {
  threadSlug: string;
};

export default function ReplyComposer({ threadSlug }: Props) {
  const router = useRouter();
  const { dictionary } = useLanguage();
  const copy = dictionary.forum.reply;
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const response = await fetch(`/api/forum/threads/${threadSlug}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(payload?.error ?? copy.error);
        return;
      }
      setContent("");
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(copy.error);
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{copy.title}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">{copy.description}</p>
      </div>
      {error ? <p className="text-xs font-semibold text-rose-500">{error}</p> : null}
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        required
        rows={4}
        className="w-full rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/30"
        placeholder={copy.placeholder}
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
        >
          {pending ? copy.submitting : copy.submit}
        </button>
      </div>
    </form>
  );
}
