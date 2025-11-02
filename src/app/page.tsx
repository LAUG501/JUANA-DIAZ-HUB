// app/page.tsx
import Hero from "../components/Hero";
import Card from "../components/Card";
import LoginSlider from "../components/LoginSlider";
import MapDirections from "../components/MapDirections";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />

      <section>
        <h2 className="text-3xl font-heading text-center mb-10">Discover Juana Díaz</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card
            title="Local Directory"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_Rom%C3%A1n_Baldorioty_de_Castro%2C_Juana_D%C3%ADaz%2C_Puerto_Rico.jpg"
            description="Browse businesses, services, venues and community organizations."
            href="/directory"
          />
          <Card
            title="Events Calendar"
            imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=60"
            description="Festivals, sports, town meetings and live music—weekly."
            href="/events"
          />
          <Card
            title="Community Blog"
            imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=60"
            description="Stories, interviews, spotlights and civic updates."
            href="/blog"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card
          title="City Services"
          imageUrl="https://images.unsplash.com/photo-1482784160316-6eb046863ece?auto=format&fit=crop&w=1400&q=60"
          description="Permits, utilities, forms and assistance programs."
          href="/services"
        />
        <Card
          title="Business Hub"
          imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60"
          description="Open a business, find resources, and grow with the community."
          href="/business"
        />
        <Card
          title="Parks & Culture"
          imageUrl="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=60"
          description="Explore plazas, beaches, and historic landmarks."
          href="/culture"
        />
      </section>

      <LoginSlider />

      <section className="rounded-3xl bg-gray-900 text-white p-8 md:p-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div><div className="text-4xl font-extrabold">78</div><div className="text-sm text-gray-300">Municipalities</div></div>
          <div><div className="text-4xl font-extrabold">2.1K+</div><div className="text-sm text-gray-300">Businesses</div></div>
          <div><div className="text-4xl font-extrabold">450+</div><div className="text-sm text-gray-300">Upcoming Events</div></div>
          <div className="flex items-center">
            <Link href="/directory/submit" className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold">
              Add Your Business
            </Link>
          </div>
        </div>
      </section>

      <MapDirections />

      <section className="rounded-3xl bg-gray-50 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Stay in the Loop</h3>
            <p className="text-sm text-gray-600">
              Weekly highlights of events, new businesses, job posts, and local alerts.
            </p>
          </div>
          <form className="flex gap-3">
            <input className="flex-1 rounded-lg border p-3" type="email" placeholder="you@email.com" />
            <button className="rounded-lg bg-primary px-5 py-3 font-semibold text-white" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
