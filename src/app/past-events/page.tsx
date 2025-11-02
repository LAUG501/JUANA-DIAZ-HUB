/**
 * Past Events page.
 * Archives previous events with photos and summaries.
 */
export default function PastEventsPage() {
  const events = [
    { title: 'Summer Festival 2025', date: '2025-07-15', summary: 'A week-long celebration of music and dance.' },
    { title: 'Cultural Parade 2024', date: '2024-12-12', summary: 'Annual parade celebrating local heritage and traditions.' },
    { title: 'Food Fair 2024', date: '2024-09-05', summary: 'Showcase of regional cuisine and culinary talent.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Past Events Archive</h1>
      <ul className="space-y-4">
        {events.map((evt, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{evt.title}</h3>
            <p className="text-sm">{new Date(evt.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{evt.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}