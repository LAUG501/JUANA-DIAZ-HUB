import Image from "next/image";
import Link from "next/link";

const heroImage = {
  src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Juana_D%C3%ADaz_Pueblo%2C_Puerto_Rico.jpg",
  alt: "Overview of Juana Díaz town square",
};

const inlineImages = [
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    alt: "Colorful street art in Puerto Rico",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_Rom%C3%A1n_Baldorioty_de_Castro_-_Juana_Diaz%2C_PR_%282025%29-1.jpg",
    alt: "Plaza Román Baldorioty de Castro in Juana Díaz",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Sunset on a Puerto Rican beach",
  },
];

export default function ExplorePage() {
  return (
    <article className="space-y-12">
      <section className="surface overflow-hidden">
        <div className="space-y-6">
          <header className="space-y-4 text-center">
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">Explore Juana Díaz</h1>
            <p className="muted mx-auto max-w-3xl text-base md:text-lg">
              Juana Díaz stands as a dynamic center of heritage and innovation on Puerto Rico’s southern coast. From vivid murals
              and artisan studios to serene coastal boardwalks, every neighborhood reveals another layer of community pride.
            </p>
          </header>
          <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-lg md:h-96">
            <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" sizes="100vw" priority />
          </div>
        </div>
      </section>

      <section className="surface">
        <div className="space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Juana Díaz blends traditional artistry with modern enterprise, creating a unique environment where history and
            progress coexist. The murals that decorate downtown and the welcoming plazas filled with local conversation reflect a
            community proud of its identity and resilience.
          </p>

          <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-md">
            <Image src={inlineImages[0].src} alt={inlineImages[0].alt} fill className="object-cover" sizes="100vw" />
          </div>

          <p>
            The culinary scene captures the essence of local flavor—family-owned restaurants serve dishes that celebrate
            generations of tradition. Sample authentic Puerto Rican cuisine, explore cafés along the plaza, or enjoy seafood
            prepared with coastal freshness. Each meal tells a story about connection, culture, and shared experience.
          </p>

          <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-md">
            <Image src={inlineImages[1].src} alt={inlineImages[1].alt} fill className="object-cover" sizes="100vw" />
          </div>

          <p>
            Beyond the town center, natural landmarks and cultural festivals offer endless opportunities for discovery. The
            serene rivers, nearby beaches, and mountain views invite both adventure and reflection. Annual events—such as artisan
            fairs and musical parades—illustrate the rhythm of community life, reminding every visitor that Juana Díaz is not
            only a destination but a living story of people and place.
          </p>

          <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-md">
            <Image src={inlineImages[2].src} alt={inlineImages[2].alt} fill className="object-cover" sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="surface text-center">
        <p className="muted mx-auto max-w-2xl">
          Ready to keep exploring? Dive into our curated listings of businesses, guides, and cultural partners that make Juana
          Díaz unforgettable.
        </p>
        <div className="mt-6">
          <Link
            href="/directory"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 dark:bg-secondary dark:text-slate-950 dark:hover:bg-secondary/90"
          >
            Discover local businesses →
          </Link>
        </div>
      </section>
    </article>
  );
}
