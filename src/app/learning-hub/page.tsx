import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function LearningHubPage() {
  return <CommunityPageTemplate content={communityPages["learning-hub"]} />;
}
