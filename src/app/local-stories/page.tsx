import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function LocalStoriesPage() {
  return <CommunityPageTemplate pageKey="local-stories" content={communityPages["local-stories"]} />;
}
