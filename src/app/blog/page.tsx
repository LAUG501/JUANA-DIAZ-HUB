import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function BlogPage() {
  return <CommunityPageTemplate pageKey="blog" content={communityPages["blog"]} />;
}
