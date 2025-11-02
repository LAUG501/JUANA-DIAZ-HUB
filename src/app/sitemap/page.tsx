/**
 * Sitemap page.
 * Lists all pages within the Juana Diaz Hub to aid navigation.
 */
export default function SitemapPage() {
  const pages = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/forum', label: 'Forum' },
    { href: '/nightlife', label: 'Nightlife' },
    { href: '/culture', label: 'Culture' },
    { href: '/safety', label: 'Safety' },
    { href: '/travel-tips', label: 'Travel Tips' },
    { href: '/directory', label: 'Directory' },
    { href: '/event-calendar', label: 'Events' },
    { href: '/blog', label: 'Blog' },
    { href: '/guides', label: 'Guides' },
    { href: '/local-stories', label: 'Local Stories' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/videos', label: 'Videos' },
    { href: '/news', label: 'News' },
    { href: '/public-notices', label: 'Public Notices' },
    { href: '/weather-alerts', label: 'Weather & Alerts' },
    { href: '/learning-hub', label: 'Learning Hub' },
    { href: '/workshops', label: 'Workshops' },
    { href: '/scholarships', label: 'Scholarships' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/career', label: 'Career' },
    { href: '/mentorship', label: 'Mentorship' },
    { href: '/this-week', label: 'This Week' },
    { href: '/weekly-challenges', label: 'Weekly Challenges' },
    { href: '/past-events', label: 'Past Events' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/profile', label: 'Profile' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' }
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-heading">Sitemap</h1>
      <ul className="space-y-2">
        {pages.map((page, idx) => (
          <li key={idx}>
            <a href={page.href} className="text-primary hover:underline">{page.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}