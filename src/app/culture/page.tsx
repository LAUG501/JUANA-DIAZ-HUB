import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function CulturePage() {
  return <CommunityPageTemplate content={communityPages["culture"]} />;
}
