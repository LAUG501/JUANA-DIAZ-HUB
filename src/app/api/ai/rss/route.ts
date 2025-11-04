import { generateAiRssFeed } from "../../../../lib/ai-service";

export const dynamic = "force-dynamic";

export async function GET() {
  const rss = await generateAiRssFeed();
  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
