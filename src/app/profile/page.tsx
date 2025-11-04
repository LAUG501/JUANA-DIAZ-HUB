import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function ProfilePage() {
  return <CommunityPageTemplate content={communityPages["profile"]} />;
}
