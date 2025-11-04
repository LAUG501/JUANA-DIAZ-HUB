import "server-only";

import { promises as fs } from "fs";
import path from "path";

const DATABASE_PATH = path.join(process.cwd(), "data", "database.json");

type BaseRecord = {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type UserRole = "user" | "admin" | "moderator";

export type UserRecord = BaseRecord & {
  email: string;
  name: string;
  image?: string;
  role: UserRole;
  locale: "en" | "es";
  passwordHash?: string;
  provider: "google" | "facebook" | "tiktok" | "credentials";
  providerId: string;
};

export type SessionRecord = BaseRecord & {
  userId: string;
  token: string;
  expiresAt: string;
};

export type OAuthStateRecord = BaseRecord & {
  provider: string;
  state: string;
  nonce: string;
  returnTo?: string;
};

export type ContentBlockRecord = BaseRecord & {
  page: string;
  key: string;
  language: "en" | "es";
  content: string;
  updatedBy?: string;
};

export type ForumThreadRecord = BaseRecord & {
  title: string;
  slug: string;
  authorId: string;
  summary: string;
};

export type ForumPostRecord = BaseRecord & {
  threadId: string;
  authorId: string;
  content: string;
  parentPostId?: string;
};

export type ForumLikeRecord = BaseRecord & {
  userId: string;
  threadId?: string;
  postId?: string;
};

export type ForumTagRecord = BaseRecord & {
  label: string;
  slug: string;
};

export type ForumThreadTagRecord = BaseRecord & {
  threadId: string;
  tagId: string;
};

export type MessageRecord = BaseRecord & {
  senderId: string;
  recipientId: string;
  subject: string;
  body: string;
  readAt?: string;
};

export type CourseRecord = BaseRecord & {
  slug: string;
  title: string;
  summary: string;
};

export type LessonRecord = BaseRecord & {
  courseId: string;
  order: number;
  title: string;
  description: string;
};

export type LessonStepRecord = BaseRecord & {
  lessonId: string;
  order: number;
  prompt: string;
  guidance: string;
};

export type LessonProgressRecord = BaseRecord & {
  userId: string;
  lessonId: string;
  stepId?: string;
  status: "started" | "completed";
};

export type AiProviderRecord = BaseRecord & {
  provider: string;
  label: string;
  rssSlug: string;
  apiKeyCipher: string;
  keyPreview: string;
  docsUrl?: string;
  quotaResetDay?: number;
};

export type ApiUsageRecord = BaseRecord & {
  providerId: string;
  userId: string;
  tokensUsed: number;
  status: "ok" | "limit" | "error";
  notes?: string;
};

export type NotificationRecord = BaseRecord & {
  userId: string;
  title: string;
  description: string;
  href?: string;
  status: "new" | "seen";
};

export type DatabaseSchema = {
  users: UserRecord[];
  sessions: SessionRecord[];
  oauthStates: OAuthStateRecord[];
  contentBlocks: ContentBlockRecord[];
  forumThreads: ForumThreadRecord[];
  forumPosts: ForumPostRecord[];
  forumLikes: ForumLikeRecord[];
  forumTags: ForumTagRecord[];
  forumThreadTags: ForumThreadTagRecord[];
  messages: MessageRecord[];
  courses: CourseRecord[];
  lessons: LessonRecord[];
  lessonSteps: LessonStepRecord[];
  lessonProgress: LessonProgressRecord[];
  aiProviders: AiProviderRecord[];
  apiUsage: ApiUsageRecord[];
  notifications: NotificationRecord[];
};

async function ensureDatabaseFile() {
  try {
    await fs.access(DATABASE_PATH);
  } catch {
    const empty: DatabaseSchema = {
      users: [],
      sessions: [],
      oauthStates: [],
      contentBlocks: [],
      forumThreads: [],
      forumPosts: [],
      forumLikes: [],
      forumTags: [],
      forumThreadTags: [],
      messages: [],
      courses: [],
      lessons: [],
      lessonSteps: [],
      lessonProgress: [],
      aiProviders: [],
      apiUsage: [],
      notifications: [],
    };
    await fs.mkdir(path.dirname(DATABASE_PATH), { recursive: true });
    await fs.writeFile(DATABASE_PATH, JSON.stringify(empty, null, 2), "utf8");
  }
}

export async function readDatabase(): Promise<DatabaseSchema> {
  await ensureDatabaseFile();
  const raw = await fs.readFile(DATABASE_PATH, "utf8");
  return JSON.parse(raw) as DatabaseSchema;
}

export async function writeDatabase(db: DatabaseSchema) {
  await fs.writeFile(DATABASE_PATH, JSON.stringify(db, null, 2), "utf8");
}

export function timestamp(): string {
  return new Date().toISOString();
}

export function withTimestamps<T extends object>(record: T): T & { createdAt: string; updatedAt: string } {
  const now = timestamp();
  return Object.assign(record, { createdAt: now, updatedAt: now });
}

export function touch<T extends { updatedAt: string }>(record: T): T {
  record.updatedAt = timestamp();
  return record;
}
