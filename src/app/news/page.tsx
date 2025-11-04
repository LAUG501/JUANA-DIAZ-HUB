import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function NewsPage() {
  return <CommunityPageTemplate pageKey="news" content={communityPages["news"]} />;
}
