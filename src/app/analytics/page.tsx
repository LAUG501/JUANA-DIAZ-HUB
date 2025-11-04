"use client";

import { useLanguage } from "@/components/providers/language-context";

const copy = {
  en: {
    hero: {
      eyebrow: "Pulse report",
      title: "Community analytics snapshot",
      subtitle:
        "Track how neighbors, businesses, and partners are engaging with Juana Díaz Hub in real time.",
    },
    highlights: [
      { label: "Active members", value: "5.2K", delta: "+8%" },
      { label: "Weekly posts", value: "420", delta: "+12%" },
      { label: "Event RSVPs", value: "1,380", delta: "+5%" },
      { label: "Courses in progress", value: "214", delta: "+3%" },
    ],
    channels: {
      title: "Engagement by channel",
      items: [
        { label: "Forum discussions", value: 72 },
        { label: "Directory clicks", value: 54 },
        { label: "Nightlife guide", value: 38 },
        { label: "Safety hub", value: 45 },
      ],
    },
    activity: {
      title: "This week's activity",
      items: [
        { title: "New member welcomes", description: "32 intros posted in #welcome", time: "2h ago" },
        { title: "Grant writing workshop", description: "96 RSVPs for Thursday's virtual session", time: "5h ago" },
        { title: "Business listing updates", description: "18 entrepreneurs refreshed their profiles", time: "1d ago" },
        { title: "Safety check-in", description: "Community poll reached 540 residents", time: "2d ago" },
      ],
    },
  },
  es: {
    hero: {
      eyebrow: "Informe de pulso",
      title: "Panorama analítico de la comunidad",
      subtitle:
        "Sigue cómo vecinas, negocios y aliados interactúan con Juana Díaz Hub en tiempo real.",
    },
    highlights: [
      { label: "Miembros activos", value: "5.2K", delta: "+8%" },
      { label: "Publicaciones semanales", value: "420", delta: "+12%" },
      { label: "RSVP de eventos", value: "1,380", delta: "+5%" },
      { label: "Cursos en progreso", value: "214", delta: "+3%" },
    ],
    channels: {
      title: "Participación por canal",
      items: [
        { label: "Conversaciones en el foro", value: 72 },
        { label: "Clics al directorio", value: 54 },
        { label: "Guía de vida nocturna", value: 38 },
        { label: "Centro de seguridad", value: 45 },
      ],
    },
    activity: {
      title: "Actividad de esta semana",
      items: [
        { title: "Bienvenidas a nuevos miembros", description: "32 presentaciones en #bienvenida", time: "Hace 2 h" },
        {
          title: "Taller de redacción de propuestas",
          description: "96 registros para la sesión virtual del jueves",
          time: "Hace 5 h",
        },
        {
          title: "Actualizaciones de negocios",
          description: "18 emprendedores renovaron sus perfiles",
          time: "Hace 1 día",
        },
        { title: "Encuesta de seguridad", description: "La consulta alcanzó a 540 residentes", time: "Hace 2 días" },
      ],
    },
  },
};

export default function AnalyticsPage() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <article className="space-y-12">
      <section className="surface">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{t.hero.title}</h1>
        <p className="muted mt-3 max-w-2xl text-base md:text-lg">{t.hero.subtitle}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.highlights.map((item) => (
            <div key={item.label} className="surface-card border border-slate-200/60 dark:border-slate-800/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{item.value}</p>
              <p className="text-sm font-semibold text-primary dark:text-secondary">{item.delta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.channels.title}</h2>
          <div className="mt-6 space-y-4">
            {t.channels.items.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200/70 dark:bg-slate-800/70">
                  <div
                    className="h-2 rounded-full bg-primary dark:bg-secondary"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.activity.title}</h2>
          <div className="space-y-4">
            {t.activity.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/60">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="muted mt-1 text-sm">{item.description}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary dark:text-secondary">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
