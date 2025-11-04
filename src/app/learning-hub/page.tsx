import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function LearningHubPage() {
  return <CommunityPageTemplate pageKey="learning-hub" content={communityPages["learning-hub"]} />;
}
