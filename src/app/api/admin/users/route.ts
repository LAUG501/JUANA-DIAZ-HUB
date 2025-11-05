import { getSession } from "../../../../lib/auth";
import { listUsers, updateUserRole } from "../../../../lib/user-service";

function unauthorized() {
  return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
}

export async function GET() {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return unauthorized();
  }
  const users = await listUsers();
  return Response.json({ users });
}

export async function PATCH(request: Request) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return unauthorized();
  }
  const payload = (await request.json().catch(() => null)) as { userId?: string; role?: string } | null;
  if (!payload?.userId || !payload.role) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }
  if (!["user", "moderator", "admin"].includes(payload.role)) {
    return new Response(JSON.stringify({ error: "Invalid role" }), { status: 400 });
  }
  if (session.id === payload.userId && payload.role !== "admin") {
    return new Response(JSON.stringify({ error: "Cannot demote self" }), { status: 400 });
  }
  await updateUserRole(payload.userId, payload.role as "user" | "moderator" | "admin");
  return Response.json({ ok: true });
}
