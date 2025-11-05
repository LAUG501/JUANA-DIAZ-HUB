import "server-only";

import crypto from "crypto";
import {
  readDatabase,
  writeDatabase,
  withTimestamps,
  type DatabaseSchema,
  type ForumPostRecord,
  type ForumThreadRecord,
  type ForumTagRecord,
  type ForumThreadTagRecord,
} from "./database";
import { findUserByEmail, createUser } from "./user-service";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 60);
}

function slugifyTag(label: string) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 40);
}

function getOrCreateTag(db: DatabaseSchema, label: string): ForumTagRecord {
  const slug = slugifyTag(label);
  let record = db.forumTags.find((item) => item.slug === slug);
  if (record) {
    return record;
  }
  record = withTimestamps({ id: crypto.randomUUID(), label, slug });
  db.forumTags.push(record);
  return record;
}

async function seedForum() {
  const db = await readDatabase();
  if (db.forumThreads.length > 0) {
    return;
  }

  const systemUserEmail = "community@juana-diaz-hub.local";
  let systemUser = await findUserByEmail(systemUserEmail);
  if (!systemUser) {
    systemUser = await createUser({
      email: systemUserEmail,
      name: "Community Manager",
      provider: "credentials",
      providerId: `seed:${systemUserEmail}`,
      locale: "en",
    });
  }

  const thread: ForumThreadRecord = withTimestamps({
    id: crypto.randomUUID(),
    title: "Welcome to the Juana Díaz learning circle",
    slug: slugify("Welcome to the Juana Díaz learning circle"),
    authorId: systemUser.id,
    summary:
      "Share what you are building with AI, ask for feedback, and swap resources with neighbors and diaspora mentors.",
  });

  const post: ForumPostRecord = withTimestamps({
    id: crypto.randomUUID(),
    threadId: thread.id,
    authorId: systemUser.id,
    content:
      "This space keeps our community grounded in mutual support. Introduce yourself, mention your project, and tag it so others can discover and collaborate.",
  });

  db.forumThreads.push(thread);
  db.forumPosts.push(post);
  const defaultTags = ["Community", "AI Builders", "Education"];
  for (const label of defaultTags) {
    const tag = getOrCreateTag(db, label);
    db.forumThreadTags.push(withTimestamps({ id: crypto.randomUUID(), threadId: thread.id, tagId: tag.id }));
  }
  await writeDatabase(db);
}

export type ThreadSummary = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  authorName: string;
  replyCount: number;
  likeCount: number;
  createdAt: string;
  tags: Array<{ label: string; slug: string }>;
};

export type ThreadDetail = ThreadSummary & {
  posts: Array<{
    id: string;
    authorName: string;
    content: string;
    createdAt: string;
  }>;
  likedByViewer: boolean;
};

function collectTags(
  threadId: string,
  threadTags: ForumThreadTagRecord[],
  tagsById: Map<string, ForumTagRecord>,
): Array<{ label: string; slug: string }> {
  return threadTags
    .filter((relation) => relation.threadId === threadId)
    .map((relation) => tagsById.get(relation.tagId))
    .filter((tag): tag is ForumTagRecord => Boolean(tag))
    .map((tag) => ({ label: tag.label, slug: tag.slug }));
}

export async function listThreads(tagSlug?: string): Promise<ThreadSummary[]> {
  await seedForum();
  const db = await readDatabase();
  const users = new Map(db.users.map((user) => [user.id, user]));
  const tagsById = new Map(db.forumTags.map((tag) => [tag.id, tag]));
  const relations = db.forumThreadTags;
  return db.forumThreads
    .slice()
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .filter((thread) => {
      if (!tagSlug) return true;
      return relations
        .filter((relation) => relation.threadId === thread.id)
        .some((relation) => tagsById.get(relation.tagId)?.slug === tagSlug);
    })
    .map((thread) => {
      const posts = db.forumPosts.filter((post) => post.threadId === thread.id);
      const likes = db.forumLikes.filter((like) => like.threadId === thread.id);
      const author = users.get(thread.authorId);
      const tags = collectTags(thread.id, relations, tagsById);
      return {
        id: thread.id,
        title: thread.title,
        slug: thread.slug,
        summary: thread.summary,
        authorName: author?.name ?? "Community member",
        replyCount: Math.max(posts.length - 1, 0),
        likeCount: likes.length,
        createdAt: thread.createdAt,
        tags,
      } satisfies ThreadSummary;
    });
}

