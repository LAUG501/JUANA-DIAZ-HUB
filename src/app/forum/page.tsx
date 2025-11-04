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

type Insight = {
  title: string;
  stat: string;
  description: string;
};

type MessagePreview = {
  sender: string;
  avatar: string;
  membership: string;
  preview: string;
  time: string;
};

type MessageDigest = {
  heading: string;
  description: string;
  items: MessagePreview[];
  panelTitle: string;
  panelDescription: string;
  thread: {
    author: string;
    timestamp: string;
    body: string;
    replies: { author: string; timestamp: string; body: string }[];
  };
};

const forumContent: Record<"en" | "es", {
  hero: { eyebrow: string; title: string; intro: string };
  categories: Category[];
  insights: Insight[];
  messages: MessageDigest;
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
    insights: [
      { title: "Forum members", stat: "5.2K", description: "Neighbors participating each month." },
      { title: "Active channels", stat: "26", description: "Curated spaces across civic, culture, and business." },
      { title: "Average response time", stat: "2h", description: "Moderators and peers keep threads moving." },
    ],
    messages: {
      heading: "Inbox preview",
      description: "See who reached out recently and jump back into threads without leaving this page.",
      items: [
        {
          sender: "MarisolPR",
          avatar: "🌟",
          membership: "Member · 3 years",
          preview: "Thanks for joining the Festival de la Luz crew — we meet Wednesday at 6pm.",
          time: "12m",
        },
        {
          sender: "CivicLab",
          avatar: "🏛️",
          membership: "Moderator · 2 years",
          preview: "Draft agenda for the mobility pilot is ready for your feedback.",
          time: "38m",
        },
        {
          sender: "YouthVoices",
          avatar: "🎓",
          membership: "Member · 8 months",
          preview: "Can we highlight the robotics showcase in this week's newsletter?",
          time: "1h",
        },
      ],
      panelTitle: "Collaboration thread",
      panelDescription: "Producers and volunteers planning the Juana Díaz Night Market.",
      thread: {
        author: "MarisolPR",
        timestamp: "Posted 2 hours ago",
        body: "Kicking off logistics for the night market: need confirmation on vendor power needs, youth performers, and bilingual signage. Reply with updates so we can finalize permits by Friday.",
        replies: [
          {
            author: "LogisticsLab",
            timestamp: "1h ago",
            body: "Confirmed 18 vendors — 10 require electrical drops, 8 are bringing battery setups. Shared layout in Drive folder.",
          },
          {
            author: "YouthVoices",
            timestamp: "35m ago",
            body: "Student dance collective is available for a 7:30pm slot. Uploaded stage plot and accessibility notes.",
          },
        ],
      },
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
    insights: [
      { title: "Miembros activos", stat: "5.2K", description: "Vecinas y vecinos participando cada mes." },
      { title: "Canales moderados", stat: "26", description: "Espacios curados entre temas cívicos, cultura y negocios." },
      { title: "Tiempo de respuesta", stat: "2 h", description: "Moderadores y miembros responden con rapidez." },
    ],
    messages: {
      heading: "Vista previa de mensajes",
      description: "Revisa quién te escribió recientemente y regresa a los hilos sin salir de la página.",
      items: [
        {
          sender: "MarisolPR",
          avatar: "🌟",
          membership: "Miembra · 3 años",
          preview: "Gracias por unirte a la brigada del Festival de la Luz — nos reunimos miércoles a las 6pm.",
          time: "Hace 12 min",
        },
        {
          sender: "CivicLab",
          avatar: "🏛️",
          membership: "Moderador · 2 años",
          preview: "El borrador de agenda para el piloto de movilidad está listo para tus comentarios.",
          time: "Hace 38 min",
        },
        {
          sender: "YouthVoices",
          avatar: "🎓",
          membership: "Miembra · 8 meses",
          preview: "¿Podemos destacar la exhibición de robótica en el boletín de esta semana?",
          time: "Hace 1 h",
        },
      ],
      panelTitle: "Hilo de colaboración",
      panelDescription: "Productores y voluntariado coordinando el Mercado Nocturno de Juana Díaz.",
      thread: {
        author: "MarisolPR",
        timestamp: "Publicado hace 2 h",
        body: "Arrancamos logística del mercado nocturno: necesitamos confirmar necesidades eléctricas, artistas juveniles y rótulos bilingües. Respondan con actualizaciones para someter permisos el viernes.",
        replies: [
          {
            author: "LogisticsLab",
            timestamp: "Hace 1 h",
            body: "Confirmados 18 vendedores — 10 requieren tomas eléctricas y 8 llevan baterías. Compartí el plano en la carpeta de Drive.",
          },
          {
            author: "YouthVoices",
            timestamp: "Hace 35 min",
            body: "El colectivo juvenil de danza está disponible a las 7:30 pm. Subimos el plot de tarima y notas de accesibilidad.",
          },
        ],
      },
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

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
        <div className="surface space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {language === "en" ? "At a glance" : "Resumen"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {content.insights.map((insight) => (
              <div key={insight.title} className="surface-muted">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{insight.stat}</p>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{insight.title}</p>
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="surface space-y-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{content.messages.heading}</h2>
          <p className="muted text-sm">{content.messages.description}</p>
          <div className="space-y-3">
            {content.messages.items.map((item) => (
              <div key={`${item.sender}-${item.time}`} className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg text-primary dark:bg-secondary/15 dark:text-secondary">
                  {item.avatar}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.sender}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.membership}</p>
                  <p className="mt-1 truncate text-sm text-slate-600 dark:text-slate-300">{item.preview}</p>
                </div>
                <span className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
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

      <section className="surface space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{content.messages.panelTitle}</h2>
          <p className="muted text-sm">{content.messages.panelDescription}</p>
        </div>
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-800/70 dark:bg-slate-950/60">
          <div className="space-y-3">
            <div className="rounded-2xl bg-primary/5 p-4 dark:bg-secondary/10">
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-900 dark:text-white">{content.messages.thread.author}</span>
                <span>{content.messages.thread.timestamp}</span>
              </div>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{content.messages.thread.body}</p>
            </div>
            <div className="space-y-3">
              {content.messages.thread.replies.map((reply) => (
                <div key={`${reply.author}-${reply.timestamp}`} className="rounded-2xl border border-slate-200/70 p-4 text-sm text-slate-700 dark:border-slate-800/70 dark:text-slate-300">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">{reply.author}</span>
                    <span>{reply.timestamp}</span>
                  </div>
                  <p className="mt-2">{reply.body}</p>
                </div>
              ))}
            </div>
          </div>
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
