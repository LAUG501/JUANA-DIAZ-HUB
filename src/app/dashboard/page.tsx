import { redirect } from "next/navigation";
import ContentEditor from "../../components/admin/ContentEditor";
import ForumModerationPanel from "../../components/admin/ForumModerationPanel";
import MemberManager from "../../components/admin/MemberManager";
import { getSession } from "../../lib/auth";
import { listPageContent } from "../../lib/content-service";
import homeContent from "../../data/home-content";
import { communityPages } from "../../data/community-pages";

const copy = {
  en: {
    hero: {
      eyebrow: "Administrator",
      title: "Welcome back, {name}!",
      description:
        "Manage the bilingual storytelling, monitor community metrics, and coordinate programming for residents and partners.",
      metrics: [
        { value: "12", label: "Pending forum replies" },
        { value: "7", label: "Content blocks updated this week" },
        { value: "24", label: "Students in active lessons" },
      ],
    },
    contentBlocks: {
      title: "Content blocks",
      description:
        "Update homepage, explore guide, and history introductions without touching code. Changes publish instantly for both languages.",
    },
    checklist: {
      title: "Priority checklist",
      description: "Track the weekly duties that keep the hub thriving.",
      items: [
        {
          title: "Publish new course lessons",
          description: "Add interactive steps for the AI School before Friday’s cohort session.",
        },
        {
          title: "Approve forum tags",
          description: "Validate new tags proposed by community moderators and archive duplicates.",
        },
        {
          title: "Refresh AI key RSS feed",
          description: "Verify providers with expiring tokens so builders stay connected.",
        },
      ],
    },
  },
  es: {
    hero: {
      eyebrow: "Administración",
      title: "¡Bienvenida de nuevo, {name}!",
      description:
        "Gestiona el contenido bilingüe, monitorea métricas comunitarias y coordina la programación con residentes y aliadas.",
      metrics: [
        { value: "12", label: "Respuestas pendientes en el foro" },
        { value: "7", label: "Bloques de contenido actualizados esta semana" },
        { value: "24", label: "Estudiantes en lecciones activas" },
      ],
    },
    contentBlocks: {
      title: "Bloques de contenido",
      description:
        "Actualiza portada, guía de exploración e introducción histórica sin tocar código. Los cambios se publican al instante en ambos idiomas.",
    },
    checklist: {
      title: "Lista prioritaria",
      description: "Sigue las tareas semanales que mantienen vivo el hub.",
      items: [
        {
          title: "Publicar nuevas lecciones",
          description: "Añade pasos interactivos para la Escuela IA antes de la cohorte del viernes.",
        },
        {
          title: "Aprobar etiquetas del foro",
          description: "Valida etiquetas propuestas por moderadores y archiva duplicados.",
        },
        {
          title: "Actualizar RSS de llaves IA",
          description: "Verifica proveedores con llaves por expirar para que las creadoras sigan conectadas.",
        },
      ],
    },
  },
} as const;

const fallbackMap = {
  home: {
    en: {
      "hero.title": homeContent.en.hero.title,
      "hero.description": homeContent.en.hero.description,
      "hero.primaryAction": homeContent.en.hero.primaryAction.label,
      "hero.secondaryAction": homeContent.en.hero.secondaryAction.label,
      "highlights.title": homeContent.en.highlights.title,
      "highlights.description": homeContent.en.highlights.description,
      "journeys.title": homeContent.en.journeys.title,
      "journeys.description": homeContent.en.journeys.description,
      "deepDive.title": homeContent.en.deepDive.title,
      "deepDive.description": homeContent.en.deepDive.description,
      "newsletter.title": homeContent.en.newsletter.title,
      "newsletter.description": homeContent.en.newsletter.description,
    },
    es: {
      "hero.title": homeContent.es.hero.title,
      "hero.description": homeContent.es.hero.description,
      "hero.primaryAction": homeContent.es.hero.primaryAction.label,
      "hero.secondaryAction": homeContent.es.hero.secondaryAction.label,
      "highlights.title": homeContent.es.highlights.title,
      "highlights.description": homeContent.es.highlights.description,
      "journeys.title": homeContent.es.journeys.title,
      "journeys.description": homeContent.es.journeys.description,
      "deepDive.title": homeContent.es.deepDive.title,
      "deepDive.description": homeContent.es.deepDive.description,
      "newsletter.title": homeContent.es.newsletter.title,
      "newsletter.description": homeContent.es.newsletter.description,
    },
  },
  explore: {
    en: {
      "hero.title": communityPages.explore.hero.title,
      "hero.description": communityPages.explore.hero.description,
      "sections[0].title": communityPages.explore.sections?.[0]?.title ?? "Curated paths",
      "sections[0].description": communityPages.explore.sections?.[0]?.description ?? "Follow themed itineraries",
    },
    es: {
      "hero.title": communityPages.explore.hero.title,
      "hero.description": communityPages.explore.hero.description,
      "sections[0].title": communityPages.explore.sections?.[0]?.title ?? "Curated paths",
      "sections[0].description": communityPages.explore.sections?.[0]?.description ?? "Follow themed itineraries",
    },
  },
  history: {
    en: {
      "intro.heading": "The Historical Evolution of Juana Díaz, Puerto Rico",
      "intro.summary":
        "From pre-colonial Yaguana to a regional hub balancing modernization and heritage, Juana Díaz offers a window into Puerto Rico’s resilience and reinvention.",
    },
    es: {
      "intro.heading": "La evolución histórica de Juana Díaz, Puerto Rico",
      "intro.summary":
        "Desde la Yaguana precolonial hasta un centro regional que equilibra modernidad y patrimonio, Juana Díaz refleja la resiliencia de Puerto Rico.",
    },
  },
} as const;

