import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function MentorshipPage() {
  return <CommunityPageTemplate pageKey="mentorship" content={communityPages["mentorship"]} />;
}
