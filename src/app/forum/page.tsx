import ForumLanding from "@/components/forum/ForumLanding";
import { listForumTags, listThreads } from "@/lib/forum-service";

export const dynamic = "force-dynamic";

export default async function ForumPage() {
  const [threads, tags] = await Promise.all([listThreads(), listForumTags()]);

  return <ForumLanding threads={threads} tags={tags} />;
}
