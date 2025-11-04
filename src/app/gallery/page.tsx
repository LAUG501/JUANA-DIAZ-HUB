import CommunityPageTemplate from "@/components/CommunityPageTemplate";
import { communityPages } from "@/data/community-pages";

export default function GalleryPage() {
  return <CommunityPageTemplate pageKey="gallery" content={communityPages["gallery"]} />;
}
