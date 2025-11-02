/**
 * Services directory page.
 * Lists hotels, taxis, guides and other service providers.
 */
export default function ServicesDirectoryPage() {
  const services = [
    { name: 'Hotel Miramar', description: 'Comfortable accommodation near the beach.', contact: '+1 (787) 123‑4567' },
    { name: 'Juan Taxi Co.', description: '24/7 taxi service throughout Juana Diaz.', contact: '+1 (787) 234‑5678' },
    { name: 'Adventure Tours', description: 'Guided tours to caves, waterfalls and hikes.', contact: '+1 (787) 345‑6789' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Services Directory</h1>
      <ul className="space-y-4">
        {services.map((svc, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{svc.name}</h3>
            <p className="text-sm">{svc.description}</p>
            <p className="text-xs text-neutralDark/70">Contact: {svc.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}