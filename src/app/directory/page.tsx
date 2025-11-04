import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function DirectoryPage() {
  return <CommunityPageTemplate pageKey="directory" content={communityPages["directory"]} />;
}
