import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function LocalBusinessesPage() {
  return <CommunityPageTemplate pageKey="directory/local-businesses" content={communityPages["directory/local-businesses"]} />;
}
