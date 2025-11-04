import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function OrganizationsDirectoryPage() {
  return <CommunityPageTemplate pageKey="directory/organizations" content={communityPages["directory/organizations"]} />;
}
