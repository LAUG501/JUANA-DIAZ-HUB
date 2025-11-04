import { getThreadBySlug } from "../../../../../lib/forum-service";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const thread = await getThreadBySlug(params.slug);
  if (!thread) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }
  return Response.json({ thread });
}
