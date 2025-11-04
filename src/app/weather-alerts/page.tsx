import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function WeatherAlertsPage() {
  return <CommunityPageTemplate content={communityPages["weather-alerts"]} />;
}
