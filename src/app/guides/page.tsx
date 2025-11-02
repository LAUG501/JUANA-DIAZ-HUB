/**
 * Guides page.
 * Hosts step‑by‑step guides and tutorials.
 */
export default function GuidesPage() {
  const guides = [
    { title: 'How to Get Around Juana Diaz', description: 'A guide to transportation options including buses, taxis and car rentals.' },
    { title: 'Planning a Cultural Tour', description: 'Create an itinerary to explore museums, galleries and historic sites.' },
    { title: 'Nightlife Safety Tips', description: 'Stay safe while enjoying the vibrant nightlife.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Guides & How‑Tos</h1>
      <ul className="space-y-4">
        {guides.map((guide, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{guide.title}</h3>
            <p className="text-sm">{guide.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}