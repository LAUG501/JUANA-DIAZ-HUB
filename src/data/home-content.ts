const homeContent = {
  en: {
    hero: {
      eyebrow: "Community-first platform",
      title: "Juana Díaz Hub",
      description:
        "Your digital plaza for stories, business connections, cultural heritage, and civic action across Juana Díaz and the south coast of Puerto Rico.",
      primaryAction: { label: "Explore the directory", href: "/directory" },
      secondaryAction: { label: "See what's happening", href: "/event-calendar" },
      stats: [
        { value: "250+", label: "Local businesses highlighted" },
        { value: "365", label: "Annual cultural & civic events tracked" },
        { value: "8", label: "Neighborhood spotlights with bilingual stories" },
      ],
    },
    highlights: {
      eyebrow: "Start here",
      title: "Plan your next move in Juana Díaz",
      description:
        "Explore curated directories, event calendars, and storytelling hubs designed to keep residents, visitors, and the diaspora connected.",
      cards: [
        {
          title: "Community directory",
          description: "Browse verified businesses, non-profits, and creative studios ready to collaborate.",
          imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/directory",
        },
        {
          title: "Events calendar",
          description: "Track cultural festivals, civic meetings, and learning labs happening every week.",
          imageUrl: "https://images.pexels.com/photos/2901205/pexels-photo-2901205.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/event-calendar",
        },
        {
          title: "Local stories",
          description: "Discover voices from across Juana Díaz sharing triumphs, traditions, and fresh ideas.",
          imageUrl: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/local-stories",
        },
      ],
    },
    journeys: {
      eyebrow: "One hub, many journeys",
      title: "Connect with the programs that fit you",
      description:
        "Whether you are launching a business, planning a festival, or checking on loved ones after a storm, Juana Díaz Hub centralizes trustworthy information and warm community support.",
      stats: [
        { value: "250+", label: "Verified businesses" },
        { value: "365", label: "Annual events tracked" },
        { value: "140", label: "Mentors supporting residents" },
        { value: "5K", label: "Forum participants" },
      ],
      ctas: [
        { label: "Join the community forum", href: "/forum", variant: "primary" as const },
        { label: "Review safety resources", href: "/safety", variant: "secondary" as const },
      ],
    },
    deepDive: {
      eyebrow: "Keep going",
      title: "Deepen your impact",
      description: "Take advantage of mentorship, workshops, and volunteer opportunities that keep the town thriving.",
      cards: [
        {
          title: "Guides & toolkits",
          description: "Step-by-step resources for launching projects, hosting events, and caring for neighbors.",
          imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/guides",
        },
        {
          title: "Learning hub",
          description: "Micro-courses and workshops designed with local educators and mentors.",
          imageUrl: "https://images.pexels.com/photos/414379/pexels-photo-414379.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/learning-hub",
        },
        {
          title: "Volunteer network",
          description: "Sign up for cultural festivals, safety teams, and mutual aid efforts.",
          imageUrl: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/volunteer",
        },
      ],
    },
    newsletter: {
      eyebrow: "Stay in the loop",
      title: "Weekly highlights delivered to you",
      description: "Receive bilingual recaps of new events, business openings, scholarships, and safety alerts every Thursday.",
      placeholder: "you@email.com",
      cta: "Subscribe",
    },
    map: {
      eyebrow: "Plan your visit",
      title: "Getting here",
      description: "Map your trip from anywhere on the island. Driving, public transit, or walking—choose what works best for you.",
      originPlaceholder: "Enter your starting point (e.g., Ponce, PR)",
      buttonLabel: "Get directions",
      fromLabel: "From",
      quickLinks: [
        { label: "San Juan", origin: "San%20Juan%2C%20PR" },
        { label: "Mayagüez", origin: "Mayaguez%2C%20PR" },
        { label: "Ponce", origin: "Ponce%2C%20PR" },
        { label: "Fajardo", origin: "Fajardo%2C%20PR" },
      ],
    },
    cardCta: "Learn more →",
  },
  es: {
    hero: {
      eyebrow: "Plataforma centrada en la comunidad",
      title: "Juana Díaz Hub",
      description:
        "Tu plaza digital para historias, conexiones de negocios, patrimonio cultural y acción cívica en Juana Díaz y toda la costa sur de Puerto Rico.",
      primaryAction: { label: "Explora el directorio", href: "/directory" },
      secondaryAction: { label: "Mira lo que sucede", href: "/event-calendar" },
      stats: [
        { value: "250+", label: "Negocios locales destacados" },
        { value: "365", label: "Eventos culturales y cívicos al año" },
        { value: "8", label: "Barrios con historias bilingües" },
      ],
    },
    highlights: {
      eyebrow: "Empieza aquí",
      title: "Planifica tu próximo paso en Juana Díaz",
      description:
        "Explora directorios, calendarios y relatos diseñados para conectar a residentes, visitantes y la diáspora.",
      cards: [
        {
          title: "Directorio comunitario",
          description: "Descubre negocios, organizaciones y estudios creativos listos para colaborar.",
          imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/directory",
        },
        {
          title: "Calendario de eventos",
          description: "Monitorea festivales culturales, reuniones cívicas y laboratorios de aprendizaje semanales.",
          imageUrl: "https://images.pexels.com/photos/2901205/pexels-photo-2901205.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/event-calendar",
        },
        {
          title: "Historias locales",
          description: "Descubre voces de toda Juana Díaz compartiendo triunfos, tradiciones e ideas frescas.",
          imageUrl: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/local-stories",
        },
      ],
    },
    journeys: {
      eyebrow: "Un solo hub, muchas rutas",
      title: "Conecta con los programas ideales para ti",
      description:
        "Ya sea que lances un negocio, organices un festival o verifiques a tus seres queridos tras una tormenta, Juana Díaz Hub centraliza información confiable y apoyo comunitario.",
      stats: [
        { value: "250+", label: "Negocios verificados" },
        { value: "365", label: "Eventos rastreados al año" },
        { value: "140", label: "Mentores acompañando a residentes" },
        { value: "5K", label: "Participantes en el foro" },
      ],
      ctas: [
        { label: "Únete al foro comunitario", href: "/forum", variant: "primary" as const },
        { label: "Revisa recursos de seguridad", href: "/safety", variant: "secondary" as const },
      ],
    },
    deepDive: {
      eyebrow: "Sigue explorando",
      title: "Profundiza tu impacto",
      description: "Aprovecha mentorías, talleres y voluntariado que mantienen a la ciudad vibrante.",
      cards: [
        {
          title: "Guías y herramientas",
          description: "Recursos paso a paso para lanzar proyectos, organizar eventos y cuidar a tus vecinos.",
          imageUrl: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/guides",
        },
        {
          title: "Centro de aprendizaje",
          description: "Microcursos y talleres con educadores y mentores locales.",
          imageUrl: "https://images.pexels.com/photos/414379/pexels-photo-414379.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/learning-hub",
        },
        {
          title: "Red de voluntariado",
          description: "Regístrate para festivales culturales, brigadas de seguridad y redes de apoyo.",
          imageUrl: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1",
          href: "/volunteer",
        },
      ],
    },
    newsletter: {
      eyebrow: "Mantente al día",
      title: "Recibe lo nuevo cada semana",
      description: "Obtén resúmenes bilingües de eventos, aperturas, becas y avisos de seguridad todos los jueves.",
      placeholder: "tucorreo@email.com",
      cta: "Suscribirme",
    },
    map: {
      eyebrow: "Planifica tu visita",
      title: "Cómo llegar",
      description: "Traza tu ruta desde cualquier punto de la isla. En auto, transporte público o a pie: tú decides.",
      originPlaceholder: "Escribe tu punto de partida (ej. Ponce, PR)",
      buttonLabel: "Obtener ruta",
      fromLabel: "Desde",
      quickLinks: [
        { label: "San Juan", origin: "San%20Juan%2C%20PR" },
        { label: "Mayagüez", origin: "Mayaguez%2C%20PR" },
        { label: "Ponce", origin: "Ponce%2C%20PR" },
        { label: "Fajardo", origin: "Fajardo%2C%20PR" },
      ],
    },
    cardCta: "Más información →",
  },
} as const;

export type HomeContent = typeof homeContent;

export default homeContent;
