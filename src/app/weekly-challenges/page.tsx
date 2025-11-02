/**
 * Weekly Challenges page.
 * Presents current challenge and archives previous ones.
 */
export default function WeeklyChallengesPage() {
  const current = { title: 'Photo Scavenger Hunt', week: 'Nov 3–9, 2025', objective: 'Capture images of historic landmarks.' };
  const archive = [
    { title: 'Community Clean‑up', week: 'Oct 27–Nov 2, 2025' },
    { title: 'Culinary Quest', week: 'Oct 20–26, 2025' },
    { title: 'Art Appreciation', week: 'Oct 13–19, 2025' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Weekly Challenges</h1>
      <section>
        <h2 className="text-2xl font-heading mb-2 text-primary">Current Challenge</h2>
        <p className="font-semibold">{current.title} ({current.week})</p>
        <p className="text-sm">Objective: {current.objective}</p>
      </section>
      <section>
        <h2 className="text-2xl font-heading mb-2">Past Challenges</h2>
        <ul className="space-y-2">
          {archive.map((ch, idx) => (
            <li key={idx} className="border rounded p-2">
              <strong className="text-primary">{ch.title}</strong> – {ch.week}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}