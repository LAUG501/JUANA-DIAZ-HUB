/**
 * Community News page.
 * Displays recent news articles and press releases.
 */
export default function NewsPage() {
  const news = [
    { headline: 'Juana Diaz Wins Tourism Award', date: '2025-10-05', summary: 'The city is recognized for its vibrant community tourism initiatives.' },
    { headline: 'New Cultural Center Opens', date: '2025-09-12', summary: 'A new center for arts and community events welcomes visitors.' },
    { headline: 'Infrastructure Improvements Announced', date: '2025-08-30', summary: 'Major investments will upgrade public spaces and transportation.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Community News</h1>
      <ul className="space-y-4">
        {news.map((article, idx) => (
          <li key={idx} className="border rounded p-4">
            <h3 className="font-heading text-xl text-primary">{article.headline}</h3>
            <p className="text-sm">{new Date(article.date).toLocaleDateString()}</p>
            <p className="text-xs text-neutralDark/70">{article.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}