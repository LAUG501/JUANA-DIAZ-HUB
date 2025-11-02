/**
 * Career page.
 * Lists job openings and freelance opportunities.
 */
export default function CareerPage() {
  const jobs = [
    { title: 'Tour Guide', company: 'Adventure Tours', description: 'Lead visitors on tours across Juana Diaz.' },
    { title: 'Barista', company: 'La Plaza Café', description: 'Prepare and serve coffee beverages.' },
    { title: 'Event Coordinator', company: 'Cultural Center', description: 'Organize and manage cultural events.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Career & Job Board</h1>
      <ul className="space-y-4">
        {jobs.map((job, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{job.title}</h3>
            <p className="text-sm">Employer: {job.company}</p>
            <p className="text-xs text-neutralDark/70">{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}