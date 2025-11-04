import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ExplorePage() {
  return <CommunityPageTemplate content={communityPages["explore"]} />;
}
