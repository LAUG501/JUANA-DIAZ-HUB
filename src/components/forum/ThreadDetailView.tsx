"use client";

import LikeButton from "./LikeButton";
import ReplyComposer from "./ReplyComposer";
import { useLanguage } from "../providers/language-context";
import type { ThreadDetail } from "@/lib/forum-service";

type Props = {
  thread: ThreadDetail;
};

export default function ThreadDetailView({ thread }: Props) {
  const { language, dictionary } = useLanguage();
  const copy = dictionary.forum.thread;
  const locale = language === "es" ? "es-PR" : "en-US";

  return (
    <article className="space-y-10">
      <header className="surface space-y-4">
        <p className="eyebrow">{copy.eyebrow}</p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">{thread.title}</h1>
          <p className="muted text-base">{thread.summary}</p>
          {thread.tags.length > 0 ? (
            <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-primary dark:text-secondary">
              {thread.tags.map((tag) => (
                <li key={tag.slug} className="rounded-full bg-primary/10 px-3 py-1 dark:bg-secondary/15">
                  #{tag.label}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {new Date(thread.createdAt).toLocaleString(locale)} · {copy.hostedBy.replace("{name}", thread.authorName)}
            </p>
            <LikeButton threadSlug={thread.slug} initialCount={thread.likeCount} initialLiked={thread.likedByViewer} />
          </div>
        </div>
      </header>

      <section className="space-y-6">
        {thread.posts.map((post, index) => (
          <div key={post.id} className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60">
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              <span>{post.authorName}</span>
              <span>{new Date(post.createdAt).toLocaleString(locale)}</span>
            </div>
            <p className="mt-3 whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-200">{post.content}</p>
            {index === 0 ? (
              <p className="mt-4 text-xs font-semibold text-primary dark:text-secondary">{copy.pinned}</p>
            ) : null}
          </div>
        ))}
      </section>

      <ReplyComposer threadSlug={thread.slug} />
    </article>
  );
}
