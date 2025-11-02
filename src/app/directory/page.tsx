import Link from 'next/link';

/**
 * Directory landing page.
 * Provides an overview of available directory categories such as businesses, services and professionals.
 */
export default function DirectoryPage() {
  const categories = [
    { href: '/directory/local-businesses', title: 'Local Businesses', description: 'Restaurants, bars, shops and more.' },
    { href: '/directory/services', title: 'Services', description: 'Hotels, taxis, guides and other services.' },
    { href: '/directory/venues', title: 'Venues', description: 'Event and rental spaces.' },
    { href: '/directory/organizations', title: 'Organizations', description: 'Community organizations and non‑profits.' },
    { href: '/directory/professionals', title: 'Professionals', description: 'Artists, DJs, photographers and other creatives.' }
  ];
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-heading">Community Directory</h1>
      <p>Browse through our curated lists of local businesses, services, venues and more. Choose a category below to get started.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {categories.map(cat => (
          <Link key={cat.href} href={cat.href} className="p-4 rounded border hover:shadow">
            <h3 className="font-heading text-xl mb-1 text-primary">{cat.title}</h3>
            <p className="text-sm">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}