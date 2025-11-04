import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function VolunteerPage() {
  return <CommunityPageTemplate pageKey="volunteer" content={communityPages["volunteer"]} />;
}
