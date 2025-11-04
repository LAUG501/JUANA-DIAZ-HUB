import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function SitemapPage() {
  return <CommunityPageTemplate content={communityPages["sitemap"]} />;
}
