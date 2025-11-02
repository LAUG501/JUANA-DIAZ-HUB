import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Link from 'next/link';

/**
 * Home page. Provides overview of what Juana Díaz Hub offers and highlights
 * some key sections such as the directory, events calendar and blog.
 */
export default function HomePage() {
  return (
    <div className="space-y-12">
      <Hero
        imageUrl="https://images.unsplash.com/photo-___YOUR_HERO_IMAGE_LINK___?auto=format&fit=crop&w=2000&q=60"
        altText="Downtown Juana Díaz plaza"
      />

      {/* Highlights section */}
      <section>
        <h2 className="text-2xl font-heading mb-4">Discover Juana Díaz</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card imageUrl="https://images.unsplash.com/photo-___DIRECTORY_IMAGE_LINK___?auto=format&fit=crop&w=800&q=60">
            <h3 className="text-xl font-heading mb-2">Directory</h3>
            <p className="text-sm mb-4">Browse local businesses, services, venues and community organizations.</p>
            <Link href="/directory" className="text-primary font-semibold">Explore Directory →</Link>
          </Card>
          <Card imageUrl="https://images.unsplash.com/photo-___EVENTS_IMAGE_LINK___?auto=format&fit=crop&w=800&q=60">
            <h3 className="text-xl font-heading mb-2">Events Calendar</h3>
            <p className="text-sm mb-4">Stay up to date with upcoming festivals, classes, workshops and weekly challenges.</p>
            <Link href="/event-calendar" className="text-primary font-semibold">View Calendar →</Link>
          </Card>
          <Card imageUrl="https://images.unsplash.com/photo-___BLOG_IMAGE_LINK___?auto=format&fit=crop&w=800&q=60">
            <h3 className="text-xl font-heading mb-2">Stories & Guides</h3>
            <p className="text-sm mb-4">Read blog posts, how-to guides and local stories to enrich your visit.</p>
            <Link href="/blog" className="text-primary font-semibold">Read More →</Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
