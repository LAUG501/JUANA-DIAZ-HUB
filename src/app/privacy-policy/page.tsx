import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function PrivacyPolicyPage() {
  return <CommunityPageTemplate pageKey="privacy-policy" content={communityPages["privacy-policy"]} />;
}
