import { archiveThread } from "@/lib/forum-service";
import { getSession } from "@/lib/auth";

function unauthorized() {
  return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return unauthorized();
  }
  await archiveThread(params.id);
  return Response.json({ ok: true });
}
