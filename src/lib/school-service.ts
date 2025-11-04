import "server-only";

import crypto from "crypto";
import {
  readDatabase,
  writeDatabase,
  withTimestamps,
  type CourseRecord,
  type LessonRecord,
  type LessonStepRecord,
  type LessonProgressRecord,
} from "./database";

async function seedCourses() {
  const db = await readDatabase();
  if (db.courses.length > 0) {
    return;
  }

  const course: CourseRecord = withTimestamps({
    id: crypto.randomUUID(),
    slug: "ai-studio",
    title: "Launch your first AI-powered service",
    summary: "A four-lesson sprint to design, prototype, and share an AI concierge for Juana Díaz residents.",
  });
  db.courses.push(course);

  const lessons: LessonRecord[] = [
    withTimestamps({
      id: crypto.randomUUID(),
      courseId: course.id,
      order: 1,
      title: "Map the user journey",
      description: "Interview neighbors, capture friction points, and outline value statements.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      courseId: course.id,
      order: 2,
      title: "Prototype conversations",
      description: "Draft bilingual prompt flows that feel natural and culturally rooted.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      courseId: course.id,
      order: 3,
      title: "Connect APIs",
      description: "Wire the assistant to public data sources and configure guardrails.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      courseId: course.id,
      order: 4,
      title: "Publish & measure",
      description: "Launch your concierge, gather feedback, and track impact metrics.",
    }),
  ];
  db.lessons.push(...lessons);

  const steps: LessonStepRecord[] = [
    withTimestamps({
      id: crypto.randomUUID(),
      lessonId: lessons[0].id,
      order: 1,
      prompt: "Schedule 3 interviews with different community segments (youth, elders, entrepreneurs).",
      guidance: "Capture quotes in English and Spanish to understand tone and preferred channels.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      lessonId: lessons[0].id,
      order: 2,
      prompt: "Translate interview insights into a journey map with stages, needs, and support gaps.",
      guidance: "Highlight where AI can provide immediate relief or introductions to humans.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      lessonId: lessons[1].id,
      order: 1,
      prompt: "Draft bilingual scripts for the assistant greeting and fallback responses.",
      guidance: "Use community vocabulary, include respect for cultural rituals, and confirm pronouns.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      lessonId: lessons[2].id,
      order: 1,
      prompt: "Connect to the municipal events feed and weather alerts with clear attribution.",
      guidance: "Document API rate limits and set up caching or graceful degradation plans.",
    }),
    withTimestamps({
      id: crypto.randomUUID(),
      lessonId: lessons[3].id,
      order: 1,
      prompt: "Publish a launch update on the forum and gather 5 pilot testers.",
      guidance: "Share a short video walk-through and survey link for structured feedback.",
    }),
  ];
  db.lessonSteps.push(...steps);
  await writeDatabase(db);
}

export type CourseSummary = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  lessonCount: number;
  completedLessons?: number;
};

export type CourseDetail = CourseSummary & {
  lessons: Array<{
    id: string;
    title: string;
    description: string;
    steps: Array<{
      id: string;
      prompt: string;
      guidance: string;
      completed: boolean;
    }>;
  }>;
};

export async function listCourses(userId?: string): Promise<CourseSummary[]> {
  await seedCourses();
  const db = await readDatabase();
  const completed = new Set(
    db.lessonProgress.filter((record) => record.userId === userId && record.status === "completed").map((record) => record.lessonId),
  );
  return db.courses.map((course) => {
    const courseLessons = db.lessons.filter((lesson) => lesson.courseId === course.id);
    const completedLessons = courseLessons.filter((lesson) => completed.has(lesson.id)).length;
    return {
      id: course.id,
      slug: course.slug,
      title: course.title,
      summary: course.summary,
      lessonCount: courseLessons.length,
      completedLessons,
    } as CourseSummary & { completedLessons: number };
  });
}

export async function getCourseBySlug(slug: string, userId?: string): Promise<CourseDetail | null> {
  await seedCourses();
  const db = await readDatabase();
  const course = db.courses.find((item) => item.slug === slug);
  if (!course) {
    return null;
  }
  const completedSteps = new Set(
    db.lessonProgress
      .filter((record) => record.userId === userId && record.status === "completed" && record.stepId)
      .map((record) => record.stepId as string),
  );
  const lessons = db.lessons
    .filter((lesson) => lesson.courseId === course.id)
    .sort((a, b) => a.order - b.order)
    .map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      description: lesson.description,
      steps: db.lessonSteps
        .filter((step) => step.lessonId === lesson.id)
        .sort((a, b) => a.order - b.order)
        .map((step) => ({
          id: step.id,
          prompt: step.prompt,
          guidance: step.guidance,
          completed: completedSteps.has(step.id),
        })),
    }));
  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    summary: course.summary,
    lessonCount: lessons.length,
    lessons,
  };
}

export async function markStepComplete({
  userId,
  stepId,
}: {
  userId: string;
  stepId: string;
}) {
  const db = await readDatabase();
  let record = db.lessonProgress.find((entry) => entry.userId === userId && entry.stepId === stepId);
  if (!record) {
    record = withTimestamps({
      id: crypto.randomUUID(),
      userId,
      lessonId: db.lessonSteps.find((step) => step.id === stepId)?.lessonId ?? "",
      stepId,
      status: "completed" as LessonProgressRecord["status"],
    });
    db.lessonProgress.push(record);
  } else {
    record.status = "completed";
    record.updatedAt = new Date().toISOString();
  }
  await writeDatabase(db);
}
