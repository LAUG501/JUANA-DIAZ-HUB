import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ServicesDirectoryPage() {
  return <CommunityPageTemplate pageKey="directory/services" content={communityPages["directory/services"]} />;
}
