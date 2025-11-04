"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useLanguage } from "@/components/providers/language-context";

const content = {
  en: {
    hero: {
      eyebrow: "Don't miss out",
      title: "Join the Juana Díaz Hub waiting list",
      description:
        "Be the first to access new community features, live analytics, and exclusive cultural programming when they launch.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        alt: "Community meeting in Juana Díaz",
      },
    },
    benefits: [
      {
        title: "Early feature previews",
        description: "Try collaboration tools, bilingual messaging, and event workflows before public release.",
      },
      {
        title: "Priority invitations",
        description: "Secure seats for workshops, mentorship circles, and civic design sprints.",
      },
      {
        title: "Insider updates",
        description: "Receive monthly product roadmaps and share feedback that shapes the hub.",
      },
    ],
    form: {
      title: "Reserve your spot",
      description: "Tell us a little about yourself so we can tailor the experience when onboarding opens.",
      nameLabel: "Full name",
      emailLabel: "Email",
      roleLabel: "How do you plan to use the hub?",
      rolePlaceholder: "Community organizer, entrepreneur, artist...",
      submit: "Join the waitlist",
      success: "You're on the list! We'll share updates soon.",
    },
  },
  es: {
    hero: {
      eyebrow: "No te quedes fuera",
      title: "Únete a la lista de espera de Juana Díaz Hub",
      description:
        "Sé de las primeras personas en acceder a nuevas funciones comunitarias, analíticas en vivo y programación cultural exclusiva.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
        alt: "Reunión comunitaria en Juana Díaz",
      },
    },
    benefits: [
      {
        title: "Funciones en avance",
        description: "Prueba herramientas de colaboración, mensajería bilingüe y flujos de eventos antes del lanzamiento público.",
      },
      {
        title: "Invitaciones prioritarias",
        description: "Asegura tu espacio en talleres, círculos de mentoría y laboratorios cívicos.",
      },
      {
        title: "Actualizaciones internas",
        description: "Recibe la hoja de ruta mensual y comparte comentarios que guían el hub.",
      },
    ],
    form: {
      title: "Reserva tu espacio",
      description: "Cuéntanos un poco sobre ti para personalizar la experiencia cuando abra el registro.",
      nameLabel: "Nombre completo",
      emailLabel: "Correo electrónico",
      roleLabel: "¿Cómo planeas usar el hub?",
      rolePlaceholder: "Organizador comunitario, emprendedor, artista...",
      submit: "Unirme a la lista",
      success: "¡Ya estás en la lista! Pronto compartiremos novedades.",
    },
  },
};

export default function WaitingListPage() {
  const { language } = useLanguage();
  const copy = content[language];
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <article className="space-y-12">
      <section className="surface overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,420px)] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{copy.hero.title}</h1>
            <p className="muted text-base md:text-lg">{copy.hero.description}</p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={copy.hero.image.src}
              alt={copy.hero.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {copy.benefits.map((benefit) => (
            <div key={benefit.title} className="surface-card h-full">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{benefit.title}</h2>
              <p className="muted mt-2 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.form.title}</h2>
            <p className="muted text-base">{copy.form.description}</p>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Event pilots • Cohort-based courses • Safety alerts</li>
              <li>• Perks for organizations and solo creators</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/60">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              {copy.form.nameLabel}
              <input
                required
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              {copy.form.emailLabel}
              <input
                required
                type="email"
                className="mt-1 w-full rounded-xl border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100"
              />
            </label>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
              {copy.form.roleLabel}
              <input
                type="text"
                placeholder={copy.form.rolePlaceholder}
                className="mt-1 w-full rounded-xl border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
            >
              {submitted ? copy.form.success : copy.form.submit}
            </button>
          </form>
        </div>
      </section>
    </article>
  );
}
