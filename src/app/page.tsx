"use client";

import Hero from "../components/Hero";
import Card from "../components/Card";
import LoginSlider from "../components/LoginSlider";
import MapDirections from "../components/MapDirections";
import Link from "next/link";
import { useLanguage } from "../components/providers/language-context";
import { useContentOverrides } from "../hooks/useContentOverrides";
import homeContent from "../data/home-content";

export default function HomePage() {
  const { language } = useLanguage();
  const t = homeContent[language];
  const overrides = useContentOverrides({ page: "home", language });

  const hero = {
    ...t.hero,
    title: overrides["hero.title"] ?? t.hero.title,
    description: overrides["hero.description"] ?? t.hero.description,
    primaryAction: {
      ...t.hero.primaryAction,
      label: overrides["hero.primaryAction"] ?? t.hero.primaryAction.label,
    },
    secondaryAction: {
      ...t.hero.secondaryAction,
      label: overrides["hero.secondaryAction"] ?? t.hero.secondaryAction.label,
    },
    stats: t.hero.stats?.map((stat) => ({ ...stat })),
  };

  const highlights = {
    ...t.highlights,
    title: overrides["highlights.title"] ?? t.highlights.title,
    description: overrides["highlights.description"] ?? t.highlights.description,
  };

  const journeys = {
    ...t.journeys,
    title: overrides["journeys.title"] ?? t.journeys.title,
    description: overrides["journeys.description"] ?? t.journeys.description,
  };

  const deepDive = {
    ...t.deepDive,
    title: overrides["deepDive.title"] ?? t.deepDive.title,
    description: overrides["deepDive.description"] ?? t.deepDive.description,
  };

  const newsletter = {
    ...t.newsletter,
    title: overrides["newsletter.title"] ?? t.newsletter.title,
    description: overrides["newsletter.description"] ?? t.newsletter.description,
  };

  const mapCopy = {
    ...t.map,
    quickLinks: t.map.quickLinks.map((link) => ({ ...link })),
  };

  return (
    <div className="space-y-16">
      <Hero {...hero} />

      <section className="surface">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <p className="eyebrow">{t.highlights.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{highlights.title}</h2>
            <p className="muted mx-auto max-w-2xl">{highlights.description}</p>
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
            <p className="eyebrow">{journeys.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{journeys.title}</h2>
            <p className="muted">{journeys.description}</p>
            <div className="flex flex-wrap gap-3">
            {journeys.ctas.map((cta) => (
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
            {journeys.stats.map((stat) => (
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
            <p className="eyebrow">{deepDive.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">{deepDive.title}</h2>
            <p className="muted mx-auto max-w-2xl">{deepDive.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {deepDive.cards.map((item) => (
              <Card key={item.title} title={item.title} description={item.description} imageUrl={item.imageUrl} href={item.href} ctaLabel={t.cardCta} />
            ))}
          </div>
        </div>
      </section>

      <LoginSlider />

      <MapDirections copy={mapCopy} />

      <section className="surface">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4">
            <p className="eyebrow">{newsletter.eyebrow}</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{newsletter.title}</h3>
            <p className="muted">{newsletter.description}</p>
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
