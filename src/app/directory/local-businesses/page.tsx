/**
 * Local Businesses directory page.
 * Lists restaurants, bars, shops and other local businesses.
 */
export default function LocalBusinessesPage() {
  const businesses = [
    { name: 'La Plaza Café', description: 'Cozy café serving coffee and pastries.', location: 'Central Plaza' },
    { name: 'Casa de Tapas', description: 'Authentic Puerto Rican tapas bar.', location: 'Old Town' },
    { name: 'Boutique Esperanza', description: 'Handcrafted goods and souvenirs.', location: 'Market District' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Local Businesses</h1>
      <ul className="space-y-4">
        {businesses.map((biz, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{biz.name}</h3>
            <p className="text-sm">{biz.description}</p>
            <p className="text-xs text-neutralDark/70">{biz.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}