import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function VideosPage() {
  return <CommunityPageTemplate pageKey="videos" content={communityPages["videos"]} />;
}
