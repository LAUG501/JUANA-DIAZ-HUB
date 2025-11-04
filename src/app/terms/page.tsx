import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function TermsPage() {
  return <CommunityPageTemplate pageKey="terms" content={communityPages["terms"]} />;
}
