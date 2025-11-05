"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../providers/language-context";

import type { ThreadSummary } from "@/lib/forum-service";

type ModerationThread = ThreadSummary;

type StatusState = { threadId: string; type: "idle" | "processing" | "success" | "error" };

export default function ForumModerationPanel() {
  const { dictionary, language } = useLanguage();
  const copy = dictionary.admin.moderation;
  const [threads, setThreads] = useState<ModerationThread[]>([]);
  const [status, setStatus] = useState<StatusState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const loadThreads = async () => {
      try {
        const response = await fetch("/api/forum/threads", { cache: "no-store" });
        if (!active) return;
        if (!response.ok) {
          setThreads([]);
          setLoading(false);
          return;
        }
        const data = (await response.json()) as { threads: ThreadSummary[] };
        setThreads(data.threads ?? []);
      } catch (error) {
        console.error("Failed to load threads", error);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadThreads();
    return () => {
      active = false;
    };
  }, []);

  const handleArchive = async (threadId: string) => {
    if (!window.confirm(copy.confirm)) {
      return;
    }
    setStatus({ threadId, type: "processing" });
    try {
      const response = await fetch(`/api/admin/forum/threads/${threadId}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to archive");
      }
      setThreads((previous) => previous.filter((thread) => thread.id !== threadId));
      setStatus({ threadId, type: "success" });
    } catch (error) {
      console.error("Unable to archive thread", error);
      setStatus({ threadId, type: "error" });
    }
  };

  const locale = language === "es" ? "es-PR" : "en-US";
  const loadingLabel = language === "es" ? "Cargando..." : "Loading...";

  return (
    <section className="surface space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.title}</h2>
        <p className="muted text-sm">{copy.description}</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
        <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
          <thead className="bg-slate-50/80 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3">{copy.table.thread}</th>
              <th className="px-4 py-3">{copy.table.tags}</th>
              <th className="px-4 py-3">{copy.table.replies}</th>
              <th className="px-4 py-3">{copy.table.likes}</th>
              <th className="px-4 py-3 text-right">{copy.table.actions}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-200">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  {loadingLabel}
                </td>
              </tr>
            ) : threads.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                  {copy.empty}
                </td>
              </tr>
            ) : (
              threads.map((thread) => {
                const currentStatus = status?.threadId === thread.id ? status.type : "idle";
                return (
                  <tr key={thread.id}>
                    <td className="px-4 py-4">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{thread.title}</p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        {new Date(thread.createdAt).toLocaleString(locale)}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      {thread.tags.length > 0 ? (
                        <ul className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wide text-primary dark:text-secondary">
                          {thread.tags.map((tag) => (
                            <li key={tag.slug} className="rounded-full bg-primary/10 px-2 py-1 dark:bg-secondary/15">
                              #{tag.label}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-xs text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {thread.replyCount}
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      {thread.likeCount}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleArchive(thread.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-rose-300 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-rose-600 transition hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:border-rose-500/60 dark:text-rose-300 dark:hover:bg-rose-500 dark:hover:text-slate-950"
                        disabled={currentStatus === "processing"}
                      >
                        {currentStatus === "processing"
                          ? copy.remove
                          : currentStatus === "success"
                          ? copy.removed
                          : currentStatus === "error"
                          ? copy.error
                          : copy.remove}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
