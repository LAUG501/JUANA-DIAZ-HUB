import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function EventCalendarPage() {
  return <CommunityPageTemplate pageKey="event-calendar" content={communityPages["event-calendar"]} />;
}
