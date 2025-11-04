"use client";

import Hero from "../components/Hero";
import Card from "../components/Card";
import LoginSlider from "../components/LoginSlider";
import MapDirections from "../components/MapDirections";
import Link from "next/link";
import { useLanguage } from "../components/providers/language-context";

const homeContent = {
  en: {
    hero: {
      eyebrow: "Community-first platform",
      title: "Juana Díaz Hub",
      description:
        "Your digital plaza for stories, business connections, cultural heritage, and civic action across Juana Díaz and the south coast of Puerto Rico.",
      primaryAction: { label: "Explore the directory", href: "/directory" },
      secondaryAction: { label: "See what's happening", href: "/event-calendar" },
      stats: [
        { value: "250+", label: "Local businesses highlighted" },
        { value: "365", label: "Annual cultural & civic events tracked" },
        { value: "8", label: "Neighborhood spotlights with bilingual stories" },
      ],
    },
    highlights: {
      eyebrow: "Start here",
      title: "Plan your next move in Juana Díaz",
      description:
        "Explore curated directories, event calendars, and storytelling hubs designed to keep residents, visitors, and the diaspora connected.",
      cards: [
        {
          title: "Community directory",
          description: "Browse verified businesses, non-profits, and creative studios ready to collaborate.",
          imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/directory",
        },
        {
          title: "Events calendar",
          description: "Track cultural festivals, civic meetings, and learning labs happening every week.",
          imageUrl: "https://images.pexels.com/photos/2901205/pexels-photo-2901205.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/event-calendar",
        },
        {
          title: "Local stories",
          description: "Discover voices from across Juana Díaz sharing triumphs, traditions, and fresh ideas.",
          imageUrl: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/local-stories",
        },
      ],
    },
    journeys: {
      eyebrow: "One hub, many journeys",
      title: "Connect with the programs that fit you",
      description:
        "Whether you are launching a business, planning a festival, or checking on loved ones after a storm, Juana Díaz Hub centralizes trustworthy information and warm community support.",
      stats: [
        { value: "250+", label: "Verified businesses" },
        { value: "365", label: "Annual events tracked" },
        { value: "140", label: "Mentors supporting residents" },
        { value: "5K", label: "Forum participants" },
      ],
      ctas: [
        { label: "Join the community forum", href: "/forum", variant: "primary" as const },
        { label: "Review safety resources", href: "/safety", variant: "secondary" as const },
      ],
    },
    deepDive: {
      eyebrow: "Keep going",
      title: "Deepen your impact",
      description: "Take advantage of mentorship, workshops, and volunteer opportunities that keep the town thriving.",
      cards: [
        {
          title: "Guides & toolkits",
          description: "Step-by-step resources for launching projects, hosting events, and caring for neighbors.",
          imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/guides",
        },
        {
          title: "Learning hub",
          description: "Micro-courses and workshops designed with local educators and mentors.",
          imageUrl: "https://images.pexels.com/photos/414379/pexels-photo-414379.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/learning-hub",
        },
        {
          title: "Volunteer network",
          description: "Sign up for cultural festivals, safety teams, and mutual aid efforts.",
          imageUrl: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/volunteer",
        },
      ],
    },
    newsletter: {
      eyebrow: "Stay in the loop",
      title: "Weekly highlights delivered to you",
      description: "Receive bilingual recaps of new events, business openings, scholarships, and safety alerts every Thursday.",
      placeholder: "you@email.com",
      cta: "Subscribe",
    },
    map: {
      eyebrow: "Plan your visit",
      title: "Getting here",
      description: "Map your trip from anywhere on the island. Driving, public transit, or walking—choose what works best for you.",
      originPlaceholder: "Enter your starting point (e.g., Ponce, PR)",
      buttonLabel: "Get directions",
      fromLabel: "From",
      quickLinks: [
        { label: "San Juan", origin: "San%20Juan%2C%20PR" },
        { label: "Mayagüez", origin: "Mayaguez%2C%20PR" },
        { label: "Ponce", origin: "Ponce%2C%20PR" },
        { label: "Fajardo", origin: "Fajardo%2C%20PR" },
      ],
    },
    cardCta: "Learn more →",
  },
  es: {
    hero: {
      eyebrow: "Plataforma centrada en la comunidad",
      title: "Juana Díaz Hub",
      description:
        "Tu plaza digital para historias, conexiones de negocios, patrimonio cultural y acción cívica en Juana Díaz y toda la costa sur de Puerto Rico.",
      primaryAction: { label: "Explorar el directorio", href: "/directory" },
      secondaryAction: { label: "Ver qué está pasando", href: "/event-calendar" },
      stats: [
        { value: "250+", label: "Negocios locales destacados" },
        { value: "365", label: "Eventos culturales y cívicos al año" },
        { value: "8", label: "Barrios con historias bilingües" },
      ],
    },
    highlights: {
      eyebrow: "Comienza aquí",
      title: "Planifica tu próximo paso en Juana Díaz",
      description:
        "Explora directorios, calendarios de eventos y espacios de historias creados para residentes, visitantes y la diáspora.",
      cards: [
        {
          title: "Directorio comunitario",
          description: "Encuentra negocios verificados, organizaciones sin fines de lucro y estudios creativos listos para colaborar.",
          imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/directory",
        },
        {
          title: "Calendario de eventos",
          description: "Sigue festivales culturales, reuniones cívicas y laboratorios de aprendizaje cada semana.",
          imageUrl: "https://images.pexels.com/photos/2901205/pexels-photo-2901205.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/event-calendar",
        },
        {
          title: "Historias locales",
          description: "Descubre voces de todo Juana Díaz compartiendo triunfos, tradiciones e ideas frescas.",
          imageUrl: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/local-stories",
        },
      ],
    },
    journeys: {
      eyebrow: "Un solo hub, muchos caminos",
      title: "Conecta con los programas que encajan contigo",
      description:
        "Ya sea que lances un negocio, planifiques un festival o verifiques a tus seres queridos después de una tormenta, Juana Díaz Hub reúne información confiable y apoyo comunitario cálido.",
      stats: [
        { value: "250+", label: "Negocios verificados" },
        { value: "365", label: "Eventos anuales registrados" },
        { value: "140", label: "Mentores apoyando a la comunidad" },
        { value: "5K", label: "Participantes en el foro" },
      ],
      ctas: [
        { label: "Únete al foro comunitario", href: "/forum", variant: "primary" as const },
        { label: "Revisa los recursos de seguridad", href: "/safety", variant: "secondary" as const },
      ],
    },
    deepDive: {
      eyebrow: "Sigue avanzando",
      title: "Profundiza tu impacto",
      description: "Aprovecha mentorías, talleres y voluntariado que mantienen al pueblo vibrante.",
      cards: [
        {
          title: "Guías y herramientas",
          description: "Recursos paso a paso para lanzar proyectos, organizar eventos y cuidar a tu vecindario.",
          imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/guides",
        },
        {
          title: "Centro de aprendizaje",
          description: "Microcursos y talleres diseñados junto a educadores y mentores locales.",
          imageUrl: "https://images.pexels.com/photos/414379/pexels-photo-414379.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/learning-hub",
        },
        {
          title: "Red de voluntariado",
          description: "Inscríbete para festivales culturales, brigadas de seguridad y esfuerzos de ayuda mutua.",
          imageUrl: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/volunteer",
        },
      ],
    },
    newsletter: {
      eyebrow: "Mantente al día",
      title: "Resumen semanal directo a ti",
      description: "Recibe en dos idiomas eventos nuevos, aperturas de negocios, becas y alertas de seguridad cada jueves.",
      placeholder: "tu@correo.com",
      cta: "Suscribirme",
    },
    map: {
      eyebrow: "Planifica tu visita",
      title: "Cómo llegar",
      description: "Traza tu ruta desde cualquier parte de la isla. En auto, transporte público o caminando, elige lo que prefieras.",
      originPlaceholder: "Ingresa tu punto de partida (ej. Ponce, PR)",
      buttonLabel: "Obtener indicaciones",
      fromLabel: "Desde",
      quickLinks: [
        { label: "San Juan", origin: "San%20Juan%2C%20PR" },
        { label: "Mayagüez", origin: "Mayaguez%2C%20PR" },
        { label: "Ponce", origin: "Ponce%2C%20PR" },
        { label: "Fajardo", origin: "Fajardo%2C%20PR" },
      ],
    },
    cardCta: "Ver más →",
  },
};

