/**
 * Explore page.
 * Showcases attractions, restaurants and landmarks of Juana Diaz.
 */
export default function ExplorePage() {
  return (
    <section className="bg-white text-gray-900 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
            Explore Juana Díaz
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A vibrant community rich in history, culture, and natural beauty.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-14">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Casa_Alcaldia_-_Juana_Diaz_Puerto_Rico.jpg=rb-4.0.3&auto=format&fit=crop&w=1800&q=60"
            alt="Juana Díaz landscape"
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Paragraphs */}
        <div className="space-y-10 text-lg leading-relaxed text-gray-700">
          <p>
            Juana Díaz stands as a dynamic center of heritage and innovation on
            Puerto Rico’s southern coast. The town blends traditional artistry
            with modern enterprise, creating a unique environment where history
            and progress coexist. From the vivid murals that decorate downtown
            to the welcoming plazas filled with local conversation, every corner
            reflects a community proud of its identity and resilience.
          </p>

          {/* Inline Image */}
          <div className="rounded-lg overflow-hidden shadow-md my-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/72/Juana_D%C3%ADaz_Pueblo%2C_Puerto_Rico.jpg=rb-4.0.3&auto=format&fit=crop&w=1800&q=60"
              alt="Local street and culture"
              className="w-full h-72 object-cover"
            />
          </div>

          <p>
            The culinary scene captures the essence of local flavor—family-owned
            restaurants serve dishes that celebrate generations of tradition.
            Visitors can sample authentic Puerto Rican cuisine, explore small
            cafés along the plaza, or enjoy seafood prepared with coastal
            freshness. Each meal tells a story about connection, culture, and
            shared experience, turning dining into a celebration of daily life.
          </p>

          {/* Inline Image */}
          <div className="rounded-lg overflow-hidden shadow-md my-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_Rom%C3%A1n_Baldorioty_de_Castro_-_Juana_Diaz%2C_PR_%282025%29-1.jpg?auto=format&fit=crop&w=1800&q=60"
              alt="Puerto Rican food and dining"
              className="w-full h-72 object-cover"
            />
          </div>

          <p>
            Beyond the town center, natural landmarks and cultural festivals
            offer endless opportunities for discovery. The serene rivers, nearby
            beaches, and mountain views invite adventure and reflection alike.
            Annual events—such as artisan fairs and musical parades—illustrate
            the rhythm of community life, reminding every visitor that Juana
            Díaz is not only a destination, but a living story of people and
            place.
          </p>

          {/* Inline Image */}
          <div className="rounded-lg overflow-hidden shadow-md my-6">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=60"
              alt="Beach near Juana Díaz"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Footer CTA */}
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
