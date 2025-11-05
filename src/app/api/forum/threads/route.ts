import { createThread, listForumTags, listThreads } from "../../../../lib/forum-service";
import { getSession } from "../../../../lib/auth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tag = url.searchParams.get("tag") ?? undefined;
  const [threads, tags] = await Promise.all([listThreads(tag), listForumTags()]);
  return Response.json({ threads, tags });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
  const payload = (await request.json().catch(() => null)) as {
    title?: string;
    summary?: string;
    content?: string;
    tags?: string[];
  } | null;
  if (!payload?.title || !payload?.summary || !payload?.content) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }
  const thread = await createThread({
    title: payload.title,
    summary: payload.summary,
    content: payload.content,
    authorId: session.id,
    tags: Array.isArray(payload.tags) ? payload.tags.slice(0, 5) : [],
  });
  return Response.json({ thread });
}
