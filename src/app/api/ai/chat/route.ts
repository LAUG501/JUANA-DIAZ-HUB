import { runAssistant } from "../../../../lib/ai-service";
import { getSession } from "../../../../lib/auth";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
  const payload = (await request.json().catch(() => null)) as { providerId?: string; prompt?: string } | null;
  if (!payload?.providerId || !payload?.prompt) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }
  try {
    const result = await runAssistant({ providerId: payload.providerId, prompt: payload.prompt, userId: session.id });
    return Response.json({ result });
  } catch (error) {
    console.error("AI chat failed", error);
    const message = error instanceof Error ? error.message : "Unable to reach assistant";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
