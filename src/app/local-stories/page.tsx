/**
 * Local Stories page.
 * Features interviews and stories from residents of Juana Diaz.
 */
export default function LocalStoriesPage() {
  const stories = [
    { title: 'From Fisherman to Chef', author: 'Pedro Santiago', excerpt: 'Pedro shares his journey from fishing to opening his own restaurant.' },
    { title: 'A Painter’s Perspective', author: 'Luisa Morales', excerpt: 'Luisa talks about capturing the spirit of Juana Diaz on canvas.' },
    { title: 'Community Organizers Unite', author: 'Carlos & Ana', excerpt: 'How two activists are making a difference through neighborhood initiatives.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Local Stories</h1>
      <ul className="space-y-4">
        {stories.map((story, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{story.title}</h3>
            <p className="text-sm">By {story.author}</p>
            <p className="text-xs text-neutralDark/70">{story.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}