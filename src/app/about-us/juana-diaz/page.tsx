import Image from "next/image";

const historicalSections = [
  {
    title: "1. Pre-Colonial Foundations",
    image: {
      src: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
      alt: "Archaeological stones from a Taíno site in Puerto Rico",
    },
    paragraphs: [
      "Long before the arrival of Europeans, the area that would become Juana Díaz was inhabited by the Taíno, an indigenous people who organized themselves into cacicazgos (chiefdoms).",
      "Archaeological evidence, such as stone tools and ceremonial petroglyphs found in the surrounding hills, attests to a settled community engaged in fishing, horticulture, and trade. The Taíno called the region “Yaguana,” a nod to the yucca plants that thrived there, making it a hub for exchange between western and central Puerto Rico.",
      "With the Spanish conquest in the late 15th century, the Taíno population was decimated by disease and forced labor, yet their cultural imprint persisted in place names and subsistence patterns that Spanish settlers later adopted.",
    ],
  },
  {
    title: "2. Spanish Colonial Settlement (1783-1891)",
    image: {
      src: "https://images.pexels.com/photos/2087843/pexels-photo-2087843.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
      alt: "Historic colonial church façade in Puerto Rico",
    },
    paragraphs: [
      "The formal establishment of Juana Díaz occurred during the reign of King Charles III. In 1783, the Spanish Crown issued a decree creating the “Villa de San Pedro de la Cueva,” intended to populate the western interior and secure authority against uprisings.",
      "In 1795, a Spanish Catholic priest named Juan de Dios acquired the land and established a hacienda that became the nucleus of the town. He invested in irrigation, cultivated coffee and sugar cane, and constructed a modest chapel. Residents—Spanish immigrants and African-descended laborers—began to identify the settlement with the priest’s name.",
      "By 1834, the municipality was recognized as a “Villa” with a municipal council. The 19th century saw Juana Díaz flourish within Puerto Rico’s agricultural belt, particularly during the coffee boom of the 1840s. Exports flowed through the Río Tamarindo, fostering a vibrant downtown with colonial façades, stone arches, and the iconic Church of San Juan Bautista completed in 1847.",
      "In 1891, Juana Díaz was officially separated from San Germán and granted full municipal status by the Spanish Crown, just before the Spanish–American War. This designation cemented its political autonomy and prepared the transition to U.S. administration after the 1898 Treaty of Paris.",
    ],
  },
  {
    title: "3. The Downtown: Colonial Center and Cultural Heart",
    image: {
      src: "https://images.pexels.com/photos/1545510/pexels-photo-1545510.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
      alt: "Downtown plaza with historic buildings",
    },
    paragraphs: [
      "The downtown area, or Barrio Pueblo, remains the most visible representation of Juana Díaz’s colonial past. Plaza de la Constitución serves as a communal gathering place, surrounded by historic structures.",
    ],
    bullets: [
      "Parroquia San Juan Bautista: A neoclassical church whose bell tower dominates the skyline, reflecting the religious zeal that sustained the community.",
      "Casa de Gobierno: The municipal seat inside a former colonial administrative building with wrought-iron balconies blending Baroque and Neoclassical motifs.",
      "Museo de la Cueva: A preserved 18th-century hacienda showcasing Taíno artifacts, colonial agricultural tools, and documents chronicling the town’s founding.",
    ],
    paragraphsAfterBullets: [
      "Streets in the downtown are narrow and paved with stone, giving them a paseo feel reminiscent of old Spanish towns. Cafés, bakeries, and artisan shops sell local crafts such as mosaicos and tijeras de la montaña. Annual cultural festivals—most notably the Fiestas Patronales honoring San Juan Bautista—fill the square with processions, folk music, and gastronomic specialties like mofongo con alcaparras.",
    ],
  },
  {
    title: "4. Expanding Outward: Barrios, Agriculture, and Modernization",
    image: {
      src: "https://images.pexels.com/photos/2603681/pexels-photo-2603681.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
      alt: "Coffee plantation overlooking Puerto Rico's mountains",
    },
    paragraphs: [
      "Beyond the historic downtown lies a mosaic of barrios that reflect geographic diversity and social stratification. Key barrios include Santa Rosa, known for its coffee plantations; Los Caimanes, which experienced rapid residential development in the late 20th century; and Caguas (North), transitioning from sugar cane to diversified crops such as cacao and pineapples.",
      "The municipality’s location within the central highlands fostered specialty crops. In the early 20th century, Juana Díaz led coffee and cacao production, employing a largely agrarian population. The 1940s and 1950s introduced Operation Bootstrap’s industrial push, prompting migration toward the San Juan metropolitan area and remittances that funded local development.",
      "The late 20th century witnessed a renaissance in agro-tourism. The municipality promoted routes such as “Ruta del Vino” and “Ruta del Café,” highlighting sustainable farming practices and artisan crafts at the Centro de Artesanía established in 1995.",
    ],
  },
  {
    title: "5. Modern Era: Infrastructure, Culture, and Identity",
    image: {
      src: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
      alt: "Modern bridge and infrastructure in Puerto Rico",
    },
    paragraphs: [
      "In the 21st century, Juana Díaz has balanced modernization with heritage preservation. The construction of Highway 101 improved connectivity with San Juan and Ponce, stimulating commerce and tourism.",
      "Public schools emphasize Taíno heritage and colonial history, ensuring younger generations appreciate their roots. Demographically, the population shifted from a peak of 33,000 in the 1950s to approximately 27,000 by 2010, with higher density downtown than in peripheral barrios.",
      "Cultural life remains vibrant. The Festival de la Luz showcases contemporary art installations in historic buildings, while the Concurso de Canto Popular highlights regional musical traditions. Juana Díaz also champions ecotourism through guided tours of Cueva de la Loma and hikes that reveal the karst topography.",
    ],
  },
  {
    title: "6. Conclusion: Juana Díaz as a Living Historical Narrative",
    paragraphs: [
      "Juana Díaz exemplifies the dynamic interplay between past and present. Its downtown preserves the architectural language of the colonial era, while its barrios illustrate adaptive strategies responding to economic and environmental shifts.",
      "As the municipality embraces sustainable tourism, modern infrastructure, and cultural festivals, it remains a living repository of Puerto Rico’s layered history—inviting visitors, scholars, and residents to trace the threads of time across plazas, churches, and hills.",
    ],
  },
];

