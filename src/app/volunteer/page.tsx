/**
 * Volunteer page.
 * Lists volunteer opportunities for community engagement.
 */
export default function VolunteerPage() {
  const opportunities = [
    { name: 'Beach Cleanup', date: '2025-11-08', description: 'Help clean our beautiful beaches.' },
    { name: 'Food Bank Assistance', date: '2025-11-12', description: 'Assist with packaging and distribution.' },
    { name: 'Community Garden Planting', date: '2025-11-21', description: 'Join us to plant and maintain the community garden.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Volunteer Opportunities</h1>
      <ul className="space-y-4">
        {opportunities.map((op, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{op.name}</h3>
            <p className="text-sm">{new Date(op.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{op.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}