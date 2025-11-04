import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function PrivacyPolicyPage() {
  return <CommunityPageTemplate content={communityPages["privacy-policy"]} />;
}
