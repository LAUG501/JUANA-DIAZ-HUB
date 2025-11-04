import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ScholarshipsPage() {
  return <CommunityPageTemplate content={communityPages["scholarships"]} />;
}
