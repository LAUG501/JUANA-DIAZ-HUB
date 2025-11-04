import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function PublicNoticesPage() {
  return <CommunityPageTemplate pageKey="public-notices" content={communityPages["public-notices"]} />;
}
