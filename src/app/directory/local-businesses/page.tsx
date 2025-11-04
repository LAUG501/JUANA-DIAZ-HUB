import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function LocalBusinessesPage() {
  return <CommunityPageTemplate content={communityPages["directory/local-businesses"]} />;
}
