import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function PastEventsPage() {
  return <CommunityPageTemplate content={communityPages["past-events"]} />;
}
