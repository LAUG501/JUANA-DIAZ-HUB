import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Link from 'next/link';

/**
 * Home page. Provides overview of Juana Diaz Hub.
 */
export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />

      {/* Discover Section */}
      <section>
        <h2 className="text-3xl font-heading text-center mb-10">Discover Juana Díaz</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            title="Local Directory"
            imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
            description="Browse local businesses, services, venues and community organizations."
          >
            <Link href="/directory" className="text-primary font-semibold">
              Explore Directory →
            </Link>
          </Card>

          <Card
            title="Events Calendar"
            imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=60"
            description="Stay up to date with the latest community events and celebrations."
          >
            <Link href="/events" className="text-primary font-semibold">
              View Events →
            </Link>
          </Card>

          <Card
            title="Community Blog"
            imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60"
            description="Read stories, interviews, and updates from our vibrant community."
          >
            <Link href="/blog" className="text-primary font-semibold">
              Visit Blog →
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
