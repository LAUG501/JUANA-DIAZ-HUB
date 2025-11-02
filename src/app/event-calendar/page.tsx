/**
 * Event Calendar page.
 * Displays events in monthly and weekly views.
 */
export default function EventCalendarPage() {
  const events = [
    { title: 'Festival de Música', date: '2025-11-20', location: 'Main Square' },
    { title: 'Artisan Market', date: '2025-11-28', location: 'Market District' },
    { title: 'Outdoor Movie Night', date: '2025-12-02', location: 'Beachfront Park' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Event Calendar</h1>
      <p>View upcoming events. We’ll integrate a full calendar component here soon.</p>
      <ul className="space-y-4">
        {events.map((evt, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{evt.title}</h3>
            <p className="text-sm">{new Date(evt.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{evt.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}