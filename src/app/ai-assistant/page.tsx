"use client";

import { useLanguage } from "@/components/providers/language-context";
import Link from "next/link";

const copy = {
  en: {
    title: "AI assistant",
    subtitle: "A bilingual concierge for your hub",
    intro:
      "Ask questions about events, find directories faster, and get instant translations between English and Spanish. Our assistant is grounded in Juana Díaz data so answers stay relevant to the community.",
    features: [
      {
        title: "Smart search",
        description: "Type natural questions like ‘What festivals happen this weekend?’ and receive curated recommendations instantly.",
      },
      {
        title: "Community aware",
        description: "Responses reference verified directory listings, safety alerts, and public notices to keep you informed.",
      },
      {
        title: "Task shortcuts",
        description: "Generate itineraries, draft bilingual posts, or create reminders you can save to your dashboard in seconds.",
      },
    ],
    cta: "Try the assistant",
    tips: [
      "Ask in English or Spanish — the assistant responds in your selected language.",
      "Mention ‘share’ to receive a ready-to-post forum message or newsletter update.",
      "Use ‘summarize’ with any long article or civic notice for a quick recap.",
    ],
  },
  es: {
    title: "Asistente IA",
    subtitle: "Tu concierge bilingüe del hub",
    intro:
      "Haz preguntas sobre eventos, encuentra directorios más rápido y obtén traducciones instantáneas entre inglés y español. El asistente usa datos de Juana Díaz para darte respuestas pertinentes a la comunidad.",
    features: [
      {
        title: "Búsqueda inteligente",
        description: "Escribe preguntas naturales como ‘¿Qué festivales hay este fin de semana?’ y recibe recomendaciones al instante.",
      },
      {
        title: "Contexto comunitario",
        description: "Las respuestas incluyen listados verificados, alertas de seguridad y avisos públicos para mantenerte informado.",
      },
      {
        title: "Atajos de tareas",
        description: "Genera itinerarios, redacta publicaciones bilingües o crea recordatorios para tu panel en segundos.",
      },
    ],
    cta: "Probar el asistente",
    tips: [
      "Pregunta en inglés o español; el asistente responde en tu idioma.",
      "Escribe ‘compartir’ para recibir un mensaje listo para publicar en el foro o boletín.",
      "Usa ‘resumir’ con artículos o avisos largos para obtener un resumen rápido.",
    ],
  },
} as const;

export default function AiAssistantPage() {
  const { language } = useLanguage();
  const data = copy[language];

  return (
    <article className="space-y-12">
      <section className="surface space-y-4 text-center">
        <p className="eyebrow">{data.subtitle}</p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{data.title}</h1>
        <p className="muted mx-auto max-w-3xl text-base md:text-lg">{data.intro}</p>
        <Link
          href="/login"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
        >
          {data.cta}
        </Link>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {data.features.map((feature) => (
          <div key={feature.title} className="surface">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h2>
            <p className="muted mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="surface">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{language === "en" ? "Pro tips" : "Consejos"}</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700 marker:text-primary dark:text-slate-300 dark:marker:text-secondary">
          {data.tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-secondary" aria-hidden />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
