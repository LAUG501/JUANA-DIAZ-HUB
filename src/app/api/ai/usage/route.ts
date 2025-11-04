import { listUsage } from "../../../../lib/ai-service";
import { getSession } from "../../../../lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }
  const usage = await listUsage();
  return Response.json({ usage });
}
