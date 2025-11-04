import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function CareerPage() {
  return <CommunityPageTemplate pageKey="career" content={communityPages["career"]} />;
}
