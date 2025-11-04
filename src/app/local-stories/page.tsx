import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function LocalStoriesPage() {
  return <CommunityPageTemplate content={communityPages["local-stories"]} />;
}
