/**
 * Blog page.
 * Acts as an index of articles and news posts.
 */
export default function BlogPage() {
  const posts = [
    { title: 'Exploring the Hidden Gems of Juana Diaz', date: '2025-10-18', excerpt: 'Discover the lesser-known spots that locals love.' },
    { title: 'Guide to Juana Diaz Nightlife', date: '2025-09-30', excerpt: 'Tips on enjoying the vibrant nightlife safely and responsibly.' },
    { title: 'Interview with Local Artist Ana Rodriguez', date: '2025-08-22', excerpt: 'A conversation about art, heritage and inspiration.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Community Blog</h1>
      <ul className="space-y-4">
        {posts.map((post, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{post.title}</h3>
            <p className="text-sm">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}