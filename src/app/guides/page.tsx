import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function GuidesPage() {
  return <CommunityPageTemplate content={communityPages["guides"]} />;
}
