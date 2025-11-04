import ForumLanding from "@/components/forum/ForumLanding";
import { listThreads } from "@/lib/forum-service";

export const dynamic = "force-dynamic";

export default async function ForumPage() {
  const threads = await listThreads();

  return <ForumLanding threads={threads} />;
}
