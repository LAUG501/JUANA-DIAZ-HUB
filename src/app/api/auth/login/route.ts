import { NextRequest } from "next/server";
import { createSession, hashPassword, verifyPassword } from "../../../../lib/auth";
import { ensureAdminAccount, findUserByEmail, updateUser, createUser } from "../../../../lib/user-service";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as { email?: string; password?: string; name?: string } | null;
  if (!body?.email || !body?.password) {
    return new Response(JSON.stringify({ error: "Missing credentials" }), { status: 400 });
  }

  await ensureAdminAccount();

  const email = body.email.toLowerCase();
  const user = await findUserByEmail(email);

  if (!user) {
    if (process.env.ALLOW_SELF_SERVICE_SIGNUP === "true") {
      const hashed = hashPassword(body.password);
      const created = await createUser({
        email,
        name: body.name ?? email.split("@")[0],
        passwordHash: hashed,
        provider: "credentials",
        providerId: `credentials:${email}`,
        locale: "en",
      });
      await createSession(created.id);
      return Response.json({ ok: true, user: { id: created.id, name: created.name, role: created.role } });
    }
    return new Response(JSON.stringify({ error: "Account not found" }), { status: 404 });
  }

  if (!verifyPassword(body.password, user.passwordHash)) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), { status: 403 });
  }

  if (body.name && body.name !== user.name) {
    await updateUser(user.id, { name: body.name });
  }

  await createSession(user.id);
  return Response.json({ ok: true, user: { id: user.id, name: user.name, role: user.role } });
}
