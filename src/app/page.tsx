import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Link from 'next/link';

/**
 * Home page. Provides overview of what Juana Diaz Hub offers and highlights
 * some key sections such as the directory, events calendar and blog.
 */
export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero />

      {/* Highlights section */}
      <section>
        <h2 className="text-2xl font-heading mb-4">Discover Juana Diaz</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-heading mb-2">Directory</h3>
            <p className="text-sm mb-4">Browse local businesses, services, venues and community organizations.</p>
            <Link href="/directory" className="text-primary font-semibold">Explore Directory →</Link>
          </Card>
          <Card>
            <h3 className="text-xl font-heading mb-2">Events Calendar</h3>
            <p className="text-sm mb-4">Stay up to date with upcoming festivals, classes, workshops and weekly challenges.</p>
            <Link href="/event-calendar" className="text-primary font-semibold">View Calendar →</Link>
          </Card>
          <Card>
            <h3 className="text-xl font-heading mb-2">Stories & Guides</h3>
            <p className="text-sm mb-4">Read blog posts, how‑to guides and local stories to enrich your visit.</p>
            <Link href="/blog" className="text-primary font-semibold">Read More →</Link>
          </Card>
        </div>
      </section>
    </div>
  );
}