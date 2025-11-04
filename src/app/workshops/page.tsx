import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function WorkshopsPage() {
  return <CommunityPageTemplate pageKey="workshops" content={communityPages["workshops"]} />;
}
