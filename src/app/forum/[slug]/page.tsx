import ThreadDetailView from "@/components/forum/ThreadDetailView";
import { getThreadBySlug } from "@/lib/forum-service";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function ThreadPage({ params }: { params: { slug: string } }) {
  const session = await getSession();
  const thread = await getThreadBySlug(params.slug, session?.id);
  if (!thread) {
    notFound();
  }

  return <ThreadDetailView thread={thread} />;
}
