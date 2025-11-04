import { toggleThreadLike, getThreadBySlug } from "../../../../../../lib/forum-service";
import { getSession } from "../../../../../../lib/auth";

export async function POST(_: Request, { params }: { params: { slug: string } }) {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
  try {
    const thread = await getThreadBySlug(params.slug, session.id);
    if (!thread) {
      return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
    }
    const result = await toggleThreadLike({ threadId: thread.id, userId: session.id });
    return Response.json({ ok: true, liked: result.liked, count: result.count });
  } catch (error) {
    console.error("Failed to toggle like", error);
    return new Response(JSON.stringify({ error: "Unable to update like" }), { status: 500 });
  }
}
