import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function AboutUsPage() {
  return <CommunityPageTemplate content={communityPages["about-us"]} />;
}
