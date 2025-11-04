"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-context";

type Topic = {
  title: string;
  author: string;
  replies: number | string;
  lastPost: string;
};

type Category = {
  title: string;
  subtitle: string;
  topics: Topic[];
};

const forumContent: Record<"en" | "es", {
  hero: { eyebrow: string; title: string; intro: string };
  categories: Category[];
  comingSoon: { title: string; description: string; ctaLabel: string; ctaHref: string };
  heroImage: { src: string; alt: string };
  footerCta: { text: string; href: string; label: string };
  table: {
    headers: string[];
    rows: { topic: string; channel: string; replies: string; activity: string }[];
  };
}> = {
  en: {
    hero: {
      eyebrow: "Community forum",
      title: "Juana Díaz Community Forum",
      intro: "Welcome to the Juana Díaz forums — local connections, meet-ups, and community conversation.",
    },
    table: {
      headers: ["Topic", "Channel", "Replies", "Activity"],
      rows: [
        { topic: "Reyes Parade logistics", channel: "Civic innovation", replies: "18", activity: "Updated 12m ago" },
        { topic: "Artists needed for Plaza mural", channel: "Creative collabs", replies: "25", activity: "Updated 45m ago" },
        { topic: "Vendor permits Q1", channel: "Business lab", replies: "9", activity: "Updated 2h ago" },
        { topic: "Mutual aid pantry restock", channel: "Mutual aid", replies: "14", activity: "Updated 4h ago" },
        { topic: "Community healing circle", channel: "Wellness circle", replies: "7", activity: "Updated 6h ago" },
      ],
    },
    categories: [
      {
        title: "Welcome & Introductions",
        subtitle: "Start here to meet neighbors and learn the ground rules.",
        topics: [
          { title: "👋 New Members: Introduce Yourself!", author: "Admin", replies: 12, lastPost: "2h ago" },
          { title: "Community Rules & Guidelines", author: "Moderator", replies: 5, lastPost: "1d ago" },
          { title: "Weekly Meet-Ups and Events", author: "MarisolPR", replies: 8, lastPost: "4h ago" },
        ],
      },
      {
        title: "Local Life & Recommendations",
        subtitle: "Restaurants • Shops • Things to Do",
        topics: [
          { title: "Best Coffee Spots in Downtown Juana Díaz ☕", author: "CarlosR", replies: 24, lastPost: "3h ago" },
          { title: "Hidden Beaches Near Ponce", author: "Traveler86", replies: 9, lastPost: "5h ago" },
          { title: "Family-Friendly Weekend Ideas?", author: "TaniaS", replies: 4, lastPost: "1d ago" },
        ],
      },
      {
        title: "Community Help & New Residents",
        subtitle: "Questions • Housing • Moving Support",
        topics: [
          { title: "Coming Soon: 'New to the Area?' Welcome Thread", author: "System", replies: 0, lastPost: "Pending" },
          { title: "Looking for Apartment Rentals near Town Center", author: "MiguelD", replies: 3, lastPost: "8h ago" },
          { title: "Moving Here – What Should I Know?", author: "AnnaV", replies: 10, lastPost: "6h ago" },
        ],
      },
    ],
    comingSoon: {
      title: "Coming Soon: Interactive Forum Tools",
      description:
        "Create accounts, post updates, and message local members. Features for “New to the Area?” and “Moving Here?” discussions are under development.",
      ctaLabel: "Back to Explore",
      ctaHref: "/explore",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2000&q=60",
      alt: "Community meeting in Puerto Rico",
    },
    footerCta: {
      text: "Ready to participate? Sign in to personalize notifications, follow threads, and receive weekly digests.",
      href: "/login",
      label: "Go to sign in",
    },
  },
  es: {
    hero: {
      eyebrow: "Foro comunitario",
      title: "Foro Comunitario de Juana Díaz",
      intro: "Bienvenido al foro de Juana Díaz — conecta con vecinos, organiza encuentros y comparte información.",
    },
    table: {
      headers: ["Tema", "Canal", "Respuestas", "Actividad"],
      rows: [
        { topic: "Logística del Desfile de Reyes", channel: "Innovación cívica", replies: "18", activity: "Actualizado hace 12 min" },
        { topic: "Artistas para mural en la plaza", channel: "Colaboraciones creativas", replies: "25", activity: "Actualizado hace 45 min" },
        { topic: "Permisos de vendedores T1", channel: "Laboratorio de negocios", replies: "9", activity: "Actualizado hace 2 h" },
        { topic: "Reabastecer la despensa solidaria", channel: "Ayuda mutua", replies: "14", activity: "Actualizado hace 4 h" },
        { topic: "Círculo de sanación comunitaria", channel: "Círculo de bienestar", replies: "7", activity: "Actualizado hace 6 h" },
      ],
    },
    categories: [
      {
        title: "Bienvenidas y presentaciones",
        subtitle: "Comienza aquí para conocer a la comunidad y repasar las reglas.",
        topics: [
          { title: "👋 Nuevos miembros: ¡Preséntense!", author: "Admin", replies: 12, lastPost: "Hace 2 h" },
          { title: "Reglas y guías de la comunidad", author: "Moderador", replies: 5, lastPost: "Hace 1 día" },
          { title: "Encuentros y eventos de la semana", author: "MarisolPR", replies: 8, lastPost: "Hace 4 h" },
        ],
      },
      {
        title: "Vida local y recomendaciones",
        subtitle: "Restaurantes • Tiendas • Qué hacer",
        topics: [
          { title: "Mejores cafés en el centro de Juana Díaz ☕", author: "CarlosR", replies: 24, lastPost: "Hace 3 h" },
          { title: "Playas escondidas cerca de Ponce", author: "Traveler86", replies: 9, lastPost: "Hace 5 h" },
          { title: "¿Ideas familiares para el fin de semana?", author: "TaniaS", replies: 4, lastPost: "Hace 1 día" },
        ],
      },
      {
        title: "Ayuda comunitaria y nuevos residentes",
        subtitle: "Preguntas • Vivienda • Apoyo al mudarse",
        topics: [
          { title: "Próximamente: hilo de bienvenida para recién llegados", author: "Sistema", replies: 0, lastPost: "En espera" },
          { title: "Buscando alquileres cerca del centro", author: "MiguelD", replies: 3, lastPost: "Hace 8 h" },
          { title: "Me mudo a Juana Díaz, ¿qué debo saber?", author: "AnnaV", replies: 10, lastPost: "Hace 6 h" },
        ],
      },
    ],
    comingSoon: {
      title: "Muy pronto: herramientas interactivas",
      description:
        "Crea tu cuenta, publica actualizaciones y envía mensajes a vecinos. Las secciones “¿Nuevo en el área?” y “Me mudo” están en desarrollo.",
      ctaLabel: "Volver a Explorar",
      ctaHref: "/explore",
    },
    heroImage: {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2000&q=60",
      alt: "Reunión comunitaria en Puerto Rico",
    },
    footerCta: {
      text: "¿Listo para participar? Inicia sesión para personalizar notificaciones, seguir hilos y recibir resúmenes semanales.",
      href: "/login",
      label: "Ir a iniciar sesión",
    },
  },
};

