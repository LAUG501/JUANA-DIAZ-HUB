"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-context";
import Link from "next/link";

type CalendarHighlight = { label: string; value: string; description: string };

type CalendarEvent = { title: string; category: string; date: string; location: string; status: string };

type CalendarContent = {
  hero: { title: string; subtitle: string; description: string; image: { src: string; alt: string } };
  highlights: CalendarHighlight[];
  weekTitle: string;
  events: CalendarEvent[];
  subscribe: { title: string; description: string; cta: string };
};

const content: Record<"en" | "es", CalendarContent> = {
  en: {
    hero: {
      title: "Full community calendar",
      subtitle: "Every gathering in one bilingual dashboard",
      description:
        "Scan civic meetings, arts showcases, sports, and family programs at a glance. Sync the dates that matter to you and share itineraries with neighbors.",
      image: {
        src: "https://images.pexels.com/photos/903372/pexels-photo-903372.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
        alt: "Festival crowd enjoying live music at night",
      },
    },
    highlights: [
      { label: "Events this month", value: "68", description: "From cultural festivals to grant clinics." },
      { label: "Civic sessions", value: "14", description: "Town halls, budgeting forums, and planning boards." },
      { label: "Youth & family", value: "22", description: "Workshops, science labs, and weekend adventures." },
    ],
    weekTitle: "This week's spotlight",
    events: [
      {
        title: "Juana Díaz Night Market",
        category: "Creative economy",
        date: "Thu · 7:00 PM",
        location: "Plaza Román Baldorioty",
        status: "Open for RSVPs",
      },
      {
        title: "Participatory budget assembly",
        category: "Civic engagement",
        date: "Fri · 6:30 PM",
        location: "Centro Comunal Guayabal",
        status: "Seats limited",
      },
      {
        title: "River stewardship cleanup",
        category: "Environment",
        date: "Sat · 8:00 AM",
        location: "Río Inabón trailhead",
        status: "Volunteers needed",
      },
      {
        title: "Bomba & plena dance lab",
        category: "Culture",
        date: "Sun · 4:00 PM",
        location: "Casa Museo del Peregrino",
        status: "Walk-ins welcome",
      },
    ],
    subscribe: {
      title: "Get weekly reminders",
      description: "Add the calendar to Google, Apple, or Outlook and receive bilingual SMS alerts for weather updates.",
      cta: "Subscribe to alerts",
    },
  },
  es: {
    hero: {
      title: "Calendario comunitario completo",
      subtitle: "Cada actividad en un panel bilingüe",
      description:
        "Revisa reuniones cívicas, espectáculos artísticos, deportes y programas familiares de un vistazo. Sincroniza las fechas importantes y comparte itinerarios con tus vecinos.",
      image: {
        src: "https://images.pexels.com/photos/903372/pexels-photo-903372.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
        alt: "Festival nocturno con música en vivo",
      },
    },
    highlights: [
      { label: "Eventos este mes", value: "68", description: "Festivales culturales, clínicas de subvenciones y más." },
      { label: "Sesiones cívicas", value: "14", description: "Asambleas, foros de presupuesto y juntas de planificación." },
      { label: "Juventud y familia", value: "22", description: "Talleres, laboratorios científicos y aventuras de fin de semana." },
    ],
    weekTitle: "Destacados de la semana",
    events: [
      {
        title: "Mercado nocturno de Juana Díaz",
        category: "Economía creativa",
        date: "Jue · 7:00 PM",
        location: "Plaza Román Baldorioty",
        status: "Abierto para reservaciones",
      },
      {
        title: "Asamblea de presupuesto participativo",
        category: "Participación cívica",
        date: "Vie · 6:30 PM",
        location: "Centro Comunal Guayabal",
        status: "Cupos limitados",
      },
      {
        title: "Limpieza del río Inabón",
        category: "Ambiente",
        date: "Sáb · 8:00 AM",
        location: "Vereda del Río Inabón",
        status: "Se necesitan voluntarios",
      },
      {
        title: "Laboratorio de bomba y plena",
        category: "Cultura",
        date: "Dom · 4:00 PM",
        location: "Casa Museo del Peregrino",
        status: "Entrada libre",
      },
    ],
    subscribe: {
      title: "Recibe recordatorios semanales",
      description: "Añade el calendario a Google, Apple u Outlook y obtén alertas SMS bilingües por clima u horarios.",
      cta: "Suscribirme a las alertas",
    },
  },
};

export default function FullCalendarPage() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <article className="space-y-12">
      <section className="surface overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">{copy.hero.subtitle}</p>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{copy.hero.title}</h1>
            <p className="muted text-base md:text-lg">{copy.hero.description}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {copy.highlights.map((highlight) => (
                <div key={highlight.label} className="surface-muted">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{highlight.label}</p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image src={copy.hero.image.src} alt={copy.hero.image.alt} fill className="object-cover" sizes="(min-width:1024px) 360px, 100vw" />
          </div>
        </div>
      </section>

      <section className="surface space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.weekTitle}</h2>
        <div className="overflow-x-auto rounded-3xl border border-slate-200/80 bg-white/80 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/60">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <thead className="bg-slate-50/80 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/50 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-left font-semibold">{language === "en" ? "Event" : "Evento"}</th>
                <th scope="col" className="px-6 py-3 text-left font-semibold">{language === "en" ? "Category" : "Categoría"}</th>
                <th scope="col" className="px-6 py-3 text-left font-semibold">{language === "en" ? "Date" : "Fecha"}</th>
                <th scope="col" className="px-6 py-3 text-left font-semibold">{language === "en" ? "Location" : "Lugar"}</th>
                <th scope="col" className="px-6 py-3 text-left font-semibold">{language === "en" ? "Status" : "Estado"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {copy.events.map((event) => (
                <tr key={event.title} className="transition hover:bg-primary/5 dark:hover:bg-secondary/10">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{event.title}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{event.category}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{event.date}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{event.location}</td>
                  <td className="px-6 py-4 text-primary dark:text-secondary">{event.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="surface flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.subscribe.title}</h2>
        <p className="muted max-w-2xl">{copy.subscribe.description}</p>
        <Link
          href="/waiting-list"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
        >
          {copy.subscribe.cta}
        </Link>
      </section>
    </article>
  );
}
