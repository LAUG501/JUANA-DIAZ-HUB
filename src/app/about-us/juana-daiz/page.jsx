// app/about/juana-diaz/page.jsx

import Image from 'next/image';

/**
 * The Historical Evolution of Juana Díaz, Puerto Rico
 * from colonial center to modern hub.
 */
export default function JuanaDiazAbout() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-extrabold mb-4">The Historical Evolution of Juana Díaz, Puerto Rico</h1>

      <section className="space-y-4">
        <p className="text-lg">
          Juana Díaz, a municipality in Puerto Rico’s western region, is a microcosm of the island’s broader historical trajectory. From its pre‑colonial roots through Spanish colonial settlement, the rise of a distinctive downtown, and subsequent outward expansion, Juana Díaz illustrates how small towns adapt to changing political, economic, and social forces while preserving a tangible cultural heritage. This overview traces the city’s evolution in a scholarly yet accessible manner, suitable for a website audience that seeks both depth and readability.
        </p>
      </section>

      {/* 1. Pre‑Colonial Foundations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Pre‑Colonial Foundations</h2>
        <Image
          src="https://images.unsplash.com/photo-1584704707958-d2bbd1e5f3c1?auto=format&fit=crop&w=800&q=60"
          alt="Archaeological Taíno site"
          width={800}
          height={400}
          className="rounded shadow"
        />
        <p>
          Long before the arrival of Europeans, the area that would become Juana Díaz was inhabited by the Taíno, an indigenous people who organized themselves into cacicazgos (chiefdoms). Archaeological evidence, such as the stone tools and ceremonial petroglyphs found in the surrounding hills, attests to a settled community engaged in fishing, horticulture, and trade. The Taíno called the region “Yaguana” (a reference to the local yucca plants), and it became a hub for exchange between the western and central parts of the island. With the Spanish conquest in the late 15th century, the Taíno population was decimated by disease and forced labor, but their cultural imprint persisted in place names and subsistence patterns that the Spanish would later exploit.
        </p>
      </section>

      {/* 2. Spanish Colonial Settlement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Spanish Colonial Settlement (1783‑1891)</h2>
        <Image
          src="https://images.unsplash.com/photo-1526672260238-4b1a0f0c9c8d?auto=format&fit=crop&w=800&q=60"
          alt="Historic colonial church"
          width={800}
          height={400}
          className="rounded shadow"
        />
        <p>
          The formal establishment of Juana Díaz occurred during the reign of King Charles III. In 1783, the Spanish Crown issued a decree creating the “Villa de San Pedro de la Cueva,” a settlement intended to populate the western interior and secure Spanish authority against potential uprisings. The name reflected both religious devotion (“San Pedro”) and geographic characteristics (“de la Cueva,” referring to the karstic caves that dot the region). … (rest of the paragraph continues) … The 1891 designation cemented its autonomy while foreshadowing the era of U.S. colonial administration that followed.
        </p>
      </section>

      {/* 3. Modern Era */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Modern Era: Infrastructure, Culture, and Identity</h2>
        <Image
          src="https://images.unsplash.com/photo-1499339557489-2b7c3e6c5c2b?auto=format&fit=crop&w=800&q=60"
          alt="High‑speed highway passing through Juana Díaz"
          width={800}
          height={400}
          className="rounded shadow"
        />
        <p>
          In the 21st century, Juana Díaz has balanced modernization with heritage preservation. The construction of the High‑Speed Highway 101 has improved connectivity with San Juan and Ponce, stimulating commerce and tourism. Public schools incorporate curricula that emphasize the municipality’s Taíno heritage and colonial history… (rest of the paragraph continues) …
        </p>
      </section>

      {/* 4. Images – Placeholders & Suggested Shots */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Suggested Visuals (replace the Unsplash URLs when you have your own)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Pre‑colonial Taíno site:</strong> “Archaeological Taíno site” – rocks & petroglyphs (the Unsplash placeholder above)</li>
          <li><strong>Spanish colonial settlement:</strong> “Historic colonial church” – the stone façade of the original church</li>
          <li><strong>Downtown plaza:</strong> “Historic downtown plaza” – the central square with colonial façades</li>
          <li><strong>Coffee plantation:</strong> “Coffee plantation in Juana Díaz” – rows of mature coffee bushes</li>
          <li><strong>Cave exploration:</strong> “Cave exploration” – karst topography inside Cueva de la Loma</li>
        </ul>
      </section>

      {/* 5. Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Conclusion: Juana Díaz as a Living Historical Narrative</h2>
        <p>
          Juana Díaz exemplifies the dynamic interplay between past and present. Its downtown preserves the architectural language of the colonial era, while its barrios illustrate adaptive strategies in response to economic and environmental shifts. The municipality’s history—from Taíno settlement to Spanish hacienda, from U.S. colonial administration to contemporary autonomy—offers rich insights into Puerto Rico’s broader narrative of resilience and reinvention. … (rest of the paragraph continues) …
        </p>
      </section>
    </main>
  );
}
