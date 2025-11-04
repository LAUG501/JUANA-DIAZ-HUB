"use client";

import { useLanguage } from "../providers/language-context";
import AiChatPanel from "./AiChatPanel";

import type { ProviderSummary, UsageEntry } from "@/lib/ai-service";

const copy = {
  en: {
    hero: {
      eyebrow: "AI Lab",
      title: "Experiment with community-vetted AI keys",
      description:
        "Launch prompts, monitor token usage, and subscribe to the RSS feed that tracks new public API keys for builders across Juana Díaz.",
      rssCta: "Subscribe to RSS feed",
    },
    chat: {
      providerLabel: "Provider",
      promptLabel: "Prompt",
      promptPlaceholder: "Describe the idea or task you need help with.",
      submit: "Send to assistant",
      generating: "Generating...",
      chooseProvider: "Choose a provider first.",
      defaultError: "Unable to reach assistant.",
      tokensLabel: "Tokens used",
      statusLabel: {
        ok: "Logged successfully",
        limit: "Provider quota reached",
        error: "Proxy error",
      },
    },
    usage: {
      title: "Recent usage",
      subtitle: "Every test logs tokens so you can track quotas and renewal cycles.",
      table: {
        date: "Date",
        provider: "Provider",
        tokens: "Tokens",
        status: "Status",
        notes: "Notes",
        empty: "No usage yet. Run your first prompt above.",
      },
      status: {
        ok: "Healthy",
        limit: "Limit",
        error: "Error",
      },
    },
  },
  es: {
    hero: {
      eyebrow: "Laboratorio IA",
      title: "Experimenta con llaves IA validadas por la comunidad",
      description:
        "Lanza prompts, monitorea consumo de tokens y suscríbete al RSS que rastrea nuevas llaves públicas para creadoras en Juana Díaz.",
      rssCta: "Suscribirme al RSS",
    },
    chat: {
      providerLabel: "Proveedor",
      promptLabel: "Consulta",
      promptPlaceholder: "Describe la idea o tarea con la que necesitas ayuda.",
      submit: "Enviar al asistente",
      generating: "Generando...",
      chooseProvider: "Elige un proveedor primero.",
      defaultError: "No pudimos contactar al asistente.",
      tokensLabel: "Tokens usados",
      statusLabel: {
        ok: "Registrado con éxito",
        limit: "Proveedor en límite",
        error: "Error del proxy",
      },
    },
    usage: {
      title: "Uso reciente",
      subtitle: "Cada prueba registra tokens para seguir cuotas y fechas de renovación.",
      table: {
        date: "Fecha",
        provider: "Proveedor",
        tokens: "Tokens",
        status: "Estado",
        notes: "Notas",
        empty: "Aún no hay registros. Ejecuta tu primer prompt arriba.",
      },
      status: {
        ok: "Saludable",
        limit: "Límite",
        error: "Error",
      },
    },
  },
} as const;

type Props = {
  providers: ProviderSummary[];
  usage: UsageEntry[];
};

export default function AiLabView({ providers, usage }: Props) {
  const { language } = useLanguage();
  const t = copy[language];
  const locale = language === "es" ? "es-PR" : "en-US";
  const statusClass: Record<"ok" | "limit" | "error", string> = {
    ok: "border-emerald-400/40 bg-emerald-100/60 text-emerald-600 dark:border-emerald-500/40 dark:bg-emerald-500/20 dark:text-emerald-300",
    limit:
      "border-amber-400/40 bg-amber-100/60 text-amber-600 dark:border-amber-500/40 dark:bg-amber-500/20 dark:text-amber-300",
    error:
      "border-rose-400/40 bg-rose-100/60 text-rose-600 dark:border-rose-500/40 dark:bg-rose-500/20 dark:text-rose-300",
  };

  return (
    <div className="space-y-12">
      <section className="surface space-y-5">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{t.hero.title}</h1>
          <p className="muted text-lg">{t.hero.description}</p>
          <a
            href="/api/ai/rss"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-primary transition hover:bg-primary/20 dark:border-secondary/40 dark:bg-secondary/20 dark:text-secondary dark:hover:bg-secondary/30"
          >
            {t.hero.rssCta}
          </a>
        </div>
      </section>

      <AiChatPanel
        providers={providers.map((provider) => ({ id: provider.id, label: provider.label }))}
        copy={t.chat}
      />

      <section className="surface space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.usage.title}</h2>
          <p className="muted text-sm">{t.usage.subtitle}</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/60">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <thead className="bg-slate-50/80 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
              <tr>
                <th className="px-4 py-3">{t.usage.table.date}</th>
                <th className="px-4 py-3">{t.usage.table.provider}</th>
                <th className="px-4 py-3">{t.usage.table.tokens}</th>
                <th className="px-4 py-3">{t.usage.table.status}</th>
                <th className="px-4 py-3">{t.usage.table.notes}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 dark:divide-slate-800 dark:text-slate-200">
              {usage.map((entry) => (
                <tr key={entry.id}>
                  <td className="px-4 py-3 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {new Date(entry.createdAt).toLocaleString(locale)}
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{entry.providerLabel}</td>
                  <td className="px-4 py-3">{entry.tokensUsed}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase ${statusClass[entry.status]}`}
                    >
                      ● {t.usage.status[entry.status] ?? entry.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500 dark:text-slate-400">{entry.notes ?? "—"}</td>
                </tr>
              ))}
              {usage.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                    {t.usage.table.empty}
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
