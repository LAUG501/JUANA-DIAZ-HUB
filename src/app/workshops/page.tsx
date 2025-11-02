/**
 * Workshops page.
 * Lists upcoming workshops and classes available in Juana Diaz.
 */
export default function WorkshopsPage() {
  const workshops = [
    { title: 'Salsa Dancing 101', date: '2025-11-10', location: 'Cultural Center' },
    { title: 'Coffee Brewing Masterclass', date: '2025-11-15', location: 'La Plaza Café' },
    { title: 'Local Crafts Workshop', date: '2025-12-05', location: 'Market Hall' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Workshops & Classes</h1>
      <ul className="space-y-4">
        {workshops.map((w, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{w.title}</h3>
            <p className="text-sm">{new Date(w.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">Location: {w.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}