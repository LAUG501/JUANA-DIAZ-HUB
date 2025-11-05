"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "../providers/language-context";
import ThreadComposer from "./ThreadComposer";
import type { ThreadSummary } from "@/lib/forum-service";

type Props = {
  threads: ThreadSummary[];
  tags: Array<{ id: string; label: string; slug: string; threadCount: number }>;
};

export default function ForumLanding({ threads, tags }: Props) {
  const { language, dictionary } = useLanguage();
  const copy = dictionary.forum;
  const locale = language === "es" ? "es-PR" : "en-US";
  const numberFormatter = new Intl.NumberFormat(locale);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredThreads = useMemo(() => {
    if (!activeTag) return threads;
    return threads.filter((thread) => thread.tags.some((tag) => tag.slug === activeTag));
  }, [threads, activeTag]);

  const availableTags = useMemo(
    () =>
      tags
        .filter((tag) => tag.threadCount > 0)
        .map((tag) => ({ label: tag.label, slug: tag.slug, count: tag.threadCount })),
    [tags],
  );

  const handleFilter = (slug: string | null) => {
    setActiveTag((previous) => (previous === slug ? null : slug));
  };

  return (
    <div className="space-y-12">
      <section className="surface space-y-5">
        <p className="eyebrow">{copy.hero.eyebrow}</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{copy.hero.title}</h1>
          <p className="muted text-lg">{copy.hero.description}</p>
        </div>
      </section>

      <ThreadComposer
        availableTags={availableTags.map((tag) => ({ label: tag.label, slug: tag.slug, count: tag.count }))}
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.list.activeTitle}</h2>
        {availableTags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleFilter(null)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:focus-visible:outline-secondary ${
                activeTag === null
                  ? "border-primary bg-primary text-white dark:border-secondary dark:bg-secondary dark:text-slate-950"
                  : "border-slate-300/70 bg-white/70 text-slate-600 hover:border-primary hover:text-primary dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-secondary dark:hover:text-secondary"
              }`}
            >
              {copy.list.allTags}
            </button>
            {availableTags.map((tag) => {
              const selected = activeTag === tag.slug;
              return (
                <button
                  key={tag.slug}
                  type="button"
                  onClick={() => handleFilter(tag.slug)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:focus-visible:outline-secondary ${
                    selected
                      ? "border-primary bg-primary text-white dark:border-secondary dark:bg-secondary dark:text-slate-950"
                      : "border-slate-300/70 bg-white/70 text-slate-600 hover:border-primary hover:text-primary dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-secondary dark:hover:text-secondary"
                  }`}
                  aria-pressed={selected}
                >
                  <span>#{tag.label}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-slate-800/70 dark:text-slate-300">
                    {numberFormatter.format(tag.count)}
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
        <div className="grid gap-4">
          {filteredThreads.map((thread) => (
            <article key={thread.id} className="surface-card group">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  <span>{new Date(thread.createdAt).toLocaleDateString(locale)}</span>
                  <span>
                    {copy.list.replyLabel.replace("{count}", numberFormatter.format(thread.replyCount))} · {copy.list.likeLabel.replace("{count}", numberFormatter.format(thread.likeCount))}
                  </span>
                </div>
                <Link
                  href={`/forum/${thread.slug}`}
                  className="inline-flex items-center gap-2 text-left text-lg font-semibold text-slate-900 transition group-hover:text-primary dark:text-white dark:group-hover:text-secondary"
                >
                  {thread.title}
                  <span aria-hidden>→</span>
                </Link>
                <p className="text-sm text-slate-600 dark:text-slate-300">{thread.summary}</p>
                {thread.tags.length > 0 ? (
                  <ul className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide text-primary dark:text-secondary">
                    {thread.tags.map((tag) => (
                      <li key={tag.slug} className="rounded-full bg-primary/10 px-2 py-1 dark:bg-secondary/15">
                        #{tag.label}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {copy.thread.hostedBy.replace("{name}", thread.authorName)}
                </p>
              </div>
            </article>
          ))}
          {filteredThreads.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300/70 bg-white/70 p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
              {copy.list.empty}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
