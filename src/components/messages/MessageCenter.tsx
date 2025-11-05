"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../providers/language-context";
import type { MessagePreview } from "@/lib/message-service";

type Props = {
  messages: MessagePreview[];
};

export default function MessageCenter({ messages }: Props) {
  const { language } = useLanguage();
  const locale = language === "es" ? "es-PR" : "en-US";
  const [selectedId, setSelectedId] = useState(messages[0]?.id ?? "");
  const text = language === "es"
    ? {
        inbox: "Bandeja de entrada",
        message: "Mensaje",
        quickReply: "Respuesta rápida",
        placeholder: "Escribe una respuesta para mantener la coordinación.",
        send: "Enviar",
        empty: "Aún no hay mensajes.",
        select: "Selecciona un mensaje para ver los detalles.",
      }
    : {
        inbox: "Inbox",
        message: "Message",
        quickReply: "Quick response",
        placeholder: "Draft a reply to keep coordination flowing.",
        send: "Send",
        empty: "No messages yet.",
        select: "Select a message to view details.",
      };

  const selectedMessage = useMemo(
    () => messages.find((message) => message.id === selectedId) ?? messages[0] ?? null,
    [messages, selectedId],
  );

  return (
    <section className="surface space-y-6">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{text.inbox}</h2>
          <ul className="space-y-3">
            {messages.map((message) => {
              const isActive = selectedMessage?.id === message.id;
              return (
                <li key={message.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(message.id)}
                    className={`w-full rounded-3xl border px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:focus-visible:outline-secondary ${
                      isActive
                        ? "border-primary bg-primary/10 text-primary dark:border-secondary dark:bg-secondary/20 dark:text-secondary"
                        : "border-slate-200/80 bg-white/80 text-slate-700 hover:border-primary hover:text-primary dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold leading-tight">{message.subject}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {message.senderName} · {new Date(message.createdAt).toLocaleDateString(locale)}
                        </p>
                      </div>
                      {message.read ? null : (
                        <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-secondary" aria-hidden />
                      )}
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">{message.snippet}</p>
                  </button>
                </li>
              );
            })}
            {messages.length === 0 ? (
              <li className="rounded-3xl border border-dashed border-slate-300/70 bg-white/70 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
                {text.empty}
              </li>
            ) : null}
          </ul>
        </aside>
        <article className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
          {selectedMessage ? (
            <>
              <header className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-secondary">{text.message}</p>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{selectedMessage.subject}</h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary dark:bg-secondary/20 dark:text-secondary">
                    {selectedMessage.senderName
                      .split(" ")
                      .map((part) => part.charAt(0).toUpperCase())
                      .join("")}
                  </span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    {selectedMessage.senderName}
                  </span>
                  <span className="text-slate-400">{selectedMessage.senderEmail}</span>
                  <span>·</span>
                  <span>{new Date(selectedMessage.createdAt).toLocaleString(locale)}</span>
                </div>
              </header>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {selectedMessage.body}
              </p>
              <footer className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{text.quickReply}</h4>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/30"
                  placeholder={text.placeholder}
                />
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
                >
                  {text.send}
                </button>
              </footer>
            </>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">{text.select}</p>
          )}
        </article>
      </div>
    </section>
  );
}
