import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ThisWeekPage() {
  return <CommunityPageTemplate pageKey="this-week" content={communityPages["this-week"]} />;
}
