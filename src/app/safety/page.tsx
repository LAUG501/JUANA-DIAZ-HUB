import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function SafetyPage() {
  return <CommunityPageTemplate pageKey="safety" content={communityPages["safety"]} />;
}
