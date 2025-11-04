import { getSession } from "../../../../lib/auth";
import { getContent, listPageContent, setContent } from "../../../../lib/content-service";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const key = url.searchParams.get("key");
  const languageParam = url.searchParams.get("language") ?? "en";
  const language = languageParam === "es" ? "es" : "en";

  if (!page) {
    return new Response(JSON.stringify({ error: "Missing page" }), { status: 400 });
  }

  if (key) {
    const block = await getContent(page, key, language);
    return Response.json({ block });
  }

  const blocks = await listPageContent(page);
  return Response.json({ blocks });
}

export async function POST(request: Request) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403 });
  }

  const payload = (await request.json().catch(() => null)) as {
    page?: string;
    key?: string;
    language?: string;
    content?: string;
  } | null;
  if (!payload?.page || !payload?.key || !payload?.content) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }
  const language = payload.language === "es" ? "es" : "en";
  const block = await setContent({
    page: payload.page,
    key: payload.key,
    language,
    content: payload.content,
    userId: session.id,
  });
  return Response.json({ block });
}
