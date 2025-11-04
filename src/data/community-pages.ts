import { CommunityPageContent } from "../components/CommunityPageTemplate";

export const communityPages: Record<string, CommunityPageContent> = {
  explore: {
    hero: {
      eyebrow: "Discover",
      title: "Explore Juana Díaz like a local",
      description:
        "Plan memorable days across coastal boardwalks, mountain coffee routes, and artistic barrios with curated experiences for every type of traveler.",
      image: {
        src: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa7?auto=format&fit=crop&w=1200&q=80",
        alt: "Colorful buildings in Puerto Rico",
      },
      stats: [
        { value: "12", label: "Neighborhood itineraries" },
        { value: "45+", label: "Curated food stops" },
        { value: "18", label: "Outdoor adventures" },
      ],
      actions: [
        { label: "Download walking map", href: "/guides" },
        { label: "Featured storytellers", href: "/local-stories", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Curated paths",
        title: "Choose your perfect day",
        description: "Follow themed itineraries tailored for foodies, families, history buffs, and eco explorers.",
        items: [
          {
            title: "Heritage & plazas",
            description: "Start in Plaza Román Baldorioty, tour artisan studios, then end with live plena under the stars.",
            badge: "Morning",
          },
          {
            title: "Coastal breeze",
            description: "Bike the Jacaguas River trail, enjoy ceviche along the boardwalk, and join sunset drum circles at La Playita.",
            badge: "Active",
          },
          {
            title: "Coffee countryside",
            description: "Visit haciendas in Guayabal, sample small-batch roasts, and picnic under flamboyán trees.",
            badge: "Getaway",
          },
          {
            title: "Creative circuit",
            description: "Tour mural alleys in Río Cañas, meet printmakers, and close with a gallery crawl downtown.",
            badge: "Arts",
          },
          {
            title: "Family fun",
            description: "Hands-on science at Casa Museo, kid-friendly hikes at Lago Cerrillos, and helado stops every few blocks.",
            badge: "Families",
          },
          {
            title: "Night glow",
            description: "From rooftop mocktails to bomba dance sessions, we mapped late-night vibes that stay welcoming and safe.",
            badge: "After dark",
          },
        ],
      },
      {
        eyebrow: "Planning tools",
        title: "Practical tips before you go",
        description: "Pack smarter and stay in sync with local customs, transit, and safety updates.",
        bullets: [
          "Average temps range from 75°-88°F — hydrate and pack layers for mountain drives.",
          "Publicos (shared vans) connect barrios hourly; exact pickup points inside our transit mini-guide.",
          "Dress codes are relaxed, yet churches and heritage sites welcome covered shoulders.",
          "Hurricane season runs June-November. Opt-in to weather alerts for bilingual notifications.",
        ],
        cta: { label: "Open travel tips", href: "/travel-tips" },
      },
    ],
    spotlight: {
      title: "Local voice",
      quote: "When visitors wander with intention, they find the heartbeat of our town — slow conversations, music, and respect for the land.",
      author: "Carla Martínez",
      role: "Community guide & historian",
    },
    resources: [
      { title: "Cultural calendar", description: "Track festivals, parades, and live art pop-ups year-round.", href: "/event-calendar" },
      { title: "Local dining map", description: "Filter by vegan, kid-friendly, or late-night kitchens.", href: "/directory" },
    ],
  },
  nightlife: {
    hero: {
      eyebrow: "Nightlife",
      title: "Evenings that feel like celebration",
      description:
        "From vintage salones to modern cocktail labs, plan a safe and vibrant night out with verified venues and rotating live music.",
      image: {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        alt: "Live music stage with neon lights",
      },
      actions: [
        { label: "Check tonight's events", href: "/this-week" },
        { label: "View safety partner bars", href: "/safety", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Venues",
        title: "Curated picks by vibe",
        description: "We visit each spot quarterly to confirm programming, accessibility, and bilingual service.",
        items: [
          {
            title: "La Azotea",
            description: "Rooftop with craft mocktails, DJ residencies, and rotating visual art installations.",
            badge: "Rooftop",
          },
          {
            title: "Casa del Bembé",
            description: "Intimate bomba and plena stage where elders lead percussion workshops before the show.",
            badge: "Live music",
          },
          {
            title: "Ruta 149 Beer Garden",
            description: "Open-air taps, food trucks, and trivia nights supporting local non-profits.",
            badge: "Social",
          },
          {
            title: "Marullo Lounge",
            description: "Neo-Caribbean cocktails with a weekly vinyl listening club and poetry readings.",
            badge: "Cocktails",
          },
          {
            title: "El Faro After Dark",
            description: "Late-night coffeehouse with co-working pods and acoustic sets until midnight.",
            badge: "Hybrid",
          },
          {
            title: "Tambores en la Plaza",
            description: "Seasonal outdoor gatherings that blend dance circles, artisan markets, and food kiosks.",
            badge: "Pop-up",
          },
        ],
      },
      {
        eyebrow: "Stay safe",
        title: "Comfort-first guidance",
        description: "Partner venues commit to published safety standards and inclusive hospitality.",
        bullets: [
          "Verified security staff trained in de-escalation and crisis response.",
          "Dedicated rideshare pickup zones mapped inside the app.",
          "QR codes at each venue for reporting concerns anonymously.",
          "Night Owl text line active Thursday-Sunday 6pm-2am.",
        ],
        cta: { label: "Review our safety playbook", href: "/safety" },
      },
    ],
    resources: [
      { title: "Volunteer as a Safe Night Ambassador", description: "Support nightlife goers with hydration stations and check-ins.", href: "/volunteer" },
      { title: "Host your event", description: "Submit a venue proposal and access marketing toolkits.", href: "/public-notices" },
    ],
  },
  culture: {
    hero: {
      eyebrow: "Culture",
      title: "Celebrate our living traditions",
      description:
        "Museums, folkloric troupes, culinary collectives, and storytellers keep the spirit of Juana Díaz alive. Explore their work and get involved.",
      image: {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        alt: "Performer in traditional attire",
      },
      stats: [
        { value: "9", label: "Annual cultural festivals" },
        { value: "27", label: "Arts collectives showcased" },
        { value: "5", label: "Youth heritage programs" },
      ],
      actions: [
        { label: "View the cultural calendar", href: "/event-calendar" },
        { label: "Read local stories", href: "/local-stories", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Highlights",
        title: "Spaces safeguarding identity",
        description: "Visit, volunteer, or donate to keep intergenerational knowledge flourishing.",
        items: [
          {
            title: "Museo Casa Canales",
            description: "Interactive exhibits on the Three Kings Festival with artisan mask workshops every Saturday.",
            badge: "Museum",
          },
          {
            title: "Colectiva Matria",
            description: "Women-led arts incubator supporting muralists, printmakers, and digital storytellers.",
            badge: "Collective",
          },
          {
            title: "Escuela de Bomba Doña Isabel",
            description: "After-school classes pairing dance, percussion, and oral history for all ages.",
            badge: "Academy",
          },
          {
            title: "Mercado Artesanal",
            description: "Monthly market uplifting woodworkers, jewellers, and culinary artisans with live demos.",
            badge: "Market",
          },
        ],
      },
      {
        eyebrow: "Keep learning",
        title: "Culture is collective work",
        description: "Explore guides and programs that invite residents and visitors to participate respectfully.",
        bullets: [
          "Download pronunciation guides for barrio names and traditional foods.",
          "Support the Heritage Fund—microgrants for young artists documenting neighborhood stories.",
          "Sign up for culinary residencies celebrating Afro-Boricua recipes.",
          "Attend monthly cultural governance forums hosted with the municipality.",
        ],
        cta: { label: "Explore learning hub", href: "/learning-hub" },
      },
    ],
    spotlight: {
      quote: "Every performance is a conversation with our elders and our future. Thank you for showing up ready to listen.",
      author: "Daniela Cruz",
      role: "Director, Escuela de Bomba Doña Isabel",
    },
  },
  directory: {
    hero: {
      eyebrow: "Directory",
      title: "Find the people powering Juana Díaz",
      description:
        "Search small businesses, community organizations, health providers, and creative studios verified by our team.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Coworkers collaborating",
      },
      stats: [
        { value: "250+", label: "Active listings" },
        { value: "92%", label: "Owner-verified profiles" },
        { value: "38", label: "Sector filters" },
      ],
      actions: [
        { label: "Submit your listing", href: "/contact" },
        { label: "Download media kit", href: "/guides", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Browse",
        title: "Sector spotlights",
        description: "Jump into curated categories or search by need, language, accessibility, or sustainability badges.",
        items: [
          { title: "Food & beverage", description: "Farm-to-table eateries, coffee roasters, and late-night bites committed to local sourcing." },
          { title: "Health & wellness", description: "Clinics, mobile care units, mental health practitioners, and emergency resources." },
          { title: "Creative economy", description: "Design studios, recording spaces, artisan cooperatives, and cultural consultants." },
          { title: "Civic & social", description: "Non-profits, advocacy groups, and volunteer collectives with open meeting schedules." },
          { title: "Education", description: "Tutors, language academies, after-school programs, and scholarship advisors." },
          { title: "Outdoors & tours", description: "Guides, eco-operators, and sporting clubs offering nature-forward experiences." },
        ],
      },
      {
        eyebrow: "Owner tools",
        title: "Grow with the hub",
        description: "Claim your page to unlock analytics, reviews, and bilingual marketing assets.",
        bullets: [
          "Audience insights updated weekly with visitor demographics and top searches.",
          "Request a photo session or translation support from our volunteer creative corps.",
          "Badge program for accessibility, sustainability, and youth employment commitments.",
          "Dedicated slack for peer-to-peer advice and procurement leads.",
        ],
        cta: { label: "Sign in to manage your profile", href: "/login" },
      },
    ],
    resources: [
      { title: "Business incentives", description: "Grants, tax credits, and co-op support in partnership with PRIDCO.", href: "/career" },
      { title: "Mentorship network", description: "Pair with experienced founders and municipal advisors.", href: "/mentorship" },
    ],
  },
  "directory/local-businesses": {
    hero: {
      eyebrow: "Local business network",
      title: "Shop and dine with hometown pride",
      description:
        "Support family-owned cafés, markets, and makers who reinvest in our neighborhoods every day.",
      image: {
        src: "https://images.unsplash.com/photo-1529429617124-aee7c01a0392?auto=format&fit=crop&w=1200&q=80",
        alt: "Barista preparing coffee in a cozy café",
      },
      stats: [
        { value: "180+", label: "Independent vendors" },
        { value: "62", label: "Weekly specials tracked" },
        { value: "28", label: "Accessible storefronts" },
      ],
      actions: [
        { label: "Browse the full directory", href: "/directory" },
        { label: "Submit a business", href: "/contact", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Featured routes",
        title: "Spend a day supporting local",
        description:
          "Follow curated trails to uncover breakfast spots, craft ateliers, and evening hangouts run by neighbors.",
        items: [
          {
            title: "Sunrise brews",
            description: "Start at Plaza Café for café con leche, then stroll to Panadería Las Americas for warm mallorcas.",
            badge: "Morning",
          },
          {
            title: "Artisan marketplace",
            description: "Discover handmade jewelry, plant nurseries, and bookshops lining Calle Comercio.",
            badge: "Afternoon",
          },
          {
            title: "Night bites",
            description: "Wrap up with tapas at Casa Bembé and late-night helados from Heladería San Ramón.",
            badge: "Evening",
          },
          {
            title: "Family favorites",
            description: "Find kid-approved menus, stroller friendly spaces, and bilingual staff ready to help.",
            badge: "Families",
          },
          {
            title: "Made in Juana Díaz",
            description: "Tour micro-factories producing coffee, soaps, and textiles using sustainable methods.",
            badge: "Makers",
          },
          {
            title: "Accessible adventures",
            description: "See venues with ramps, large print menus, and sensory-friendly hours.",
            badge: "Inclusive",
          },
        ],
      },
      {
        eyebrow: "Business services",
        title: "Resources for owners",
        bullets: [
          "Download bilingual signage templates to promote safe gatherings and mask-friendly zones.",
          "Tap into mentorship circles pairing veteran owners with start-up founders.",
          "Claim your spot in our monthly Mercado Artesanal pop-up to demo products.",
          "Access micro-grant applications for storefront upgrades and façade lighting.",
        ],
        cta: { label: "Visit the mentorship hub", href: "/mentorship" },
      },
    ],
    spotlight: {
      title: "Owner spotlight",
      quote:
        "Every purchase at a local shop keeps stories, recipes, and youth jobs alive. Thank you for choosing community first.",
      author: "Elena Santiago",
      role: "Owner, La Plaza Café",
    },
    resources: [
      {
        title: "Upcoming business workshops",
        description: "Digital tools, merchandising, and cooperative finance sessions.",
        href: "/workshops",
      },
      {
        title: "Apply for the storefront grant",
        description: "Micro-funding to refresh signage, lighting, and accessibility ramps.",
        href: "/public-notices",
      },
    ],
  },
  "directory/organizations": {
    hero: {
      eyebrow: "Community organizations",
      title: "Meet the teams powering Juana Díaz",
      description:
        "Non-profits, neighborhood associations, and cultural brigades collaborating to uplift every barrio.",
      image: {
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
        alt: "Volunteers organizing community supplies",
      },
      stats: [
        { value: "95", label: "Active organizations" },
        { value: "4200", label: "Volunteers mobilized" },
        { value: "72", label: "Quarterly initiatives" },
      ],
      actions: [
        { label: "Join a volunteer team", href: "/volunteer" },
        { label: "Submit your org", href: "/contact", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Impact lanes",
        title: "Focus areas at a glance",
        items: [
          {
            title: "Arts & culture",
            description: "Collectives hosting plena workshops, mural brigades, and youth theater labs.",
            badge: "Creative",
          },
          {
            title: "Food security",
            description: "Community kitchens, agroecology projects, and meal delivery networks.",
            badge: "Mutual aid",
          },
          {
            title: "Youth leadership",
            description: "Mentorship programs, STEM clubs, and civic engagement bootcamps for teens.",
            badge: "Youth",
          },
          {
            title: "Elder wellness",
            description: "Check-in phone trees, movement classes, and transportation companions.",
            badge: "Care",
          },
          {
            title: "Disaster readiness",
            description: "Brigades organizing supply hubs, solar kits, and emergency response training.",
            badge: "Resilience",
          },
          {
            title: "Civic advocacy",
            description: "Policy roundtables and campaigns co-created with residents and diaspora partners.",
            badge: "Civic",
          },
        ],
      },
      {
        eyebrow: "Partner toolkit",
        title: "Coordinate with confidence",
        bullets: [
          "Download memorandums of understanding templates to formalize collaborations.",
          "Access photo release forms and bilingual consent templates for public events.",
          "Sync your calendar with our public notices feed to avoid scheduling overlaps.",
          "Book the community van or audio equipment through our shared inventory system.",
        ],
        cta: { label: "Browse guides and policies", href: "/guides" },
      },
    ],
    spotlight: {
      title: "Community voice",
      quote:
        "When organizations align their calendars and share volunteers, we multiply impact without burning anyone out.",
      author: "Ricardo Vélez",
      role: "Director, Brigada Jacaguas",
    },
    resources: [
      {
        title: "Monthly coordination call",
        description: "Join the next cross-organization sync hosted every first Wednesday.",
        href: "/event-calendar",
      },
      {
        title: "Funding opportunities board",
        description: "Track grants, residencies, and sponsorships curated for community work.",
        href: "/scholarships",
      },
    ],
  },
  "directory/professionals": {
    hero: {
      eyebrow: "Local professionals",
      title: "Hire trusted experts rooted in community",
      description:
        "Find bilingual strategists, designers, engineers, and consultants who understand Juana Díaz from the inside out.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Professionals collaborating in a meeting room",
      },
      stats: [
        { value: "340", label: "Verified pros" },
        { value: "89%", label: "Client satisfaction" },
        { value: "48", label: "Industries represented" },
      ],
      actions: [
        { label: "Post a project", href: "/forum" },
        { label: "Request matchmaking", href: "/mentorship", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Talent highlights",
        title: "Browse by specialty",
        items: [
          {
            title: "Creative technologists",
            description: "UX designers, videographers, and AR storytellers bringing projects to life.",
            badge: "Digital",
          },
          {
            title: "Built environment",
            description: "Architects, urban planners, and engineers focused on resilient infrastructure.",
            badge: "Infrastructure",
          },
          {
            title: "Health & wellness",
            description: "Therapists, nutritionists, and fitness coaches offering culturally-grounded care.",
            badge: "Wellness",
          },
          {
            title: "Business services",
            description: "Accountants, grant writers, and marketing strategists supporting growth.",
            badge: "Operations",
          },
          {
            title: "Education",
            description: "Tutors, curriculum designers, and facilitators for every age group.",
            badge: "Learning",
          },
          {
            title: "Event specialists",
            description: "Producers, stage managers, and audiovisual crews for gatherings big and small.",
            badge: "Events",
          },
        ],
      },
      {
        eyebrow: "Hiring support",
        title: "Tools for smooth collaboration",
        bullets: [
          "Download scope-of-work templates to clarify deliverables in Spanish and English.",
          "Review suggested pay ranges compiled from regional partner networks.",
          "Request reference checks facilitated by the mentorship council.",
          "Access conflict resolution guidelines if issues arise mid-project.",
        ],
        cta: { label: "Access hiring resources", href: "/guides" },
      },
    ],
    spotlight: {
      title: "Pro insight",
      quote:
        "I choose clients through the hub because expectations are clear and community values guide every engagement.",
      author: "Daniela Rivera",
      role: "Independent product designer",
    },
    resources: [
      {
        title: "Professional development series",
        description: "Monthly masterclasses covering finance, wellness, and storytelling.",
        href: "/workshops",
      },
      {
        title: "Join the mentorship roster",
        description: "Share your expertise with emerging leaders across the island.",
        href: "/mentorship",
      },
    ],
  },
  "directory/services": {
    hero: {
      eyebrow: "Essential services",
      title: "Reliable support when you need it",
      description:
        "Locate trusted home repair crews, healthcare providers, transportation, and childcare services vetted by neighbors.",
      image: {
        src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80",
        alt: "Technician repairing home equipment",
      },
      stats: [
        { value: "210", label: "Verified service providers" },
        { value: "24/7", label: "Emergency response partners" },
        { value: "98%", label: "Satisfaction guarantee" },
      ],
      actions: [
        { label: "Request urgent support", href: "/safety" },
        { label: "Compare providers", href: "/directory", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Top categories",
        title: "Find help fast",
        items: [
          {
            title: "Home repair",
            description: "Electricians, plumbers, and roof specialists with emergency availability.",
            badge: "Housing",
          },
          {
            title: "Healthcare",
            description: "Clinics, therapists, and mobile units offering bilingual appointments.",
            badge: "Health",
          },
          {
            title: "Transportation",
            description: "Accessible taxis, rideshare pools, and volunteer driver programs.",
            badge: "Transit",
          },
          {
            title: "Childcare",
            description: "Certified caregivers, after-school programs, and cultural day camps.",
            badge: "Family",
          },
          {
            title: "Tech support",
            description: "Device repair, cybersecurity check-ups, and community Wi-Fi clinics.",
            badge: "Digital",
          },
          {
            title: "Wellness",
            description: "Massage therapists, yoga instructors, and holistic practitioners.",
            badge: "Wellness",
          },
        ],
      },
      {
        eyebrow: "Quality assurance",
        title: "How we verify providers",
        bullets: [
          "Background checks and licensing verification completed every 12 months.",
          "Community reviews highlight accessibility, language options, and professionalism.",
          "Rapid response team monitors urgent support requests and escalates when needed.",
          "Service partners commit to fair pricing and transparent estimates.",
        ],
        cta: { label: "Read the safety checklist", href: "/safety" },
      },
    ],
    resources: [
      {
        title: "Request a neighbor recommendation",
        description: "Submit a form and our concierge team will share personalized matches.",
        href: "/contact",
      },
      {
        title: "Emergency preparation guide",
        description: "Ensure your household plan is ready before hurricane season.",
        href: "/weather-alerts",
      },
    ],
  },
  "directory/venues": {
    hero: {
      eyebrow: "Event venues",
      title: "Spaces that set the stage",
      description:
        "From plazas to creative studios, discover flexible venues ready for markets, performances, and community meetings.",
      image: {
        src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
        alt: "Open-air venue with string lights at dusk",
      },
      stats: [
        { value: "54", label: "Bookable venues" },
        { value: "12", label: "Outdoor stages" },
        { value: "18", label: "Tech-equipped studios" },
      ],
      actions: [
        { label: "Check availability", href: "/public-notices" },
        { label: "Plan your event", href: "/event-calendar", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Venue styles",
        title: "Choose the right fit",
        items: [
          {
            title: "Heritage plazas",
            description: "Historic squares with built-in seating, shade, and access to public restrooms.",
            badge: "Civic",
          },
          {
            title: "Cultural centers",
            description: "Indoor galleries and rehearsal rooms perfect for exhibits and workshops.",
            badge: "Arts",
          },
          {
            title: "Waterfront decks",
            description: "Boardwalk spaces ideal for night markets, food festivals, and dance socials.",
            badge: "Waterfront",
          },
          {
            title: "Innovation labs",
            description: "Tech-enabled studios with projectors, streaming gear, and modular seating.",
            badge: "Hybrid",
          },
          {
            title: "Nature retreats",
            description: "Lakeside and mountain venues surrounded by trails for wellness gatherings.",
            badge: "Outdoors",
          },
          {
            title: "Community halls",
            description: "Accessible auditoriums with kitchens, storage, and bilingual staff support.",
            badge: "Gatherings",
          },
        ],
      },
      {
        eyebrow: "Booking checklist",
        title: "Make planning easy",
        bullets: [
          "Reserve permits at least four weeks in advance for public plazas.",
          "Coordinate sound and lighting needs through our equipment lending program.",
          "Review accessibility notes including ramps, restrooms, and parking maps.",
          "Add your event to the public calendar to boost attendance.",
        ],
        cta: { label: "Download the event toolkit", href: "/guides" },
      },
    ],
    spotlight: {
      title: "Planner insight",
      quote:
        "Booking through the hub meant the venue already knew our values around safety, inclusion, and bilingual signage.",
      author: "Mariana Cruz",
      role: "Producer, Festival de la Calle",
    },
    resources: [
      {
        title: "Submit a venue",
        description: "List your space and receive training on hosting inclusive events.",
        href: "/contact",
      },
      {
        title: "Volunteer production crew",
        description: "Find stage managers and hospitality teams ready to support.",
        href: "/volunteer",
      },
    ],
  },
  "event-calendar": {
    hero: {
      eyebrow: "Events",
      title: "There’s always something happening",
      description:
        "Track civic meetings, concerts, workshops, and sports leagues. Subscribe for reminders in English or Spanish.",
      image: {
        src: "https://images.unsplash.com/photo-1464375117522-1311d6a5b81c?auto=format&fit=crop&w=1200&q=80",
        alt: "Outdoor festival at night",
      },
      actions: [
        { label: "Submit an event", href: "/public-notices" },
        { label: "Weekly highlights", href: "/this-week", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Filters",
        title: "Plan by interest",
        description: "Use dynamic filters by barrio, cost, language, family-friendly, and accessibility.",
        items: [
          { title: "Cultural", description: "Festivals, parades, theater, and gallery nights celebrating Afro-Boricua creativity." },
          { title: "Civic", description: "Town halls, participatory budgeting, youth councils, and neighborhood assemblies." },
          { title: "Outdoors", description: "River cleanups, bike tours, trail hikes, and beach sunrise yoga." },
          { title: "Business", description: "Pitch nights, vendor trainings, co-op meetups, and export readiness sessions." },
          { title: "Family", description: "Storytime, science pop-ups, after-school showcases, and inclusive sports leagues." },
          { title: "Nightlife", description: "DJ sets, poetry lounges, salsa socials, and rooftop film screenings." },
        ],
      },
      {
        eyebrow: "Stay in sync",
        title: "Smart reminders",
        description: "Never miss the moments that matter most.",
        bullets: [
          "Sync with Google, Apple, or Outlook calendars in one click.",
          "Receive SMS alerts for sold-out or weather-adjusted events.",
          "Bookmark favorites and share itineraries with friends.",
          "Volunteer or vendor sign-up links attached to each listing.",
        ],
        cta: { label: "See this week's spotlight", href: "/this-week" },
      },
    ],
    resources: [
      { title: "Workshops hub", description: "Professional development, youth labs, and creative residencies.", href: "/workshops" },
      { title: "Past event archive", description: "Browse recaps, photos, and recordings to inspire your next idea.", href: "/past-events" },
    ],
  },
  forum: {
    hero: {
      eyebrow: "Community forum",
      title: "Conversations that shape the future",
      description:
        "Join moderated, respectful threads across civic ideas, arts collaboration, public safety, and entrepreneurship.",
      image: {
        src: "https://images.unsplash.com/photo-1518600506271-1e25c68d6b67?auto=format&fit=crop&w=1200&q=80",
        alt: "Community meeting",
      },
      stats: [
        { value: "5.2K", label: "Members participating" },
        { value: "420", label: "Active threads each month" },
        { value: "24", label: "Facilitators and moderators" },
      ],
      actions: [
        { label: "Sign in to post", href: "/login" },
        { label: "Review community guidelines", href: "/terms", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Channels",
        title: "Where ideas find collaborators",
        description: "Each channel is bilingual with weekly summary digests.",
        items: [
          { title: "Civic innovation", description: "Discuss mobility pilots, participatory budgeting, and policy updates with municipal staff." },
          { title: "Creative collabs", description: "Connect artists, producers, and venues for cross-genre projects." },
          { title: "Business lab", description: "Share vendor tips, logistics advice, and procurement opportunities." },
          { title: "Youth voices", description: "Teen-led space uplifting school projects and activism." },
          { title: "Mutual aid", description: "Coordinate donation drives, meal trains, and community care." },
          { title: "Wellness circle", description: "Mental health check-ins, support groups, and local therapist AMAs." },
        ],
      },
      {
        eyebrow: "Community care",
        title: "Moderation with intention",
        description: "Our team of trained facilitators keeps the forum inclusive and constructive.",
        bullets: [
          "Clear escalation paths and bilingual reporting tools.",
          "Monthly code of conduct refreshers and listening sessions.",
          "Accessibility-first design with screen-reader and keyboard support.",
          "Spotlight badges for members who model collaborative behavior.",
        ],
        cta: { label: "Meet the facilitator team", href: "/about-us" },
      },
    ],
    resources: [
      { title: "Forum onboarding guide", description: "Step-by-step instructions to personalize notifications.", href: "/guides" },
      { title: "Civic toolkit", description: "Templates for proposals, petitions, and community agreements.", href: "/learning-hub" },
    ],
  },
  gallery: {
    hero: {
      eyebrow: "Gallery",
      title: "Visual stories from our neighborhoods",
      description:
        "Browse photo essays, archival images, and user submissions celebrating everyday life in Juana Díaz.",
      image: {
        src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
        alt: "Gallery wall with art",
      },
      actions: [
        { label: "Submit your photo", href: "/contact" },
        { label: "Read storyteller spotlights", href: "/local-stories", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Collections",
        title: "Curated photo series",
        description: "Each collection pairs visuals with captions translated in English and Spanish.",
        items: [
          { title: "Vida en la Plaza", description: "Everyday scenes from the plaza captured across the four seasons." },
          { title: "Hands of Juana Díaz", description: "Portraits of artisans, bakers, growers, and mechanics at work." },
          { title: "Río Jacaguas", description: "Documentary series on river stewardship and recreation." },
          { title: "Festival de Reyes", description: "Archive of parades, costumes, and family traditions from 1950 onward." },
          { title: "New Voices", description: "Youth photographers exploring identity, sports, and hometown pride." },
          { title: "Architecture tour", description: "Doors, balconies, and murals celebrating design heritage." },
        ],
      },
      {
        eyebrow: "Participate",
        title: "How to contribute",
        description: "We welcome photographers, writers, and archivists who want to co-create.",
        bullets: [
          "Submit high-resolution images with captions and release forms.",
          "Join monthly critique sessions hosted online and in-person.",
          "License your work under Creative Commons or custom agreements.",
          "Request mentorship for editing, storytelling, or grant writing.",
        ],
        cta: { label: "View submission checklist", href: "/guides" },
      },
    ],
    resources: [
      { title: "Video storytelling lab", description: "Work with filmmakers to expand your project.", href: "/videos" },
      { title: "Workshops & critiques", description: "Attend editing labs and portfolio reviews.", href: "/workshops" },
    ],
  },
  guides: {
    hero: {
      eyebrow: "Guides",
      title: "Community knowledge, organized",
      description:
        "Step-by-step playbooks for residents, visitors, entrepreneurs, and artists compiled by local experts.",
      image: {
        src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
        alt: "Open guidebook",
      },
      actions: [
        { label: "Download PDF bundle", href: "/guides" },
        { label: "Request a custom session", href: "/mentorship", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Popular topics",
        title: "Start with these essentials",
        description: "Updated quarterly with new regulations, contacts, and templates.",
        items: [
          { title: "Launch a food truck", description: "Permits, inspection checklists, commissary kitchens, and marketing tips." },
          { title: "Plan a block party", description: "Step-by-step timeline, vendor agreements, and safety protocols." },
          { title: "Heritage storytelling", description: "Interview guides, translation tips, and archival best practices." },
          { title: "Green infrastructure", description: "Grant programs and templates for community gardens and rainwater capture." },
          { title: "School partnerships", description: "How to collaborate with teachers, youth groups, and after-school programs." },
          { title: "Disaster readiness", description: "Household checklist, neighborhood captains, and supply drives." },
        ],
      },
      {
        eyebrow: "Formats",
        title: "Learn your way",
        description: "Guides are available as PDFs, videos, and hands-on workshops.",
        bullets: [
          "Bookmark interactive guides with embedded forms and calculators.",
          "Access printable worksheets for community meetings.",
          "Request a facilitation kit for your organization.",
          "Bilingual glossary in every download to bridge technical language.",
        ],
        cta: { label: "Visit the learning hub", href: "/learning-hub" },
      },
    ],
  },
  "learning-hub": {
    hero: {
      eyebrow: "Learning hub",
      title: "Upskill together",
      description:
        "Micro-courses, webinars, and open study halls designed with local educators and subject-matter experts.",
      image: {
        src: "https://images.unsplash.com/photo-1498079022511-d15614cb1c02?auto=format&fit=crop&w=1200&q=80",
        alt: "People learning with laptops",
      },
      stats: [
        { value: "36", label: "Active learning tracks" },
        { value: "480", label: "Learners enrolled" },
        { value: "92%", label: "Completion satisfaction" },
      ],
      actions: [
        { label: "Browse workshops", href: "/workshops" },
        { label: "Scholarship aid", href: "/scholarships", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Tracks",
        title: "Programs shaped by community needs",
        description: "Choose flexible formats and peer accountability circles.",
        items: [
          { title: "Digital readiness", description: "From basic computer literacy to civic data dashboards." },
          { title: "Creative entrepreneurship", description: "Brand storytelling, pricing, e-commerce, and grant writing." },
          { title: "Climate resilience", description: "Household readiness, community energy, and regenerative agriculture." },
          { title: "Youth leadership", description: "Public speaking, civic design, and college mentorship." },
          { title: "Wellness & care", description: "Trauma-informed practices, caregiving support, and mindfulness." },
          { title: "Tourism excellence", description: "Hospitality, bilingual service, and guest experience labs." },
        ],
      },
      {
        eyebrow: "Support",
        title: "How learning happens here",
        description: "We remove barriers so everyone can participate.",
        bullets: [
          "Sliding-scale tuition with pay-it-forward scholarships.",
          "Hybrid schedules mixing virtual lessons and in-person labs.",
          "Childcare stipends and transportation vouchers for select cohorts.",
          "Completion badges integrate with professional profiles on the hub.",
        ],
        cta: { label: "Apply for mentorship", href: "/mentorship" },
      },
    ],
    resources: [
      { title: "Learning newsletter", description: "Monthly digest of new courses and alumni stories.", href: "/blog" },
      { title: "Career board", description: "Match newly earned skills with open roles.", href: "/career" },
    ],
  },
  "local-stories": {
    hero: {
      eyebrow: "Storytelling",
      title: "Voices of Juana Díaz",
      description:
        "Weekly features uplifting residents, diaspora, and partners who are shaping the future with care and creativity.",
      image: {
        src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
        alt: "Person smiling in the street",
      },
      actions: [
        { label: "Pitch a story", href: "/contact" },
        { label: "Explore the podcast", href: "/videos", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Series",
        title: "Recurring columns",
        description: "Dive into themed storytelling arcs updated year-round.",
        items: [
          { title: "Barrio spotlight", description: "Neighborhood portraits anchored in history, data, and resident interviews." },
          { title: "Diaspora diaries", description: "Stories from Juana Díaz families building bridges abroad." },
          { title: "Youth takeover", description: "Teen writers covering campus life, climate action, and culture." },
          { title: "Cocina creativa", description: "Recipe swaps, pop-up chefs, and food justice conversations." },
          { title: "Soundcheck", description: "Musicians, poets, and theatre makers discussing their craft." },
          { title: "Civic voices", description: "Public servants explaining services, rights, and ongoing projects." },
        ],
      },
      {
        eyebrow: "Get involved",
        title: "Become a contributor",
        description: "We provide editorial coaching, translation, and multimedia support.",
        bullets: [
          "Submit pitches with a two-sentence summary and desired format.",
          "Attend monthly open newsroom calls for feedback and collaboration.",
          "Access equipment library for audio, video, and photography.",
          "Join storytelling residencies pairing writers with visual artists.",
        ],
        cta: { label: "Download contributor guide", href: "/guides" },
      },
    ],
    resources: [
      { title: "Community blog", description: "Long-form essays, op-eds, and municipal updates.", href: "/blog" },
      { title: "Weekly challenges", description: "Prompts that turn stories into collective action.", href: "/weekly-challenges" },
    ],
  },
  mentorship: {
    hero: {
      eyebrow: "Mentorship",
      title: "Guidance rooted in community",
      description:
        "Pair with mentors across business, civic leadership, arts, and technology for structured 12-week journeys.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Mentor and mentee collaborating",
      },
      stats: [
        { value: "140", label: "Mentors available" },
        { value: "12", label: "Focus industries" },
        { value: "88%", label: "Mentees reaching goals" },
      ],
      actions: [
        { label: "Start your application", href: "/mentorship" },
        { label: "Sponsor a cohort", href: "/volunteer", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Tracks",
        title: "What mentorship covers",
        description: "Tailored to your goals with bilingual support.",
        items: [
          { title: "Business launch", description: "Business plans, legal basics, financing, and customer discovery." },
          { title: "Creative growth", description: "Portfolio development, grant writing, and touring logistics." },
          { title: "Civic leadership", description: "Policy navigation, coalition building, and public speaking." },
          { title: "Tech skills", description: "Digital marketing, UX/UI, and data storytelling." },
          { title: "Education pathways", description: "College readiness, scholarship essays, and research projects." },
          { title: "Wellness & care", description: "Burnout prevention, healing justice, and community care models." },
        ],
      },
      {
        eyebrow: "How it works",
        title: "Three-step journey",
        description: "Clear expectations keep everyone supported.",
        bullets: [
          "Match intake: share goals, skills, and schedule preferences.",
          "Mentorship contract: agree on milestones and communications.",
          "Celebrate & share: present outcomes to the community showcase.",
        ],
        cta: { label: "Meet our mentor council", href: "/about-us" },
      },
    ],
    resources: [
      { title: "Scholarship fund", description: "Financial assistance to offset travel or childcare costs.", href: "/scholarships" },
      { title: "Career opportunities", description: "Turn your mentorship wins into employment leads.", href: "/career" },
    ],
  },
  news: {
    hero: {
      eyebrow: "News",
      title: "Stay informed with municipal and community updates",
      description:
        "Our newsroom collaborates with local journalists to deliver accurate, bilingual reporting on the topics that matter most.",
      image: {
        src: "https://images.unsplash.com/photo-1520975682015-69f9e00619c1?auto=format&fit=crop&w=1200&q=80",
        alt: "Person reading news on a tablet",
      },
      actions: [
        { label: "Subscribe to alerts", href: "/contact" },
        { label: "Pitch a tip", href: "/public-notices", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Coverage",
        title: "Top beats",
        description: "Balanced coverage blending municipal updates and community investigations.",
        items: [
          { title: "Local government", description: "Budgets, ordinances, infrastructure projects, and public hearings." },
          { title: "Climate & resilience", description: "Weather alerts, preparedness plans, and environmental justice stories." },
          { title: "Education", description: "School board decisions, student achievements, and campus programs." },
          { title: "Health & safety", description: "Public health guidance, emergency response, and safety initiatives." },
          { title: "Economy", description: "Small business wins, workforce data, and investment highlights." },
          { title: "Culture", description: "Festival previews, artist features, and heritage preservation." },
        ],
      },
      {
        eyebrow: "Transparency",
        title: "Editorial standards",
        description: "Trust is built through accountability and open sourcing.",
        bullets: [
          "Fact-checking on every story with bilingual summaries.",
          "Corrections policy published and updated quarterly.",
          "Anonymous tipline with encrypted submissions.",
          "Open newsroom sessions every last Friday of the month.",
        ],
        cta: { label: "Review ethics policy", href: "/terms" },
      },
    ],
    resources: [
      { title: "Community blog", description: "Opinion columns and guest essays complementing reported news.", href: "/blog" },
      { title: "Public notices", description: "Official statements, procurement calls, and municipal bids.", href: "/public-notices" },
    ],
  },
  blog: {
    hero: {
      eyebrow: "Blog",
      title: "In-depth perspectives from across the hub",
      description:
        "Editorial features, guides, and interviews curated to inspire action and celebrate community wins.",
      image: {
        src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
        alt: "Writer typing on laptop",
      },
      actions: [
        { label: "Submit a guest post", href: "/contact" },
        { label: "Listen to the podcast", href: "/videos", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Categories",
        title: "What we publish",
        description: "Curated columns updated weekly.",
        items: [
          { title: "Community wins", description: "Celebrating residents, students, and volunteers making impact." },
          { title: "How-to", description: "Practical tutorials and toolkits for civic and business projects." },
          { title: "Wellness", description: "Mental health, recreation, and care-centered resources." },
          { title: "Culture", description: "Interviews with artists, chefs, and tradition bearers." },
          { title: "Youth voices", description: "Teen contributors exploring innovation and identity." },
          { title: "Data stories", description: "Visual explainers on budgets, infrastructure, and demographics." },
        ],
      },
      {
        eyebrow: "Stay connected",
        title: "Never miss a post",
        description: "Get a bilingual digest in your inbox every Thursday.",
        bullets: [
          "Customize alerts by topic and urgency.",
          "Download articles as PDFs for community meetings.",
          "Share directly to WhatsApp or SMS.",
          "Archive automatically accessible via sitemap.",
        ],
        cta: { label: "Subscribe to newsletter", href: "/contact" },
      },
    ],
    resources: [
      { title: "Storytelling guidelines", description: "Ensure your submission aligns with our editorial standards.", href: "/guides" },
      { title: "Media kit", description: "Brand assets, logos, and photography usage rights.", href: "/guides" },
    ],
  },
  career: {
    hero: {
      eyebrow: "Careers",
      title: "Work opportunities rooted in community",
      description:
        "Discover open roles, gigs, and fellowships across public service, nonprofits, and private enterprises in the region.",
      image: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        alt: "Team collaborating around a table",
      },
      stats: [
        { value: "180", label: "Active listings" },
        { value: "65%", label: "Bilingual preferred roles" },
        { value: "34", label: "Partner employers" },
      ],
      actions: [
        { label: "Post a job", href: "/contact" },
        { label: "Access workforce training", href: "/learning-hub", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Featured pathways",
        title: "Where talent is needed now",
        description: "Updated weekly with high-impact roles.",
        items: [
          { title: "Civic & public service", description: "Urban planning, emergency management, outreach, and policy analysis." },
          { title: "Creative economy", description: "Designers, media producers, performers, and arts administrators." },
          { title: "STEM & tech", description: "Developers, data specialists, and solar technicians supporting resilience." },
          { title: "Hospitality", description: "Hotel operations, culinary teams, tour guides, and guest services." },
          { title: "Education", description: "Teachers, tutors, counselors, and youth coordinators." },
          { title: "Healthcare", description: "Nurses, therapists, community health workers, and emergency medics." },
        ],
      },
      {
        eyebrow: "Support",
        title: "Career tools and perks",
        description: "We connect job seekers with the resources to thrive.",
        bullets: [
          "Resume and portfolio clinics with bilingual coaches.",
          "Interview practice labs and recorded feedback.",
          "Employer commitments to fair wages and inclusive hiring.",
          "Transportation and childcare stipends for key interviews.",
        ],
        cta: { label: "Join mentorship cohort", href: "/mentorship" },
      },
    ],
    resources: [
      { title: "Scholarships & grants", description: "Upskill with financial support tailored to your goals.", href: "/scholarships" },
      { title: "Workshops", description: "Sign up for resume, negotiation, and leadership labs.", href: "/workshops" },
    ],
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "We’re here to help",
      description:
        "Reach the Juana Díaz Hub team for support, partnerships, media inquiries, or feedback on the platform.",
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
        alt: "Person with headset offering support",
      },
      actions: [
        { label: "Email support", href: "mailto:hola@juanadiazhub.com" },
        { label: "Schedule a call", href: "/contact", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Departments",
        title: "Connect with the right team",
        description: "We aim to respond within two business days.",
        items: [
          { title: "Community care", description: "Accessibility requests, translation support, and platform feedback." },
          { title: "Partnerships", description: "Collaborate on programs, sponsorships, or research initiatives." },
          { title: "Press & media", description: "Interview requests, press kits, and brand assets." },
          { title: "Technical support", description: "Report bugs, security concerns, or account issues." },
          { title: "Business services", description: "Directory listings, analytics, and advertising inquiries." },
          { title: "Volunteer coordination", description: "Training schedules, onboarding, and service hours." },
        ],
      },
      {
        eyebrow: "Visit us",
        title: "Community office",
        description: "Stop by our co-working studio for walk-in help or to host meetings.",
        callout: {
          title: "Office hours",
          description: "Centro Comunitario Juana Díaz, Calle Unión 205",
          bullets: [
            "Monday – Thursday: 9am – 6pm",
            "Friday: 9am – 4pm",
            "Saturday: Pop-up support at rotating barrios",
          ],
        },
        bullets: [
          "Accessibility: ramp entrance, elevator, assistive listening devices, and quiet room.",
          "Public transit: Ruta 5 and Ruta 7 stop one block away.",
          "Parking vouchers available for municipal lot with prior request.",
          "Hybrid appointments available via Zoom or WhatsApp video.",
        ],
      },
    ],
    resources: [
      { title: "FAQ center", description: "Find quick answers to common platform questions.", href: "/sitemap" },
      { title: "Report an issue", description: "Submit accessibility or safety concerns anonymously.", href: "/safety" },
    ],
  },
  "past-events": {
    hero: {
      eyebrow: "Archive",
      title: "Relive standout moments",
      description:
        "Photo galleries, recordings, and recap articles keep the energy of past events alive and ready to inspire your next idea.",
      image: {
        src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
        alt: "Crowd enjoying a concert",
      },
      actions: [
        { label: "Browse events archive", href: "/past-events" },
        { label: "Submit your recap", href: "/contact", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Highlights",
        title: "Featured recaps",
        description: "Top events you loved this year.",
        items: [
          { title: "Feria de Artesanías 2024", description: "Three-day artisan fair with over 80 vendors, culinary demos, and youth workshops." },
          { title: "Noches de Galería", description: "Monthly after-hours art walk with live painting and jazz ensembles." },
          { title: "Ruta del Café", description: "Coffee heritage tour connecting haciendas, roasters, and agroforestry projects." },
          { title: "Juana Díaz Jazz Fest", description: "Regional musicians sharing original compositions at the plaza amphitheater." },
          { title: "Hack the City", description: "Civic tech sprint building prototypes for transit alerts and waste reduction." },
          { title: "Festival de Reyes", description: "Generations united through parades, storytelling, and community meals." },
        ],
      },
      {
        eyebrow: "Keep the momentum",
        title: "Turn memories into action",
        description: "Share takeaways, volunteer, or remix an idea for the upcoming season.",
        bullets: [
          "Download session recordings with bilingual captions.",
          "Access contact lists for speakers, vendors, and performers.",
          "Apply for microgrants to prototype event spinoffs.",
          "Join planning committees for the next edition.",
        ],
        cta: { label: "View upcoming events", href: "/event-calendar" },
      },
    ],
  },
  "privacy-policy": {
    hero: {
      eyebrow: "Policies",
      title: "Privacy policy",
      description:
        "We protect community data with transparency. Review how information is collected, stored, and shared across Juana Díaz Hub services.",
      image: {
        src: "https://images.unsplash.com/photo-1526378722370-14d1a5415505?auto=format&fit=crop&w=1200&q=80",
        alt: "Secure server room",
      },
      actions: [
        { label: "Download PDF", href: "/privacy-policy" },
        { label: "Contact our DPO", href: "mailto:privacy@juanadiazhub.com", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Core principles",
        title: "Your trust matters",
        description: "We only collect data necessary to deliver services and improve the platform.",
        bullets: [
          "Transparency: plain-language disclosures in English and Spanish.",
          "Choice: granular controls for notifications, cookies, and data sharing.",
          "Security: encryption in transit and at rest, with third-party audits annually.",
          "Accountability: dedicated data protection officer and published compliance reports.",
        ],
      },
      {
        eyebrow: "Key details",
        title: "What this policy covers",
        description: "Our privacy framework aligns with Puerto Rico and international best practices.",
        bullets: [
          "Personal information: contact details, preferences, and voluntary submissions.",
          "Usage data: analytics to improve accessibility, performance, and relevance.",
          "Sharing: limited to service providers under strict confidentiality agreements.",
          "Your rights: access, correction, deletion, and portability options via account settings.",
        ],
        cta: { label: "Manage privacy settings", href: "/profile" },
      },
    ],
    footerNote:
      "Last updated March 2025. Significant changes will be communicated via email, push notification, and the public notices page.",
  },
  terms: {
    hero: {
      eyebrow: "Policies",
      title: "Terms of service",
      description:
        "Review the community agreements, usage guidelines, and legal responsibilities for using Juana Díaz Hub digital services.",
      image: {
        src: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
        alt: "Person reviewing documents",
      },
      actions: [
        { label: "Download terms", href: "/terms" },
        { label: "Report a violation", href: "/public-notices", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Community guidelines",
        title: "How to participate",
        description: "Our platform centers respect, care, and collaboration.",
        bullets: [
          "Be kind, inclusive, and fact-based in every interaction.",
          "No harassment, hate speech, disinformation, or spam.",
          "Respect privacy by sharing only what you have rights to post.",
          "Follow event, venue, and municipal regulations when publishing opportunities.",
        ],
      },
      {
        eyebrow: "Legal",
        title: "Service terms overview",
        description: "Key takeaways from the binding agreement.",
        bullets: [
          "Accounts require accurate information and secure passwords.",
          "We may suspend accounts violating policies with notice and appeal options.",
          "Content you share remains yours, with license granted for hub promotion.",
          "Liability limitations and dispute resolution follow Puerto Rico law.",
        ],
        cta: { label: "Contact legal team", href: "mailto:legal@juanadiazhub.com" },
      },
    ],
    footerNote: "These terms take effect March 2025. Continued use of the platform constitutes acceptance.",
  },
  "travel-tips": {
    hero: {
      eyebrow: "Travel",
      title: "Plan your stay in Juana Díaz",
      description:
        "Essential information on transportation, lodging, cultural etiquette, and emergency contacts.",
      image: {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        alt: "Traveler with map",
      },
      actions: [
        { label: "Download visitor guide", href: "/guides" },
        { label: "Check weather alerts", href: "/weather-alerts", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Get around",
        title: "Transportation basics",
        description: "Navigate like a local using these options.",
        items: [
          { title: "Publicos & buses", description: "Affordable shared rides connecting downtown with rural barrios." },
          { title: "Car rentals", description: "Trusted partners with bilingual support and insurance guidance." },
          { title: "Cycling routes", description: "Protected lanes along the river and scenic mountain loops." },
          { title: "Walking tours", description: "Self-guided audio tours available for download in two languages." },
          { title: "Accessible transport", description: "Wheelchair-friendly shuttles and mobility assistance services." },
          { title: "Emergency numbers", description: "Police 911, medical 787-843-2222, municipal help line 787-260-0144." },
        ],
      },
      {
        eyebrow: "Respect & care",
        title: "Travel responsibly",
        description: "Honor local customs and protect natural resources.",
        bullets: [
          "Support locally-owned accommodations and eateries.",
          "Participate in beach cleanups or donate to environmental groups.",
          "Learn a few Spanish phrases; we provide quick reference cards.",
          "Tip service workers and artists directly when possible.",
        ],
        cta: { label: "Meet cultural ambassadors", href: "/culture" },
      },
    ],
    resources: [
      { title: "Emergency readiness", description: "Hurricane prep, medical clinics, and shelter locations.", href: "/safety" },
      { title: "Experiences", description: "Plan day trips, guided tours, and culinary adventures.", href: "/explore" },
    ],
  },
  "about-us": {
    hero: {
      eyebrow: "Our team",
      title: "Meet the people behind Juana Díaz Hub",
      description:
        "A multidisciplinary crew of designers, community organizers, technologists, and storytellers building a platform with and for residents.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Team collaborating",
      },
      actions: [
        { label: "Connect with us", href: "/contact" },
        { label: "Join as a volunteer", href: "/volunteer", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Mission",
        title: "Why we exist",
        description: "We believe information, celebration, and care should be accessible to every neighbor.",
        bullets: [
          "Amplify community voices and honor cultural memory.",
          "Support local businesses and creatives with equitable tools.",
          "Simplify access to municipal services and emergency resources.",
          "Design digital spaces that reflect the warmth of our plazas.",
        ],
      },
      {
        eyebrow: "Team",
        title: "Who we are",
        description: "Our core team collaborates with a network of municipal partners and volunteers.",
        items: [
          { title: "Community care", description: "Liaisons focused on accessibility, translation, and resident support." },
          { title: "Product studio", description: "Designers and engineers iterating on the platform with user feedback." },
          { title: "Story lab", description: "Editors, photographers, and producers capturing the town’s voice." },
          { title: "Civic partnerships", description: "Coordinators aligning programs with municipal and nonprofit partners." },
        ],
      },
    ],
    resources: [
      { title: "View open roles", description: "See current positions and fellowship opportunities.", href: "/career" },
      { title: "Annual impact report", description: "Read highlights from programs and metrics.", href: "/guides" },
    ],
  },
  "about-us/juana-diaz": {
    hero: {
      eyebrow: "History",
      title: "Juana Díaz through the decades",
      description:
        "From Taíno settlements and sugarcane trade routes to present-day cultural innovation, explore the milestones that shaped the town.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Historic buildings in Juana Díaz",
      },
      actions: [
        { label: "Read community stories", href: "/local-stories" },
        { label: "Visit the culture hub", href: "/culture", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Timeline",
        title: "Moments that define us",
        description: "A living history built by artisans, farmers, educators, and organizers.",
        items: [
          { title: "Pre-colonial roots", description: "Taíno villages along the Jacaguas River left petroglyphs and ceremonial plazas that still guide cultural practices today." },
          { title: "Agrarian boom", description: "Coffee, sugar, and citrus harvests of the 19th century fostered cooperatives and cross-island trade." },
          { title: "Diaspora bridges", description: "Mid-century migration to New York and Florida fueled remittances, music scenes, and Three Kings celebrations abroad." },
          { title: "Civic renaissance", description: "Grassroots groups in the 1990s championed environmental restoration, youth leadership, and small-business incubators." },
        ],
      },
      {
        eyebrow: "Museums & archives",
        title: "Where to continue learning",
        description: "Explore exhibits and digital collections preserving our shared story.",
        bullets: [
          "Museo Casa Canales: home of the Three Kings Festival archive and artisan mask studio.",
          "Archivo Histórico Municipal: digitized newspapers, maps, and oral histories accessible by appointment.",
          "Centro Cultural Luis Lloréns Torres: weekly lectures, book clubs, and genealogy labs.",
          "Community photo drive: scan your family albums every first Saturday of the month.",
        ],
        cta: { label: "Download the heritage walking tour", href: "/guides" },
      },
    ],
    resources: [
      { title: "Cultural calendar", description: "Festival dates, artisan fairs, and heritage workshops.", href: "/event-calendar" },
      { title: "Support preservation", description: "Donate or volunteer with local archives and restoration teams.", href: "/volunteer" },
    ],
  },
  "this-week": {
    hero: {
      eyebrow: "Spotlight",
      title: "What’s happening this week",
      description:
        "A curated list of must-see events, markets, performances, and volunteer opportunities updated every Monday.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Friends planning with a calendar",
      },
      actions: [
        { label: "Add to your calendar", href: "/event-calendar" },
        { label: "Share with friends", href: "/forum", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Top picks",
        title: "Don’t miss these",
        description: "A balance of culture, civic life, and nightlife.",
        items: [
          { title: "Sunset bomba at the plaza", description: "Live music, artisan kiosks, and dance lessons for all ages." },
          { title: "Civic design lab", description: "Co-create ideas for safer crosswalks and greener streets." },
          { title: "Night market", description: "Food trucks, makers, and an open-mic hosted by local poets." },
          { title: "Family discovery trail", description: "Guided nature walk with bilingual educators." },
        ],
      },
      {
        eyebrow: "Plan ahead",
        title: "How to make the most of it",
        description: "Use these quick tips to personalize your week.",
        bullets: [
          "Reserve free tickets early—popular sessions fill fast.",
          "Check accessibility icons for ASL interpretation, ramps, and quiet rooms.",
          "Bundle outings with nearby dining or gallery stops from our directory.",
          "Share photos and recaps with the hashtag #JuanaDiazHub for a community feature.",
        ],
        cta: { label: "See full calendar", href: "/event-calendar" },
      },
    ],
    resources: [
      { title: "Volunteer roles", description: "Offer time at hydration stations, welcome tables, or cleanup crews.", href: "/volunteer" },
      { title: "Weather outlook", description: "Check forecasts and alerts before you head out.", href: "/weather-alerts" },
    ],
  },
  videos: {
    hero: {
      eyebrow: "Media",
      title: "Watch Juana Díaz in motion",
      description:
        "Short documentaries, event recaps, and interviews filmed with local creators and youth media fellows.",
      image: {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        alt: "Video production setup",
      },
      actions: [
        { label: "Subscribe on YouTube", href: "https://youtube.com" },
        { label: "Submit a video", href: "/contact", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Series",
        title: "What to watch",
        description: "Each series includes bilingual captions and downloadable discussion guides.",
        items: [
          { title: "Neighborhood portraits", description: "Five-minute documentaries introducing barrios through resident voices." },
          { title: "Entrepreneur spotlights", description: "Behind-the-scenes looks at makers, chefs, and innovators." },
          { title: "Civic explainers", description: "Animated walk-throughs of municipal services and budget updates." },
          { title: "Festival highlights", description: "Relive the energy of parades, concerts, and tournaments." },
        ],
      },
      {
        eyebrow: "Collaborate",
        title: "Make media with us",
        description: "We host production labs for storytellers at every skill level.",
        bullets: [
          "Borrow cameras, microphones, and lighting from our equipment library.",
          "Join editing sessions with experienced filmmakers.",
          "Pitch docu-series ideas for funding or mentorship.",
          "Access captioning and translation support for all releases.",
        ],
        cta: { label: "Sign up for workshops", href: "/workshops" },
      },
    ],
    resources: [
      { title: "Audio stories", description: "Listen to podcast episodes featuring artists and civic leaders.", href: "/local-stories" },
      { title: "Gallery", description: "Explore photo essays complementing each video.", href: "/gallery" },
    ],
  },
  volunteer: {
    hero: {
      eyebrow: "Get involved",
      title: "Volunteer with your neighbors",
      description:
        "From festival crews to mutual aid logistics, there is a role for every talent and schedule.",
      image: {
        src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
        alt: "Volunteers working together",
      },
      actions: [
        { label: "Apply to volunteer", href: "/volunteer" },
        { label: "See upcoming events", href: "/event-calendar", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Roles",
        title: "Where you can help",
        description: "Filter by interest, time commitment, and accessibility needs.",
        items: [
          { title: "Event hosts", description: "Welcome attendees, manage check-in, and support accessibility services." },
          { title: "Creative corps", description: "Photograph, film, or design content to document community stories." },
          { title: "Mutual aid logistics", description: "Coordinate donations, deliveries, and supply inventories." },
          { title: "Youth mentors", description: "Support after-school labs, workshops, and civic projects." },
        ],
      },
      {
        eyebrow: "Benefits",
        title: "What volunteers receive",
        description: "We invest in the people who invest in Juana Díaz.",
        bullets: [
          "Professional development credits and recommendation letters.",
          "Transportation vouchers and meal stipends for long shifts.",
          "Exclusive trainings on safety, storytelling, and facilitation.",
          "Volunteer appreciation festival every December.",
        ],
        cta: { label: "View volunteer handbook", href: "/guides" },
      },
    ],
    resources: [
      { title: "Mentorship program", description: "Grow leadership skills alongside experienced organizers.", href: "/mentorship" },
      { title: "Weekly challenges", description: "Turn service into friendly competitions with rewards.", href: "/weekly-challenges" },
    ],
  },
  "weather-alerts": {
    hero: {
      eyebrow: "Safety",
      title: "Real-time weather and emergency alerts",
      description:
        "Stay prepared with bilingual updates for storms, heat advisories, flooding, and infrastructure outages.",
      image: {
        src: "https://images.unsplash.com/photo-1501959915551-4e8f8f48d297?auto=format&fit=crop&w=1200&q=80",
        alt: "Storm clouds over coastline",
      },
      actions: [
        { label: "Enable notifications", href: "/profile" },
        { label: "Download safety checklist", href: "/safety", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Preparedness",
        title: "Before severe weather",
        description: "Follow these steps to protect your household and business.",
        bullets: [
          "Update emergency contacts and designate a family meetup point.",
          "Assemble go-bags with water, medications, batteries, and important documents.",
          "Secure outdoor furniture and clear storm drains near your property.",
          "Know shelter locations and transportation options for your barrio.",
        ],
      },
      {
        eyebrow: "During alerts",
        title: "How alerts work",
        description: "Our system pulls from the National Weather Service, municipal crews, and community partners.",
        items: [
          { title: "Push notifications", description: "Mobile and email updates in English and Spanish with clear actions." },
          { title: "Radio & SMS", description: "Coordination with AM stations and SMS hotlines for low-bandwidth communication." },
          { title: "Community captains", description: "Neighborhood volunteers who relay updates and check on vulnerable residents." },
        ],
        cta: { label: "Review emergency guide", href: "/safety" },
      },
    ],
    resources: [
      { title: "Shelter list", description: "Find open shelters, pet-friendly locations, and accessibility notes.", href: "/safety" },
      { title: "Volunteer for relief", description: "Assist with supply distribution and wellness checks.", href: "/volunteer" },
    ],
  },
  "weekly-challenges": {
    hero: {
      eyebrow: "Community fun",
      title: "Join the weekly challenge",
      description:
        "Friendly prompts that encourage civic action, exploration, and storytelling. Earn badges and shout-outs on the hub.",
      image: {
        src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
        alt: "Group celebrating outdoors",
      },
      actions: [
        { label: "Submit your entry", href: "/weekly-challenges" },
        { label: "Share on the forum", href: "/forum", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "How it works",
        title: "Three simple steps",
        description: "Participate solo or with a team.",
        bullets: [
          "Pick this week’s prompt—culture, civic engagement, or wellness.",
          "Complete the action, document it, and share on your profile.",
          "Collect badges, unlock rewards, and inspire your neighbors.",
        ],
      },
      {
        eyebrow: "Recent prompts",
        title: "Ideas to spark your entry",
        description: "We rotate categories to keep things fresh.",
        items: [
          { title: "Local flavor", description: "Document a meal from a family-owned restaurant and tag them." },
          { title: "Civic spotlight", description: "Attend a public meeting and summarize one key takeaway." },
          { title: "Green day", description: "Organize a mini clean-up or plant swap with friends." },
          { title: "Heritage remix", description: "Interview an elder about Juana Díaz traditions and share a quote." },
        ],
        cta: { label: "See archive of prompts", href: "/blog" },
      },
    ],
    resources: [
      { title: "Volunteer opportunities", description: "Turn challenges into ongoing service.", href: "/volunteer" },
      { title: "Storytelling tips", description: "Elevate your submissions with great visuals and captions.", href: "/local-stories" },
    ],
  },
  workshops: {
    hero: {
      eyebrow: "Skill building",
      title: "Hands-on workshops and labs",
      description:
        "Learn side-by-side with instructors, peers, and mentors across creative, civic, and business topics.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Workshop session",
      },
      actions: [
        { label: "Browse sessions", href: "/workshops" },
        { label: "Request a custom training", href: "/contact", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Formats",
        title: "Choose your experience",
        description: "Flexible schedules for students, professionals, and families.",
        items: [
          { title: "Pop-up labs", description: "Two-hour deep dives hosted in barrios and partner schools." },
          { title: "Weekend intensives", description: "Multi-day sprints with project showcases and feedback circles." },
          { title: "Residencies", description: "Month-long collaborations that pair coaches with community teams." },
        ],
      },
      {
        eyebrow: "Focus areas",
        title: "Upcoming highlights",
        description: "Reserve your spot early—many fill within days.",
        bullets: [
          "Small business finance clinic with bilingual accountants.",
          "Sustainable tourism playbook led by local guides.",
          "Storytelling for impact with filmmakers and journalists.",
          "Youth coding and robotics jam in partnership with schools.",
        ],
        cta: { label: "Apply for scholarships", href: "/scholarships" },
      },
    ],
    resources: [
      { title: "Learning hub", description: "Track your progress and download materials.", href: "/learning-hub" },
      { title: "Volunteer as a coach", description: "Share your expertise with the community.", href: "/volunteer" },
    ],
  },
  profile: {
    hero: {
      eyebrow: "Your space",
      title: "Manage your Juana Díaz Hub profile",
      description:
        "Customize notifications, track saved content, and showcase your contributions across events, forums, and challenges.",
      image: {
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        alt: "Person using a laptop",
      },
      actions: [
        { label: "Sign in", href: "/login" },
        { label: "Update privacy settings", href: "/privacy-policy", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Dashboard",
        title: "Everything in one place",
        description: "Your profile keeps personal activity organized and exportable.",
        items: [
          { title: "Saved places", description: "Bookmark businesses, guides, and events for quick access." },
          { title: "Volunteer hours", description: "Log service time and download verification letters." },
          { title: "Challenge badges", description: "Track achievements from weekly prompts and community quests." },
          { title: "Notifications", description: "Control alerts by topic, language, and urgency." },
        ],
      },
      {
        eyebrow: "Security",
        title: "Your data, protected",
        description: "We prioritize privacy with clear controls and support.",
        bullets: [
          "Enable two-factor authentication for added security.",
          "Request data exports or deletion directly from your profile.",
          "Choose to display or hide contributions publicly.",
          "Contact our support team for account recovery in minutes.",
        ],
        cta: { label: "Review privacy policy", href: "/privacy-policy" },
      },
    ],
    resources: [
      { title: "Forum preferences", description: "Adjust digest frequency and channel subscriptions.", href: "/forum" },
      { title: "Notification support", description: "Learn how alerts and language settings work.", href: "/safety" },
    ],
  },
  "public-notices": {
    hero: {
      eyebrow: "Official",
      title: "Public notices and announcements",
      description:
        "Procurement calls, public hearings, policy updates, and municipal advisories published in one centralized timeline.",
      image: {
        src: "https://images.unsplash.com/photo-1505847052193-9fd7d6feae1b?auto=format&fit=crop&w=1200&q=80",
        alt: "Town hall building",
      },
      actions: [
        { label: "Submit a notice", href: "/public-notices" },
        { label: "Review community guidelines", href: "/terms", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Categories",
        title: "What you’ll find",
        description: "Filter by type, date, or department.",
        items: [
          { title: "Procurement & bids", description: "Vendor opportunities, RFPs, and contracting timelines." },
          { title: "Public hearings", description: "Meeting notices with agendas, translation info, and participation instructions." },
          { title: "Service updates", description: "Utility outages, infrastructure repairs, and detours." },
          { title: "Emergency alerts", description: "Severe weather, public health advisories, and relief resources." },
        ],
      },
      {
        eyebrow: "Submission tips",
        title: "Share accurate information",
        description: "We verify every notice before publishing.",
        bullets: [
          "Provide official contact details and supporting documents.",
          "Include bilingual summaries or request translation support.",
          "Attach maps or PDFs for hearings and development plans.",
          "Set expiration dates to keep the board current.",
        ],
        cta: { label: "Download template", href: "/guides" },
      },
    ],
    resources: [
      { title: "Civic forum", description: "Discuss notices, ask questions, and coordinate responses.", href: "/forum" },
      { title: "Event calendar", description: "Sync hearing dates and community consultations.", href: "/event-calendar" },
    ],
  },
  safety: {
    hero: {
      eyebrow: "Safety",
      title: "Community safety and wellbeing",
      description:
        "Resources for emergency readiness, public health, nightlife safety, and neighborhood watch efforts.",
      image: {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        alt: "Safety briefing",
      },
      actions: [
        { label: "Report an issue", href: "/contact" },
        { label: "Join volunteer network", href: "/volunteer", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Guides",
        title: "Stay prepared",
        description: "Quick references you can use or share with neighbors.",
        items: [
          { title: "Emergency readiness", description: "Household checklist for storms, earthquakes, and prolonged outages." },
          { title: "Nightlife safety", description: "Best practices for planning nights out and accessing support lines." },
          { title: "Health alerts", description: "Vaccination clinics, mental health resources, and wellness checks." },
        ],
      },
      {
        eyebrow: "Collective care",
        title: "How we respond together",
        description: "Safety is a shared commitment across agencies and residents.",
        bullets: [
          "Neighborhood captains trained in CPR and emergency coordination.",
          "Partnership with local hospitals and mutual aid networks.",
          "Anonymous reporting forms with multilingual follow-up.",
          "Quarterly resilience drills hosted with schools and businesses.",
        ],
        cta: { label: "Download emergency kit list", href: "/guides" },
      },
    ],
    resources: [
      { title: "Weather alerts", description: "Opt into storm and heat notifications.", href: "/weather-alerts" },
      { title: "Forum safety channel", description: "Share tips and coordinate neighborhood watch efforts.", href: "/forum" },
    ],
  },
  scholarships: {
    hero: {
      eyebrow: "Support",
      title: "Scholarships and financial aid",
      description:
        "Find grants, fellowships, and tuition assistance for students, entrepreneurs, and community organizers.",
      image: {
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
        alt: "Student writing notes",
      },
      actions: [
        { label: "Apply now", href: "/scholarships" },
        { label: "Meet advisors", href: "/mentorship", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Opportunities",
        title: "Programs accepting applications",
        description: "Sorted by deadline and eligibility.",
        items: [
          { title: "STEM futures", description: "Support for students pursuing engineering, data, or environmental science." },
          { title: "Creative catalyst", description: "Micro-grants for artists, filmmakers, and cultural workers." },
          { title: "Community resilience", description: "Funding for neighborhood preparedness and mutual aid leaders." },
          { title: "Business accelerator", description: "Seed grants and coaching for early-stage entrepreneurs." },
        ],
      },
      {
        eyebrow: "Application tips",
        title: "Make your submission shine",
        description: "Advisors share what reviewers love to see.",
        bullets: [
          "Prepare a short personal statement highlighting your impact.",
          "Gather recommendation letters or community testimonials.",
          "Budget how funds will be used and the outcomes you expect.",
          "Attend our virtual Q&A sessions for live support.",
        ],
        cta: { label: "Book advising session", href: "/mentorship" },
      },
    ],
    resources: [
      { title: "Workshops", description: "Join grant-writing and financial planning labs.", href: "/workshops" },
      { title: "Career board", description: "Explore roles and internships aligned with your studies.", href: "/career" },
    ],
  },
  sitemap: {
    hero: {
      eyebrow: "Navigation",
      title: "Everything on Juana Díaz Hub",
      description:
        "Use this sitemap to explore every page, feature, and resource available across the platform.",
      image: {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        alt: "Website wireframes",
      },
      actions: [
        { label: "Return home", href: "/" },
        { label: "Need support?", href: "/contact", variant: "secondary" },
      ],
    },
    sections: [
      {
        eyebrow: "Explore",
        title: "Community & culture",
        description: "Discover people, places, and stories.",
        items: [
          { title: "Home", description: "Latest highlights and featured sections.", href: "/" },
          { title: "Explore", description: "Itineraries and neighborhood guides.", href: "/explore" },
          { title: "Culture", description: "Heritage, arts, and cultural programs.", href: "/culture" },
          { title: "Nightlife", description: "Safe, vibrant evening plans.", href: "/nightlife" },
          { title: "Gallery", description: "Curated photo essays from residents.", href: "/gallery" },
          { title: "Local stories", description: "Weekly features from community writers.", href: "/local-stories" },
        ],
      },
      {
        eyebrow: "Engage",
        title: "Get involved",
        description: "Join conversations, events, and programs.",
        items: [
          { title: "Forum", description: "Moderated community discussions.", href: "/forum" },
          { title: "Event calendar", description: "Upcoming happenings and RSVPs.", href: "/event-calendar" },
          { title: "This week", description: "Curated picks updated every Monday.", href: "/this-week" },
          { title: "Volunteer", description: "Sign up for service opportunities.", href: "/volunteer" },
          { title: "Workshops", description: "Hands-on learning sessions.", href: "/workshops" },
          { title: "Weekly challenges", description: "Community prompts and rewards.", href: "/weekly-challenges" },
        ],
      },
      {
        eyebrow: "Resources",
        title: "Tools & support",
        description: "Practical guides for residents and visitors.",
        items: [
          { title: "Directory", description: "Verified businesses and organizations.", href: "/directory" },
          { title: "Travel tips", description: "Plan transportation and lodging.", href: "/travel-tips" },
          { title: "Safety", description: "Emergency readiness and reporting.", href: "/safety" },
          { title: "Weather alerts", description: "Live updates and preparedness guidance.", href: "/weather-alerts" },
          { title: "Scholarships", description: "Financial aid and grants.", href: "/scholarships" },
          { title: "Public notices", description: "Official announcements and hearings.", href: "/public-notices" },
        ],
      },
    ],
    resources: [
      { title: "Privacy policy", description: "Understand how we handle your data.", href: "/privacy-policy" },
      { title: "Terms of service", description: "Review platform guidelines and policies.", href: "/terms" },
    ],
  },
};

