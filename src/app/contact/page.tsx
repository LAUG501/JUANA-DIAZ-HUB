import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ContactPage() {
  return <CommunityPageTemplate content={communityPages["contact"]} />;
}