type FallbackMap = typeof fallbackMap;

type PageKey = keyof FallbackMap;
type LanguageKey = keyof FallbackMap[PageKey];

type ContentRecord = Awaited<ReturnType<typeof listPageContent>>[number];

function resolveValue(
  records: ContentRecord[],
  page: PageKey,
  key: string,
  language: LanguageKey,
): string {
  const record = records.find((item) => item.key === key && item.language === language);
  if (record) {
    return record.content;
  }
  const pageFallback = fallbackMap[page];
  const languageFallback = pageFallback[language] as Record<string, string> | undefined;
  return languageFallback?.[key] ?? "";
}

const contentEditors: Array<{
  page: PageKey;
  key: string;
  language: LanguageKey;
  label: string;
}> = [
  { page: "home", key: "hero.title", language: "en", label: "Home hero title (English)" },
  { page: "home", key: "hero.description", language: "en", label: "Home hero description (English)" },
  { page: "home", key: "hero.title", language: "es", label: "Título del héroe (Español)" },
  { page: "home", key: "hero.description", language: "es", label: "Descripción del héroe (Español)" },
  { page: "home", key: "newsletter.title", language: "en", label: "Newsletter title" },
  { page: "home", key: "newsletter.title", language: "es", label: "Título del boletín" },
  { page: "explore", key: "hero.title", language: "en", label: "Explore hero title" },
  { page: "explore", key: "hero.title", language: "es", label: "Explorar - título" },
  { page: "explore", key: "sections[0].description", language: "en", label: "Explore intro blurb" },
  { page: "explore", key: "sections[0].description", language: "es", label: "Explorar - descripción" },
  { page: "history", key: "intro.heading", language: "en", label: "History heading" },
  { page: "history", key: "intro.summary", language: "en", label: "History summary" },
];

export default async function DashboardPage() {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    redirect("/login?reason=auth");
  }

  const language = (session.locale ?? "en") as "en" | "es";
  const t = copy[language];

  const [homeContentOverrides, exploreContentOverrides, historyOverrides] = await Promise.all([
    listPageContent("home"),
    listPageContent("explore"),
    listPageContent("history"),
  ]);

  const recordsByPage: Record<PageKey, ContentRecord[]> = {
    home: homeContentOverrides,
    explore: exploreContentOverrides,
    history: historyOverrides,
  };

  return (
    <div className="space-y-10">
      <section className="surface">
        <div className="space-y-6">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <div className="space-y-3">
            <h1 className="text-3xl font-heading text-slate-900 dark:text-white">
              {t.hero.title.replace("{name}", session.name)}
            </h1>
            <p className="muted text-base">{t.hero.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {t.hero.metrics.map((metric) => (
              <div key={metric.label} className="surface-muted">
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.contentBlocks.title}</h2>
            <p className="muted">{t.contentBlocks.description}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {contentEditors.map(({ page, key, language, label }) => (
              <ContentEditor
                key={`${page}-${key}-${language}`}
                page={page}
                contentKey={key}
                label={label}
                language={language}
                initialContent={resolveValue(recordsByPage[page], page, key, language)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.checklist.title}</h2>
            <p className="muted">{t.checklist.description}</p>
          </div>
          <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            {t.checklist.items.map((item) => (
              <li key={item.title} className="surface-card">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Quick links</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[{ label: "Forum moderation", description: "Manage threads, replies, and likes.", href: "/forum" }, { label: "AI lab usage", description: "Review API tests and quotas.", href: "/ai-lab" }, { label: "Learning cohorts", description: "Monitor School progress and assignments.", href: "/school" }, { label: "Analytics dashboard", description: "Check engagement and waitlist growth.", href: "/analytics" }, { label: "Waiting list", description: "Engage prospective members and send updates.", href: "/waiting-list" }, { label: "Global settings", description: "Adjust theme, language defaults, and alerts.", href: "/settings" }].map((link) => (
              <a key={link.label} href={link.href} className="surface-card block h-full">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{link.label}</p>
                  <p className="muted text-sm">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <MemberManager />
      <ForumModerationPanel />
    </div>
  );
}
