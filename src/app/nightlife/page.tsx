import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function NightlifePage() {
  return <CommunityPageTemplate pageKey="nightlife" content={communityPages["nightlife"]} />;
}
