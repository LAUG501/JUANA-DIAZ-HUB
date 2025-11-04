import { markStepComplete } from "../../../../lib/school-service";
import { getSession } from "../../../../lib/auth";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
  const payload = (await request.json().catch(() => null)) as { stepId?: string } | null;
  if (!payload?.stepId) {
    return new Response(JSON.stringify({ error: "Missing step" }), { status: 400 });
  }
  await markStepComplete({ userId: session.id, stepId: payload.stepId });
  return Response.json({ ok: true });
}
