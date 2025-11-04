import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function OrganizationsDirectoryPage() {
  return <CommunityPageTemplate content={communityPages["directory/organizations"]} />;
}
