"use client";

import Link from "next/link";
import { useLanguage } from "../providers/language-context";
import ThreadComposer from "./ThreadComposer";
import type { ThreadSummary } from "@/lib/forum-service";

type Props = {
  threads: ThreadSummary[];
};

export default function ForumLanding({ threads }: Props) {
  const { language, dictionary } = useLanguage();
  const copy = dictionary.forum;
  const locale = language === "es" ? "es-PR" : "en-US";
  const numberFormatter = new Intl.NumberFormat(locale);

  return (
    <div className="space-y-12">
      <section className="surface space-y-5">
        <p className="eyebrow">{copy.hero.eyebrow}</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{copy.hero.title}</h1>
          <p className="muted text-lg">{copy.hero.description}</p>
        </div>
      </section>

      <ThreadComposer />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.list.activeTitle}</h2>
        <div className="grid gap-4">
          {threads.map((thread) => (
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
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {copy.thread.hostedBy.replace("{name}", thread.authorName)}
                </p>
              </div>
            </article>
          ))}
          {threads.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300/70 bg-white/70 p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
              {copy.list.empty}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
