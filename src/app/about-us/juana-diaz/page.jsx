import Image from "next/image";

/**
 * The Historical Evolution of Juana Díaz, Puerto Rico: From Colonial Center to Regional Hub
 */
export default function JuanaDiazAbout() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10 text-gray-800">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          The Historical Evolution of Juana Díaz, Puerto Rico: From Colonial Center to Regional Hub
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Juana Díaz, a municipality in Puerto Rico’s western region, is a microcosm of the island’s broader historical trajectory.
          From its pre-colonial roots through Spanish colonial settlement, the rise of a distinctive downtown, and subsequent outward expansion,
          Juana Díaz illustrates how small towns adapt to changing political, economic, and social forces while preserving a tangible cultural heritage.
        </p>
      </header>

      {/* 1. Pre-Colonial Foundations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">1. Pre-Colonial Foundations</h2>
        <Image
          src="https://images.unsplash.com/photo-1584704707958-d2bbd1e5f3c1?auto=format&fit=crop&w=1600&q=80"
          alt="Archaeological Taíno site in Puerto Rico"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
        <p>
          Long before the arrival of Europeans, the area that would become Juana Díaz was inhabited by the Taíno, an indigenous people
          who organized themselves into cacicazgos (chiefdoms). Archaeological evidence, such as the stone tools and ceremonial
          petroglyphs found in the surrounding hills, attests to a settled community engaged in fishing, horticulture, and trade.
          The Taíno called the region “Yaguana” (a reference to the local yucca plants), and it became a hub for exchange between the
          western and central parts of the island. With the Spanish conquest in the late 15th century, the Taíno population was
          decimated by disease and forced labor, but their cultural imprint persisted in place names and subsistence patterns that the
          Spanish would later exploit.
        </p>
      </section>

      {/* 2. Spanish Colonial Settlement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">2. Spanish Colonial Settlement (1783-1891)</h2>
        <Image
          src="https://images.unsplash.com/photo-1526672260238-4b1a0f0c9c8d?auto=format&fit=crop&w=1600&q=80"
          alt="Historic colonial church in Puerto Rico"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
        <p>
          The formal establishment of Juana Díaz occurred during the reign of King Charles III. In 1783, the Spanish Crown issued a
          decree creating the “Villa de San Pedro de la Cueva,” a settlement intended to populate the western interior and secure
          Spanish authority against potential uprisings. The name reflected both religious devotion (“San Pedro”) and geographic
          characteristics (“de la Cueva,” referring to the karstic caves that dot the region).
        </p>
        <p>
          In 1795, a Spanish Catholic priest named Juan de Dios acquired the land and established a hacienda that became the nucleus of
          the town. He invested in irrigation, cultivated coffee and sugar cane, and constructed a modest chapel. The town’s residents,
          many of whom were Spanish immigrants and African-descended laborers, began to identify the settlement with the priest’s name.
          Over time, “San Pedro de la Cueva” evolved into the colloquial “Juana Díaz,” a feminized form that honored the patronage of
          the local Catholic parish and reflected Spanish naming conventions for places. By 1834, the municipality was recognized as a
          “Villa” and had a municipal council, the first step toward local governance.
        </p>
        <p>
          The 19th century saw Juana Díaz flourish as part of the island’s agricultural belt. Coffee plantations thrived, especially
          during the 1840s coffee boom, and the town’s port on the Río Tamarindo facilitated export to the United States and Europe.
          The growth of the town’s economy fostered a vibrant downtown with colonial façades, stone arches, and the iconic Church of
          San Juan Bautista, completed in 1847. The town’s layout mirrored European grid patterns, with a central plaza surrounded by
          civic buildings—an archetype of Puerto Rican colonial urbanism.
        </p>
        <p>
          In 1891, Juana Díaz was officially separated from the larger municipality of San Germán and granted full municipal status by
          the Spanish Crown, a process completed just before the Spanish–American War. This designation cemented its political autonomy
          and laid the groundwork for its transition to U.S. administration following the 1898 Treaty of Paris.
        </p>
      </section>

      {/* 3. The Downtown */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">
          3. The Downtown: Colonial Center and Cultural Heart
        </h2>
        <Image
          src="https://images.unsplash.com/photo-1562607444-bd6a4c6a3a0b?auto=format&fit=crop&w=1600&q=80"
          alt="Downtown Juana Díaz Plaza de la Constitución"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
        <p>
          The downtown area, or “Barrio Pueblo,” remains the most visible representation of Juana Díaz’s colonial past. The central
          square—Plaza de la Constitución—serves as a communal gathering place, surrounded by historic structures:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Parroquia San Juan Bautista:</strong> Constructed in the neoclassical style, the church’s bell tower is a dominant
            feature of the skyline. Its 1847 foundation reflects the religious zeal that sustained the community.
          </li>
          <li>
            <strong>Casa de Gobierno:</strong> The seat of municipal government occupies a former Spanish colonial administrative
            building, showcasing intricate wrought-iron balconies and a façade that blends Baroque and Neoclassical motifs.
          </li>
          <li>
            <strong>Museo de la Cueva:</strong> Housed in a preserved 18th-century hacienda, the museum displays artifacts from
            pre-colonial Taíno culture, colonial agricultural tools, and documents chronicling the town’s founding.
          </li>
        </ul>
        <p>
          Streets in the downtown are narrow and paved with stone, giving them a “paseo” feel reminiscent of old Spanish towns. The
          area’s commercial life revolves around cafés, bakeries, and artisan shops that sell local crafts, such as mosaicos
          (hand-painted tiles) and tijeras de la montaña (wooden knives). The downtown also hosts annual cultural festivals, most
          notably the Fiestas Patronales in honor of San Juan Bautista, featuring processions, folk music, and gastronomic specialties
          like mofongo con alcaparras.
        </p>
      </section>

      {/* 4. Expanding Outward */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">
          4. Expanding Outward: Barrios, Agriculture, and Modernization
        </h2>
        <Image
          src="https://images.unsplash.com/photo-1586015555751-63f9f733d4f1?auto=format&fit=crop&w=1600&q=80"
          alt="Juana Díaz coffee plantation"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
        <p>
          Beyond the historic downtown lies a mosaic of barrios—administrative districts that reflect both geographic diversity and
          social stratification. Key barrios include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Santa Rosa:</strong> Known for its coffee plantations and “Café de la Montaña,” a small-scale producer that gained
            national acclaim for its organic methods.
          </li>
          <li>
            <strong>Los Caimanes:</strong> A peri-urban area that experienced rapid residential development in the late 20th century,
            reflecting migration patterns toward the western corridor.
          </li>
          <li>
            <strong>Caguas (North):</strong> An agricultural heartland that historically produced sugar cane, now transitioning toward
            diversified crops such as cacao and pineapples.
          </li>
        </ul>
        <p>
          The municipality’s geographic location—nestled in the central highlands—has fostered a climate conducive to specialty crops.
          In the early 20th century, Juana Díaz was a leading producer of coffee and cacao, which provided employment for a largely
          agrarian population. The 1940s and 1950s brought an economic pivot: Operation Bootstrap introduced industrial manufacturing
          across Puerto Rico, causing rural depopulation. Many residents of Juana Díaz migrated to the San Juan metropolitan area for
          factory jobs, sending remittances back that funded local development.
        </p>
        <p>
          The late 20th century witnessed a renaissance in agro-tourism. The municipality capitalized on its rural charm by promoting
          “Ruta del Vino” and “Ruta del Café.” Vineyards such as Viñedos de la Cueva produced boutique wines, while coffee tours
          highlighted sustainable farming practices. In 1995, the municipality established the Centro de Artesanía to preserve
          traditional crafts and provide income for local artisans.
        </p>
      </section>

      {/* 5. Modern Era */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">
          5. Modern Era: Infrastructure, Culture, and Identity
        </h2>
        <Image
          src="https://images.unsplash.com/photo-1499339557489-2b7c3e6c5c2b?auto=format&fit=crop&w=1600&q=80"
          alt="Highway and cultural modern Juana Díaz"
          width={1200}
          height={600}
          className="rounded-lg shadow-md"
        />
        <p>
          In the 21st century, Juana Díaz has balanced modernization with heritage preservation. The construction of the High-Speed
          Highway 101 has improved connectivity with San Juan and Ponce, stimulating commerce and tourism. Public schools incorporate
          curricula that emphasize the municipality’s Taíno heritage and colonial history, ensuring that younger generations appreciate
          their roots.
        </p>
        <p>
          The municipality’s demographic profile has shifted. According to the 2010 census, Juana Díaz had a population of approximately
          27,000, a decline from its peak of 33,000 in the 1950s. Yet, the density remains higher in the downtown area (about 2,800
          inhabitants per square kilometer) than in peripheral barrios, reflecting ongoing urbanization.
        </p>
        <p>
          Culturally, Juana Díaz maintains a vibrant arts scene. The Festival de la Luz (Festival of Light) showcases contemporary art
          installations in historic buildings, while the Concurso de Canto Popular (Folk Singing Contest) highlights regional musical
          traditions. Moreover, the municipality has become a center for ecotourism, with guided tours of the Cueva de la Loma and
          hiking trails that highlight the karst topography.
        </p>
      </section>

      {/* 6. Conclusion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">
          6. Conclusion: Juana Díaz as a Living Historical Narrative
        </h2>
        <p>
          Juana Díaz exemplifies the dynamic interplay between past and present. Its downtown preserves the architectural language of
          the colonial era, while its barrios illustrate adaptive strategies in response to economic and environmental shifts. The
          municipality’s history—from Taíno settlement to Spanish hacienda, from U.S. colonial administration to contemporary autonomy—
          offers rich insights into Puerto Rico’s broader narrative of resilience and reinvention.
        </p>
        <p>
          As Juana Díaz continues to develop—embracing sustainable tourism, modern infrastructure, and cultural festivals—it remains a
          living repository of Puerto Rico’s layered history. Visitors, scholars, and residents alike can trace the threads of time in
          its plazas, churches, and hills, witnessing how a small municipality preserves its identity while forging ahead into the
          future.
        </p>
      </section>

      {/* 7. Suggested Visuals */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">
          7. Suggested Visuals (replace the Unsplash URLs when you have your own)
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Pre-colonial Taíno site:</strong> “Archaeological Taíno site” – rocks & petroglyphs.
          </li>
          <li>
            <strong>Spanish colonial settlement:</strong> “Historic colonial church” – the stone façade of the original church.
          </li>
          <li>
            <strong>Downtown plaza:</strong> “Historic downtown plaza” – the central square with colonial façades.
          </li>
          <li>
            <strong>Coffee plantation:</strong> “Coffee plantation in Juana Díaz” – rows of mature coffee bushes.
          </li>
          <li>
            <strong>Cave exploration:</strong> “Cave exploration” – karst topography inside Cueva de la Loma.
          </li>
        </ul>
      </section>
    </main>
  );
}
