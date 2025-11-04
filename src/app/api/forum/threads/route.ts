import { createThread, listThreads } from "../../../../lib/forum-service";
import { getSession } from "../../../../lib/auth";

export async function GET() {
  const threads = await listThreads();
  return Response.json({ threads });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
  const payload = (await request.json().catch(() => null)) as { title?: string; summary?: string; content?: string } | null;
  if (!payload?.title || !payload?.summary || !payload?.content) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }
  const thread = await createThread({
    title: payload.title,
    summary: payload.summary,
    content: payload.content,
    authorId: session.id,
  });
  return Response.json({ thread });
}