export async function getThreadBySlug(slug: string, viewerId?: string): Promise<ThreadDetail | null> {
  const db = await readDatabase();
  const thread = db.forumThreads.find((item) => item.slug === slug);
  if (!thread) {
    return null;
  }
  const users = new Map(db.users.map((user) => [user.id, user]));
  const tagsById = new Map(db.forumTags.map((tag) => [tag.id, tag]));
  const relations = db.forumThreadTags;
  const posts = db.forumPosts
    .filter((post) => post.threadId === thread.id)
    .sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    .map((post) => ({
      id: post.id,
      authorName: users.get(post.authorId)?.name ?? "Community member",
      content: post.content,
      createdAt: post.createdAt,
    }));
  const likes = db.forumLikes.filter((like) => like.threadId === thread.id);
  const author = users.get(thread.authorId);
  const tags = collectTags(thread.id, relations, tagsById);
  return {
    id: thread.id,
    title: thread.title,
    slug: thread.slug,
    summary: thread.summary,
    authorName: author?.name ?? "Community member",
    replyCount: Math.max(posts.length - 1, 0),
    likeCount: likes.length,
    createdAt: thread.createdAt,
    posts,
    likedByViewer: viewerId ? likes.some((like) => like.userId === viewerId) : false,
    tags,
  } satisfies ThreadDetail;
}

export async function createThread({
  title,
  summary,
  content,
  authorId,
  tags = [],
}: {
  title: string;
  summary: string;
  content: string;
  authorId: string;
  tags?: string[];
}) {
  const db = await readDatabase();
  const thread: ForumThreadRecord = withTimestamps({
    id: crypto.randomUUID(),
    title,
    summary,
    slug: slugify(title),
    authorId,
  });
  const post: ForumPostRecord = withTimestamps({
    id: crypto.randomUUID(),
    threadId: thread.id,
    authorId,
    content,
  });
  db.forumThreads.push(thread);
  db.forumPosts.push(post);
  for (const label of tags) {
    const normalized = label.trim();
    if (!normalized) continue;
    const tag = getOrCreateTag(db, normalized);
    const exists = db.forumThreadTags.some(
      (relation) => relation.threadId === thread.id && relation.tagId === tag.id,
    );
    if (!exists) {
      db.forumThreadTags.push(withTimestamps({ id: crypto.randomUUID(), threadId: thread.id, tagId: tag.id }));
    }
  }
  await writeDatabase(db);
  return thread;
}

export async function createReply({
  threadId,
  content,
  authorId,
}: {
  threadId: string;
  content: string;
  authorId: string;
}) {
  const db = await readDatabase();
  const reply: ForumPostRecord = withTimestamps({
    id: crypto.randomUUID(),
    threadId,
    authorId,
    content,
  });
  db.forumPosts.push(reply);
  const thread = db.forumThreads.find((item) => item.id === threadId);
  if (thread) {
    thread.updatedAt = new Date().toISOString();
  }
  await writeDatabase(db);
  return reply;
}

export async function toggleThreadLike({
  threadId,
  userId,
}: {
  threadId: string;
  userId: string;
}): Promise<{ liked: boolean; count: number }> {
  const db = await readDatabase();
  const existing = db.forumLikes.find((like) => like.threadId === threadId && like.userId === userId);
  let liked = false;
  if (existing) {
    db.forumLikes = db.forumLikes.filter((like) => like.id !== existing.id);
    liked = false;
  } else {
    db.forumLikes.push(
      withTimestamps({
        id: crypto.randomUUID(),
        threadId,
        userId,
      }),
    );
    liked = true;
  }
  await writeDatabase(db);
  const count = db.forumLikes.filter((like) => like.threadId === threadId).length;
  return { liked, count };
}

export async function listForumTags(): Promise<Array<{ id: string; label: string; slug: string; threadCount: number }>> {
  await seedForum();
  const db = await readDatabase();
  return db.forumTags
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((tag) => ({
      id: tag.id,
      label: tag.label,
      slug: tag.slug,
      threadCount: db.forumThreadTags.filter((relation) => relation.tagId === tag.id).length,
    }));
}

export async function archiveThread(threadId: string) {
  const db = await readDatabase();
  db.forumThreads = db.forumThreads.filter((thread) => thread.id !== threadId);
  db.forumPosts = db.forumPosts.filter((post) => post.threadId !== threadId);
  db.forumLikes = db.forumLikes.filter((like) => like.threadId !== threadId);
  db.forumThreadTags = db.forumThreadTags.filter((relation) => relation.threadId !== threadId);
  await writeDatabase(db);
}
