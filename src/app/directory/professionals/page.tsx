import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ProfessionalsDirectoryPage() {
  return <CommunityPageTemplate pageKey="directory/professionals" content={communityPages["directory/professionals"]} />;
}
