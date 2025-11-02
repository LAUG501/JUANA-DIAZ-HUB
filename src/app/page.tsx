import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    imageUrl: 'https://images.unsplash.com/photo-___YOUR_ISLAND_IMAGE1___?auto=format&fit=crop&w=2000&q=60',
    caption: 'Welcome to Juana Díaz – Heart of the Community'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-___YOUR_ISLAND_IMAGE2___?auto=format&fit=crop&w=2000&q=60',
    caption: 'Discover local culture, heritage and coastal beauty'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-___YOUR_ISLAND_IMAGE3___?auto=format&fit=crop&w=2000&q=60',
    caption: 'Join events, meet your neighbors, and explore together'
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full-Width Hero Slider */}
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div key={idx} className={`w-full h-screen relative ${idx === 0 ? '' : 'hidden'}`}>
            <Image
              src={slide.imageUrl}
              alt={slide.caption}
              layout="fill"
              objectFit="cover"
              className="brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-5xl font-bold text-center px-4">
                {slide.caption}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Login & Quick Access */}
      <section className="bg-white py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-heading mb-4">Sign In or Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Connect with locals, share your stories, and stay informed about Juana Díaz happenings.
          </p>
          <Link href="/login" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition">
            Login / Register →
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-___YOUR_LOGIN_IMAGE___?auto=format&fit=crop&w=1200&q=60"
            alt="Community login image"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 lg:px-16 bg-gray-100">
        <h2 className="text-2xl font-heading mb-8 text-center">Discover Juana Díaz</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card imageUrl="https://images.unsplash.com/photo-___IMAGE_DIR1___?auto=format&fit=crop&w=800&q=60">
            <h3 className="text-xl font-heading mb-2">Directory</h3>
            <p className="text-sm mb-4">Browse local businesses, services, venues and community organizations.</p>
            <Link href="/directory" className="text-primary font-semibold">Explore Directory →</Link>
          </Card>
          <Card imageUrl="https://images.unsplash.com/photo-___IMAGE_DIR2___?auto=format&fit=crop&w=800&q=60">
            <h3 className="text-xl font-heading mb-2">Events Calendar</h3>
            <p className="text-sm mb-4">Stay up to date with upcoming festivals, classes, workshops and weekly challenges.</p>
            <Link href="/event-calendar" className="text-primary font-semibold">View Calendar →</Link>
          </Card>
          <Card imageUrl="https://images.unsplash.com/photo-___IMAGE_DIR3___?auto=format&fit=crop&w=800&q=60">
            <h3 className="text-xl font-heading mb-2">Stories & Guides</h3>
            <p className="text-sm mb-4">Read blog posts, how-to guides and local stories to enrich your visit.</p>
            <Link href="/blog" className="text-primary font-semibold">Read More →</Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
