/**
 * Videos page.
 * Showcases video content such as event recaps and mini-documentaries.
 */
export default function VideosPage() {
  const videos = [
    { title: 'Festival Highlights', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Cultural Heritage Documentary', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Nightlife After Dark', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Video Hub</h1>
      <div className="space-y-8">
        {videos.map((vid, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="font-heading text-xl text-primary">{vid.title}</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={vid.embed}
                title={vid.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}