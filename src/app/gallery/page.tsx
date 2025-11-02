/**
 * Gallery page.
 * Displays a collection of photos submitted by the community.
 */
export default function GalleryPage() {
  // Placeholder images; in a real app, images would be fetched from CMS or storage
  const images = [
    { src: 'https://placehold.co/600x400', alt: 'Scenic view of Juana Diaz' },
    { src: 'https://placehold.co/600x400', alt: 'Festival performance' },
    { src: 'https://placehold.co/600x400', alt: 'Local cuisine' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Photo Gallery</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
            <p className="text-xs text-center mt-2">{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}