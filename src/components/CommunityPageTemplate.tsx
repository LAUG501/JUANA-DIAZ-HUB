import Link from "next/link";
import Image from "next/image";

export type ContentItem = {
  title: string;
  description: string;
  badge?: string;
  href?: string;
};

export type Metric = {
  value: string;
  label: string;
  description?: string;
};

export type SectionContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items?: ContentItem[];
  bullets?: string[];
  metrics?: Metric[];
  callout?: {
    title: string;
    description: string;
    bullets?: string[];
  };
  cta?: {
    label: string;
    href: string;
  };
  media?: {
    src: string;
    alt: string;
  };
};

export type CommunityPageContent = {
  hero: {
    eyebrow?: string;
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
    stats?: Metric[];
    actions?: {
      label: string;
      href: string;
      variant?: "primary" | "secondary";
    }[];
  };
  sections: SectionContent[];
  spotlight?: {
    title?: string;
    quote: string;
    author: string;
    role?: string;
  };
  resources?: ContentItem[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  footerNote?: string;
};

function ActionButton({ label, href, variant = "primary" }: { label: string; href: string; variant?: "primary" | "secondary" }) {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-100 dark:hover:border-secondary dark:hover:text-secondary"
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
    >
      {label}
    </Link>
  );
}

export default function CommunityPageTemplate({ content }: { content: CommunityPageContent }) {
  const { hero, sections, spotlight, resources, faqs, footerNote } = content;

  return (
    <div className="space-y-12">
      <section className="surface overflow-hidden">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
          <div className="space-y-6">
            {hero.eyebrow ? <p className="eyebrow">{hero.eyebrow}</p> : null}
            <h1 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">{hero.title}</h1>
            <p className="muted text-base md:text-lg">{hero.description}</p>
            {hero.actions ? (
              <div className="flex flex-wrap gap-4">
                {hero.actions.map((action) => (
                  <ActionButton key={action.href} label={action.label} href={action.href} variant={action.variant} />
                ))}
              </div>
            ) : null}
            {hero.stats ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {hero.stats.map((metric) => (
                  <div key={metric.label} className="surface-muted">
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{metric.label}</p>
                    {metric.description ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{metric.description}</p> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {hero.image ? (
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 320px, 100vw"
                priority
              />
            </div>
          ) : null}
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="surface">
          <div className="space-y-6">
            <div className="space-y-3">
              {section.eyebrow ? <p className="eyebrow">{section.eyebrow}</p> : null}
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
              {section.description ? <p className="muted text-base">{section.description}</p> : null}
            </div>

            {section.items ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item) => (
                  <div key={item.title} className="surface-card h-full">
                    <div className="flex h-full flex-col gap-3">
                      {item.badge ? <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-secondary/15 dark:text-secondary">{item.badge}</span> : null}
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="muted flex-1">{item.description}</p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
                        >
                          Explore →
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {section.media ? (
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
                <Image
                  src={section.media.src}
                  alt={section.media.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ) : null}

            {section.bullets ? (
              <ul className="grid gap-2 text-sm text-slate-700 marker:text-primary dark:text-slate-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-secondary" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.metrics ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {section.metrics.map((metric) => (
                  <div key={metric.label} className="surface-muted">
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{metric.label}</p>
                    {metric.description ? <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{metric.description}</p> : null}
                  </div>
                ))}
              </div>
            ) : null}

            {section.callout ? (
              <div className="surface-muted">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{section.callout.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{section.callout.description}</p>
                {section.callout.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {section.callout.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}

            {section.cta ? (
              <div>
                <ActionButton label={section.cta.label} href={section.cta.href} />
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {spotlight ? (
        <section className="surface">
          <div className="space-y-4 text-center">
            {spotlight.title ? <p className="eyebrow">{spotlight.title}</p> : null}
            <blockquote className="text-2xl font-semibold leading-snug text-slate-900 dark:text-white md:text-3xl">
              “{spotlight.quote}”
            </blockquote>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {spotlight.author}
              {spotlight.role ? <span className="text-slate-400 dark:text-slate-500"> · {spotlight.role}</span> : null}
            </p>
          </div>
        </section>
      ) : null}

      {resources ? (
        <section className="surface">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="eyebrow">Resources</p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Keep exploring</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {resources.map((item) => (
                <Link key={item.title} href={item.href ?? "#"} className="surface-card">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="muted">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {faqs ? (
        <section className="surface">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="eyebrow">FAQ</p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Questions from the community</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="surface-muted">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {footerNote ? (
        <div className="surface text-sm text-slate-600 dark:text-slate-300">{footerNote}</div>
      ) : null}
    </div>
  );
}
