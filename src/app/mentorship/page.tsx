import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function MentorshipPage() {
  return <CommunityPageTemplate content={communityPages["mentorship"]} />;
}
