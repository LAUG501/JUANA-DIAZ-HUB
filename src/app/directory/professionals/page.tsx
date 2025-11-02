/**
 * Professionals directory page.
 * Profiles local artists, DJs, photographers and other creatives and professionals.
 */
export default function ProfessionalsPage() {
  const pros = [
    { name: 'Maria Rivera', role: 'Photographer', bio: 'Specializes in street and portrait photography.' },
    { name: 'DJ Carlos', role: 'DJ', bio: 'Spins at local festivals and nightlife venues.' },
    { name: 'Ana Rodriguez', role: 'Muralist', bio: 'Creates large scale murals celebrating Puerto Rican heritage.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Creative Professionals</h1>
      <ul className="space-y-4">
        {pros.map((pro, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{pro.name}</h3>
            <p className="text-sm">{pro.role} – {pro.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}