const visualHighlights = [
  "Pre-colonial Taíno site: Archaeological rocks and petroglyphs.",
  "Spanish colonial settlement: Stone façade of the original church.",
  "Downtown plaza: Historic square with colonial façades.",
  "Coffee plantation: Rows of coffee bushes in the highlands.",
  "Cave exploration: Karst formations inside Cueva de la Loma.",
];

export default function JuanaDiazAbout() {
  return (
    <article className="space-y-12">
      <section className="surface space-y-5 text-center md:text-left">
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
          The Historical Evolution of Juana Díaz, Puerto Rico
        </h1>
        <p className="muted mx-auto max-w-3xl md:mx-0">
          From pre-colonial Yaguana to a regional hub balancing modernization and heritage, Juana Díaz offers a window into Puerto Rico’s resilience and reinvention.
        </p>
        <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Juana Díaz, a municipality in Puerto Rico’s western region, is a microcosm of the island’s broader historical trajectory. From its pre-colonial roots through Spanish settlement, the rise of a distinctive downtown, and subsequent outward expansion, the town illustrates how communities adapt to changing political, economic, and social forces while preserving a tangible cultural heritage.
          </p>
          <p>
            The narrative of Juana Díaz is marked by resilience: Taíno legacies still present in place names, colonial architecture framing plazas, agro-industrial pivots powering livelihoods, and modern cultural festivals activating every barrio. This timeline honors that continuity while highlighting the moments that shaped today’s thriving municipality.
          </p>
        </div>
      </section>

      {historicalSections.map((section) => (
        <section key={section.title} className="surface space-y-5">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{section.title}</h2>
          {section.image ? (
            <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-md md:h-96">
              <Image src={section.image.src} alt={section.image.alt} fill className="object-cover" sizes="100vw" />
            </div>
          ) : null}
          <div className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2 text-base text-slate-700 marker:text-primary dark:text-slate-300 dark:marker:text-secondary">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-secondary" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.paragraphsAfterBullets?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="surface space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Important facts you should know.</h2>
        <ul className="space-y-2 text-base text-slate-700 marker:text-primary dark:text-slate-300 dark:marker:text-secondary">
          {visualHighlights.map((fact) => (
            <li key={fact} className="flex items-start gap-2">
              <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-primary dark:bg-secondary" aria-hidden="true" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
