"use client";

import Link from "next/link";

import { useLanguage } from "../providers/language-context";
import type { CourseSummary } from "@/lib/school-service";

const copy = {
  en: {
    eyebrow: "School",
    title: "Learn to build with conversational AI",
    description:
      "Follow step-by-step journeys designed by Juana Díaz mentors to turn community needs into bilingual AI services.",
    sprintsTitle: "Available sprints",
    viewCurriculum: "View curriculum →",
    lessons: {
      single: "{count} lesson",
      plural: "{count} lessons",
      completed: "{completed}/{total} lessons complete",
    },
  },
  es: {
    eyebrow: "Escuela",
    title: "Aprende a crear con IA conversacional",
    description:
      "Sigue recorridos paso a paso diseñados por mentoras de Juana Díaz para convertir necesidades comunitarias en servicios IA bilingües.",
    sprintsTitle: "Sprints disponibles",
    viewCurriculum: "Ver currículo →",
    lessons: {
      single: "{count} lección",
      plural: "{count} lecciones",
      completed: "{completed}/{total} lecciones completadas",
    },
  },
} as const;

type Props = {
  courses: CourseSummary[];
};

function formatLessonLabel(language: "en" | "es", lessonCount: number, completed?: number) {
  const t = copy[language].lessons;
  if (typeof completed === "number" && completed > 0) {
    return t.completed
      .replace("{completed}", String(completed))
      .replace("{total}", String(lessonCount));
  }
  const key = lessonCount === 1 ? "single" : "plural";
  return t[key as "single" | "plural"].replace("{count}", String(lessonCount));
}

export default function SchoolOverview({ courses }: Props) {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="space-y-12">
      <section className="surface space-y-5">
        <p className="eyebrow">{t.eyebrow}</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">{t.title}</h1>
          <p className="muted text-lg">{t.description}</p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{t.sprintsTitle}</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <article key={course.id} className="surface-card">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-secondary">
                  {formatLessonLabel(language, course.lessonCount, course.completedLessons)}
                </p>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{course.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{course.summary}</p>
                <Link
                  href={`/school/${course.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80"
                >
                  {t.viewCurriculum}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
