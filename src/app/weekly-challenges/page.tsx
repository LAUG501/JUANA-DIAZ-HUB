import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function WeeklyChallengesPage() {
  return <CommunityPageTemplate pageKey="weekly-challenges" content={communityPages["weekly-challenges"]} />;
}
