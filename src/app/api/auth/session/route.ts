import { getSession } from "../../../../lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ user: null }), { status: 200 });
  }
  return Response.json({ user: session });
}
