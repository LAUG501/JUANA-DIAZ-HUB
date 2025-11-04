import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function PastEventsPage() {
  return <CommunityPageTemplate pageKey="past-events" content={communityPages["past-events"]} />;
}
