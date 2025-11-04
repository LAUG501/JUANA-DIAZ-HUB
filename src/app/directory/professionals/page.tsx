import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ProfessionalsDirectoryPage() {
  return <CommunityPageTemplate content={communityPages["directory/professionals"]} />;
}
