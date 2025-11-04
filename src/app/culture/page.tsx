import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function CulturePage() {
  return <CommunityPageTemplate pageKey="culture" content={communityPages["culture"]} />;
}
