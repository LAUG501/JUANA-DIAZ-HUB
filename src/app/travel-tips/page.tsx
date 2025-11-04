import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function TravelTipsPage() {
  return <CommunityPageTemplate content={communityPages["travel-tips"]} />;
}
