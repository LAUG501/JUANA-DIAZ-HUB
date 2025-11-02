/**
 * Organizations directory page.
 * Highlights community organizations and non‑profits.
 */
export default function OrganizationsPage() {
  const organizations = [
    { name: 'Juana Diaz Cultural Association', mission: 'Promoting arts and heritage through events and education.' },
    { name: 'Community Food Bank', mission: 'Providing food assistance to families in need.' },
    { name: 'Youth Sports League', mission: 'Encouraging healthy lifestyles through sports programs for youth.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Organizations & Non‑Profits</h1>
      <ul className="space-y-4">
        {organizations.map((org, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{org.name}</h3>
            <p className="text-sm">{org.mission}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}