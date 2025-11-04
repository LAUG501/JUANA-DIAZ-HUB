import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ThisWeekPage() {
  return <CommunityPageTemplate content={communityPages["this-week"]} />;
}
