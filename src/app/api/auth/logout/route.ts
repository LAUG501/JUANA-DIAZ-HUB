import { destroySession } from "../../../../lib/auth";

export async function POST() {
  await destroySession();
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
