"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/language-context";

const content = {
  en: {
    hero: {
      eyebrow: "Personalize",
      title: "Global preferences",
      description: "Fine-tune language, themes, and notifications for every space in Juana Díaz Hub.",
    },
    sections: {
      appearance: {
        title: "Appearance",
        description: "Choose how the interface adapts across desktop and mobile.",
        themeLabel: "Color theme",
        densityLabel: "Interface density",
        options: {
          light: "Light",
          dark: "Dark",
          system: "System",
          cozy: "Cozy",
          compact: "Compact",
        },
      },
      notifications: {
        title: "Notifications",
        description: "Decide what lands in your inbox and on your phone.",
        email: "Email summaries",
        sms: "SMS alerts",
        digest: "Weekly digest",
      },
      language: {
        title: "Language",
        description: "Set your preferred language order for menus and community content.",
        primary: "Primary language",
        secondary: "Secondary language",
      },
    },
    save: "Save changes",
    saved: "Preferences updated",
  },
  es: {
    hero: {
      eyebrow: "Personaliza",
      title: "Preferencias globales",
      description: "Ajusta idioma, temas y notificaciones para cada espacio de Juana Díaz Hub.",
    },
    sections: {
      appearance: {
        title: "Apariencia",
        description: "Elige cómo se adapta la interfaz en computadora y móvil.",
        themeLabel: "Tema de color",
        densityLabel: "Densidad de la interfaz",
        options: {
          light: "Claro",
          dark: "Oscuro",
          system: "Sistema",
          cozy: "Cómodo",
          compact: "Compacto",
        },
      },
      notifications: {
        title: "Notificaciones",
        description: "Decide qué llega a tu correo y a tu móvil.",
        email: "Resúmenes por correo",
        sms: "Alertas SMS",
        digest: "Boletín semanal",
      },
      language: {
        title: "Idioma",
        description: "Define el orden preferido para menús y contenido comunitario.",
        primary: "Idioma principal",
        secondary: "Idioma secundario",
      },
    },
    save: "Guardar cambios",
    saved: "Preferencias actualizadas",
  },
};

export default function SettingsPage() {
  const { language, setLanguage } = useLanguage();
  const copy = content[language];
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [density, setDensity] = useState("cozy");
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);
  const [digest, setDigest] = useState(true);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <article className="space-y-12">
      <section className="surface">
        <p className="eyebrow">{copy.hero.eyebrow}</p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{copy.hero.title}</h1>
        <p className="muted mt-3 max-w-2xl text-base md:text-lg">{copy.hero.description}</p>
      </section>

      <section className="surface space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.sections.appearance.title}</h2>
          <p className="muted text-sm">{copy.sections.appearance.description}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="surface-card flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{copy.sections.appearance.themeLabel}</span>
              <select
                value={theme}
                onChange={(event) => setTheme(event.target.value as typeof theme)}
                className="rounded-xl border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100"
              >
                <option value="light">{copy.sections.appearance.options.light}</option>
                <option value="dark">{copy.sections.appearance.options.dark}</option>
                <option value="system">{copy.sections.appearance.options.system}</option>
              </select>
            </label>
            <label className="surface-card flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{copy.sections.appearance.densityLabel}</span>
              <select
                value={density}
                onChange={(event) => setDensity(event.target.value)}
                className="rounded-xl border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100"
              >
                <option value="cozy">{copy.sections.appearance.options.cozy}</option>
                <option value="compact">{copy.sections.appearance.options.compact}</option>
              </select>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.sections.notifications.title}</h2>
          <p className="muted text-sm">{copy.sections.notifications.description}</p>
          <div className="grid gap-3 md:grid-cols-3">
            <label className="surface-card flex items-center gap-2">
              <input
                type="checkbox"
                checked={email}
                onChange={(event) => setEmail(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{copy.sections.notifications.email}</span>
            </label>
            <label className="surface-card flex items-center gap-2">
              <input
                type="checkbox"
                checked={sms}
                onChange={(event) => setSms(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{copy.sections.notifications.sms}</span>
            </label>
            <label className="surface-card flex items-center gap-2">
              <input
                type="checkbox"
                checked={digest}
                onChange={(event) => setDigest(event.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{copy.sections.notifications.digest}</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{copy.sections.language.title}</h2>
          <p className="muted text-sm">{copy.sections.language.description}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="surface-card flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{copy.sections.language.primary}</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value as typeof language)}
                className="rounded-xl border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </label>
            <label className="surface-card flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{copy.sections.language.secondary}</span>
              <select
                defaultValue={language === "en" ? "es" : "en"}
                className="rounded-xl border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSave}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
          >
            {copy.save}
          </button>
          {saved ? (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary dark:bg-secondary/15 dark:text-secondary">
              {copy.saved}
            </span>
          ) : null}
        </div>
      </section>
    </article>
  );
}