export default function ForumPage() {
  const { language } = useLanguage();
  const content = forumContent[language];

  return (
    <article className="space-y-12">
      <section className="surface space-y-5">
        <div className="space-y-3 text-center">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{content.hero.title}</h1>
          <p className="muted mx-auto max-w-2xl">{content.hero.intro}</p>
        </div>
      </section>

      <section className="surface overflow-hidden">
        <div className="overflow-x-auto rounded-3xl border border-slate-200/70 bg-white/80 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/60">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50/80 text-xs uppercase tracking-wider text-slate-500 dark:bg-slate-900/50 dark:text-slate-400">
              <tr>
                {content.table.headers.map((header) => (
                  <th key={header} scope="col" className="px-6 py-3 text-left font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm dark:divide-slate-800">
              {content.table.rows.map((row) => (
                <tr key={row.topic} className="transition hover:bg-primary/5 dark:hover:bg-secondary/10">
                  <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white">{row.topic}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{row.channel}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{row.replies}</td>
                  <td className="px-6 py-4 text-primary dark:text-secondary">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-8">
        {content.categories.map((category) => (
          <div key={category.title} className="surface">
            <div className="border-b border-slate-200/70 bg-slate-50 px-6 py-4 dark:border-slate-800/60 dark:bg-slate-900/40">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h2>
              <p className="muted mt-1">{category.subtitle}</p>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {category.topics.map((topic) => (
                <div
                  key={topic.title}
                  className="flex flex-col gap-2 px-6 py-4 transition hover:bg-primary/5 dark:hover:bg-secondary/10 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{topic.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {language === "en" ? "Posted by" : "Publicado por"} {topic.author}
                    </p>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    <p>
                      {typeof topic.replies === "number"
                        ? `${topic.replies} ${language === "en" ? "replies" : "respuestas"}`
                        : topic.replies}
                    </p>
                    <p>{topic.lastPost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="surface text-center">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{content.comingSoon.title}</h2>
        <p className="muted mt-2 max-w-2xl mx-auto">{content.comingSoon.description}</p>
        <div className="mt-6">
          <Link
            href={content.comingSoon.ctaHref}
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
          >
            {content.comingSoon.ctaLabel} →
          </Link>
        </div>
      </section>

      <section className="surface overflow-hidden">
        <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-lg">
          <Image src={content.heroImage.src} alt={content.heroImage.alt} fill className="object-cover" sizes="100vw" />
        </div>
      </section>

      <section className="surface text-center">
        <p className="muted mx-auto max-w-2xl">{content.footerCta.text}</p>
        <div className="mt-6">
          <Link
            href={content.footerCta.href}
            className="inline-flex items-center rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
          >
            {content.footerCta.label}
          </Link>
        </div>
      </section>
    </article>
  );
}