export default function HomePage() {
  const { language } = useLanguage();
  const t = homeContent[language];

  return (
    <div className="space-y-16">
      <Hero {...t.hero} />

      <section className="surface">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="eyebrow">{t.highlights.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{t.highlights.title}</h2>
            <p className="muted mx-auto max-w-2xl">{t.highlights.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.highlights.cards.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} href={item.href} ctaLabel={t.cardCta} />
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow">{t.journeys.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{t.journeys.title}</h2>
            <p className="muted">{t.journeys.description}</p>
            <div className="flex flex-wrap gap-3">
              {t.journeys.ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
                      : "inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.journeys.stats.map((stat) => (
              <div key={stat.label} className="surface-muted">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-6">
          <div className="space-y-3 text-center">
            <p className="eyebrow">{t.deepDive.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{t.deepDive.title}</h2>
            <p className="muted mx-auto max-w-2xl">{t.deepDive.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.deepDive.cards.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} href={item.href} ctaLabel={t.cardCta} />
            ))}
          </div>
        </div>
      </section>

      <LoginSlider />

      <MapDirections copy={t.map} />

      <section className="surface">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">{t.newsletter.eyebrow}</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.newsletter.title}</h3>
            <p className="muted">{t.newsletter.description}</p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              className="h-12 flex-1 rounded-full border border-slate-200/80 bg-white/80 px-5 text-sm shadow-sm focus:border-primary focus:outline-none dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-100"
              type="email"
              placeholder={t.newsletter.placeholder}
            />
            <button
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
              type="button"
            >
              {t.newsletter.cta}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
