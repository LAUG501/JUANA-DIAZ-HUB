import { getSession } from "../../../../../../lib/auth";
import { createReply, getThreadBySlug } from "../../../../../../lib/forum-service";

export async function POST(request: Request, { params }: { params: { slug: string } }) {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
  const payload = (await request.json().catch(() => null)) as { content?: string } | null;
  if (!payload?.content) {
    return new Response(JSON.stringify({ error: "Missing content" }), { status: 400 });
  }
  const thread = await getThreadBySlug(params.slug, session.id);
  if (!thread) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }
  const reply = await createReply({ threadId: thread.id, content: payload.content, authorId: session.id });
  return Response.json({ reply });
}
