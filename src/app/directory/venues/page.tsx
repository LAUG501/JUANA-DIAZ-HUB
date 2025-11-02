/**
 * Venues directory page.
 * Lists event venues and rental spaces.
 */
export default function VenuesPage() {
  const venues = [
    { name: 'Cultural Center', description: 'Multipurpose cultural venue for performances and events.', capacity: 300 },
    { name: 'Playa Ballroom', description: 'Beachside ballroom suitable for weddings and large parties.', capacity: 150 },
    { name: 'Rooftop Terrace', description: 'Open-air venue overlooking the city skyline.', capacity: 100 }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Venues</h1>
      <ul className="space-y-4">
        {venues.map((venue, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{venue.name}</h3>
            <p className="text-sm">{venue.description}</p>
            <p className="text-xs text-neutralDark/70">Capacity: {venue.capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}