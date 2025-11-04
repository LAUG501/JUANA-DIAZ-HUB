import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ServicesDirectoryPage() {
  return <CommunityPageTemplate content={communityPages["directory/services"]} />;
}
