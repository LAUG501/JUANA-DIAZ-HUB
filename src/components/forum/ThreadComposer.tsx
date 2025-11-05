"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../providers/language-context";

type Props = {
  onCreated?: () => void;
  availableTags?: Array<{ label: string; slug: string; count?: number }>;
};

export default function ThreadComposer({ onCreated, availableTags = [] }: Props) {
  const router = useRouter();
  const { dictionary } = useLanguage();
  const copy = dictionary.forum.composer;
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [tagQuery, setTagQuery] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/forum/threads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary, content, tags }),
      });
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(payload?.error ?? copy.error);
        return;
      }
      setTitle("");
      setSummary("");
      setContent("");
      setTags([]);
      setTagQuery("");
      onCreated?.();
      router.refresh();
    } catch (err) {
      console.error(err);
      setError(copy.error);
    } finally {
      setPending(false);
    }
  };

  const normalizedQuery = tagQuery.trim().toLowerCase();
  const filteredTagOptions = useMemo(() => {
    const options = availableTags.filter((tag) =>
      tag.label.toLowerCase().includes(normalizedQuery),
    );
    const unique = options.filter((option) => !tags.some((value) => value.toLowerCase() === option.label.toLowerCase()));
    return unique.slice(0, 6);
  }, [availableTags, normalizedQuery, tags]);

  const addTag = (label: string) => {
    const normalized = label.trim();
    if (!normalized) return;
    setTags((previous) => {
      if (previous.includes(normalized) || previous.length >= 5) {
        return previous;
      }
      return [...previous, normalized];
    });
    setTagQuery("");
  };

  const removeTag = (label: string) => {
    setTags((previous) => previous.filter((tag) => tag !== label));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{copy.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">{copy.description}</p>
      </div>
      {error ? <p className="text-sm font-semibold text-rose-500">{error}</p> : null}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="thread-title">
          {copy.titleLabel}
        </label>
        <input
          id="thread-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
          maxLength={120}
          className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/30"
          placeholder={copy.titlePlaceholder}
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="thread-summary">
          {copy.summaryLabel}
        </label>
        <input
          id="thread-summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          required
          maxLength={200}
          className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/30"
          placeholder={copy.summaryPlaceholder}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="thread-tags">
            {copy.tagsLabel}
          </label>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {copy.tagsHint.replace("{count}", String(5 - tags.length))}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-secondary/15 dark:text-secondary"
            >
              #{tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="rounded-full bg-white/40 px-1 text-[10px] font-bold text-primary transition hover:bg-primary hover:text-white dark:bg-slate-900/60 dark:text-secondary dark:hover:bg-secondary dark:hover:text-slate-950"
                aria-label={copy.removeTag.replace("{tag}", tag)}
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="relative">
          <input
            id="thread-tags"
            value={tagQuery}
            onChange={(event) => setTagQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                if (tagQuery.trim()) addTag(tagQuery);
              }
            }}
            maxLength={32}
            className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/30"
            placeholder={copy.tagsPlaceholder}
          />
          {filteredTagOptions.length > 0 ? (
            <ul className="absolute z-10 mt-2 max-h-48 w-full overflow-auto rounded-2xl border border-slate-200/80 bg-white/95 p-2 text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900/95">
              {filteredTagOptions.map((option) => (
                <li key={option.slug}>
                  <button
                    type="button"
                    onClick={() => addTag(option.label)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm text-slate-700 transition hover:bg-primary/10 hover:text-primary dark:text-slate-200 dark:hover:bg-secondary/15 dark:hover:text-secondary"
                  >
                    <span>#{option.label}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {copy.tagCount.replace("{count}", String(option.count ?? 0))}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="thread-content">
          {copy.detailsLabel}
        </label>
        <textarea
          id="thread-content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          required
          rows={5}
          className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/30"
          placeholder={copy.detailsPlaceholder}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
        >
          {pending ? copy.submitting : copy.submit}
        </button>
      </div>
    </form>
  );
}
