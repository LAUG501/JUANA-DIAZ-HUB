/**
 * Public Notices page.
 * Centralizes official bulletins and community announcements.
 */
export default function PublicNoticesPage() {
  const notices = [
    { title: 'Road Closure Notice', date: '2025-11-06', details: 'Main Street will be closed for maintenance from Nov 6–9.' },
    { title: 'Water Service Interruption', date: '2025-11-12', details: 'Expect temporary water outages in the east district on Nov 12.' },
    { title: 'Public Meeting Announcement', date: '2025-11-15', details: 'Join the town hall meeting at the Cultural Center at 6 PM.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Public Notices</h1>
      <ul className="space-y-4">
        {notices.map((notice, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{notice.title}</h3>
            <p className="text-sm">{new Date(notice.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{notice.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}