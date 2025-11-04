"use client";

import { useLanguage } from "../providers/language-context";
import StepChecklist from "./StepChecklist";
import type { CourseDetail } from "@/lib/school-service";

const copy = {
  en: {
    eyebrow: "Course",
    summaryLabel: "Overview",
  },
  es: {
    eyebrow: "Curso",
    summaryLabel: "Resumen",
  },
} as const;

type Props = {
  course: CourseDetail;
};

export default function CourseDetailView({ course }: Props) {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <article className="space-y-12">
      <header className="surface space-y-4">
        <p className="eyebrow">{t.eyebrow}</p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">{course.title}</h1>
          <p className="muted text-lg">{course.summary}</p>
        </div>
      </header>

      <section className="space-y-6">
        {course.lessons.map((lesson) => (
          <div key={lesson.id} className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{lesson.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{lesson.description}</p>
            </div>
            <StepChecklist steps={lesson.steps} />
          </div>
        ))}
      </section>
    </article>
  );
}
