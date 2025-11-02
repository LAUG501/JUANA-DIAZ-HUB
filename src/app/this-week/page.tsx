/**
 * This Week page.
 * Highlights key events and happenings this week.
 */
export default function ThisWeekPage() {
  const highlights = [
    { title: 'Night Market', date: '2025-11-03', description: 'Food trucks, music and artisan goods.' },
    { title: 'Street Art Tour', date: '2025-11-05', description: 'Guided tour of murals and installations.' },
    { title: 'Community Yoga', date: '2025-11-07', description: 'Outdoor yoga session in the park.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">This Week in Juana Diaz</h1>
      <ul className="space-y-4">
        {highlights.map((item, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{item.title}</h3>
            <p className="text-sm">{new Date(item.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}