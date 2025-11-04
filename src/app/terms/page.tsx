import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function TermsPage() {
  return <CommunityPageTemplate content={communityPages["terms"]} />;
}
