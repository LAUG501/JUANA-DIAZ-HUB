/**
 * Scholarships page.
 * Lists scholarships and grant opportunities for local education.
 */
export default function ScholarshipsPage() {
  const scholarships = [
    { name: 'Cultural Studies Grant', deadline: '2025-12-31', description: 'Supports students pursuing cultural research.' },
    { name: 'Tourism & Hospitality Scholarship', deadline: '2025-11-20', description: 'Assists those studying tourism and hospitality.' },
    { name: 'Community Service Award', deadline: '2026-01-15', description: 'Recognizes students contributing to community projects.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Scholarships & Grants</h1>
      <ul className="space-y-4">
        {scholarships.map((sch, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{sch.name}</h3>
            <p className="text-sm">Deadline: {new Date(sch.deadline).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{sch.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}