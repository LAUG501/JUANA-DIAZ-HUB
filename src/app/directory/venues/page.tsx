import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function VenuesDirectoryPage() {
  return <CommunityPageTemplate content={communityPages["directory/venues"]} />;
}
