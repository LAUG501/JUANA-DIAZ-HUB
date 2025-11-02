'use client';
import Image from 'next/image';

export default function ExplorePage() {
  return (
    <section className="bg-white text-gray-900 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
            Explore Juana Díaz
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A vibrant community rich in history, culture, and natural beauty.
          </p>
        </header>

        <div className="space-y-10 text-lg leading-relaxed text-gray-700">
          <p>
            Juana Díaz stands as a dynamic center of heritage and innovation on
            Puerto Rico’s southern coast. The town blends traditional artistry
            with modern enterprise, creating a unique environment where history
            and progress coexist.
          </p>

          <Image
            src="https://images.unsplash.com/photo-1584306673395-3bbf73791797?auto=format&fit=crop&w=1600&q=60"
            alt="Local cuisine from Puerto Rico"
            width={1200}
            height={700}
            className="rounded-xl shadow-md mx-auto"
          />

          <p>
            The culinary scene captures the essence of local flavor—family-owned
            restaurants serve dishes that celebrate generations of tradition.
            Visitors can sample authentic Puerto Rican cuisine, explore cafés
            along the plaza, or enjoy seafood prepared with coastal freshness.
          </p>

          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/Iglesia_de_San_Juan_Bautista_y_San_Ramon_Nonato_-_Juana_Diaz_Puerto_Rico.jpg"
            alt="Juana Díaz downtown plaza"
            width={1200}
            height={700}
            className="rounded-xl shadow-md mx-auto"
          />

          <p>
            Beyond the town center, natural landmarks and cultural festivals
            offer endless opportunities for discovery. Rivers, nearby beaches,
            and mountain views invite both adventure and reflection.
          </p>
        </div>

        <footer className="mt-12 text-center">
          <a
            href="/directory"
            className="inline-block bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-600 transition"
          >
            Discover Local Businesses →
          </a>
        </footer>
      </div>
    </section>
  );
}
