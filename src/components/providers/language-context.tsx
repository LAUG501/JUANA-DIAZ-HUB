"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type SupportedLanguage = "en" | "es";

type NavItem = {
  href: string;
  label: string;
};

type ToolbarIcon = "home" | "explore" | "events" | "forum" | "messages";

type ToolbarQuickLink = {
  label: string;
  description: string;
  href: string;
  icon: ToolbarIcon;
};

type Dictionary = {
  nav: {
    brand: string;
    items: NavItem[];
    mobileMenuLabel: string;
    searchPlaceholder: string;
    allPages: string;
    quickAccess: string;
    panelTitle: string;
    panelSubtitle: string;
    panelGuestSubtitle: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    stayConnected: string;
    newsletterHelper: string;
    placeholder: string;
    subscribeCta: string;
    copyrightSuffix: string;
    contactTitle: string;
    contactEmailLabel: string;
    contactPhoneLabel: string;
    contactAddressLabel: string;
    socialTitle: string;
    resourcesTitle: string;
    analyticsLink: string;
    waitlistLink: string;
    supportLink: string;
  };
  auth: {
    title: string;
    subtitle: string;
    emailLabel: string;
    passwordLabel: string;
    forgotPassword: string;
    signIn: string;
    signingIn: string;
    orContinue: string;
    google: string;
    facebook: string;
    noAccount: string;
    createAccount: string;
    ssoTitle: string;
    ssoSubtitle: string;
    manualTitle: string;
    manualSubtitle: string;
    tiktok: string;
    oauthError: string;
    passwordStrength: string;
    weak: string;
    medium: string;
    strong: string;
    requirements: string[];
    rememberMe: string;
    communityBadge: string;
    adminOnly: string;
    loginRequired: string;
    missingFields: string;
    invalidCredentials: string;
    notConfigured: string;
    serverError: string;
    contactAdmin: string;
  };
  actions: {
    themeToggle: string;
    languageToggle: string;
    english: string;
    spanish: string;
    openMenu: string;
    closeMenu: string;
    dashboard: string;
    signOut: string;
    lightMode: string;
    darkMode: string;
    settings: string;
    messages: string;
    courses: string;
    updates: string;
    viewDashboard: string;
    globalSettings: string;
    searchPlaceholder: string;
    noResults: string;
  };
  toolbar: {
    quickLinksTitle: string;
    quickLinksSubtitle: string;
    quickLinks: ToolbarQuickLink[];
    aiAssistant: string;
    aiNew: string;
    aiSubtitle: string;
    accountMenu: {
      accountName: string;
      handle: string;
      viewProfile: string;
      switchAccount: string;
      signOut: string;
      studio: string;
      premium: string;
      purchases: string;
      appearance: string;
      deviceTheme: string;
      language: string;
      english: string;
      restricted: string;
      location: string;
      locationValue: string;
      keyboard: string;
      settings: string;
      help: string;
      feedback: string;
      assistant: string;
      newLabel: string;
      globalSettings: string;
    };
  };
  forum: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
    };
    list: {
      activeTitle: string;
      replyLabel: string;
      likeLabel: string;
      empty: string;
      allTags: string;
    };
    composer: {
      title: string;
      description: string;
      titleLabel: string;
      titlePlaceholder: string;
      summaryLabel: string;
      summaryPlaceholder: string;
      detailsLabel: string;
      detailsPlaceholder: string;
      submit: string;
      submitting: string;
      error: string;
      tagsLabel: string;
      tagsPlaceholder: string;
      tagsHint: string;
      removeTag: string;
      tagCount: string;
    };
    reply: {
      title: string;
      description: string;
      placeholder: string;
      submit: string;
      submitting: string;
      error: string;
    };
    thread: {
      eyebrow: string;
      hostedBy: string;
      pinned: string;
    };
    like: {
      label: string;
      likedLabel: string;
      error: string;
    };
  };
  admin: {
    members: {
      title: string;
      description: string;
      searchPlaceholder: string;
      table: {
        name: string;
        email: string;
        role: string;
        provider: string;
        joined: string;
        locale: string;
        actions: string;
      };
      roleOptions: { user: string; moderator: string; admin: string };
      status: { updating: string; updated: string; error: string };
      empty: string;
    };
    moderation: {
      title: string;
      description: string;
      table: {
        thread: string;
        replies: string;
        likes: string;
        tags: string;
        actions: string;
      };
      remove: string;
      confirm: string;
      removed: string;
      error: string;
      empty: string;
    };
  };
};

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (language: SupportedLanguage) => void;
  dictionary: Dictionary;
};

const dictionaries: Record<SupportedLanguage, Dictionary> = {
  en: {
    nav: {
      brand: "Juana Díaz Hub",
      items: [
        { href: "/", label: "Home" },
        { href: "/explore", label: "Explore" },
        { href: "/forum", label: "Forum" },
        { href: "/messages", label: "Messages" },
        { href: "/nightlife", label: "Nightlife" },
        { href: "/culture", label: "Culture" },
        { href: "/safety", label: "Safety" },
        { href: "/travel-tips", label: "Travel Tips" },
        { href: "/directory", label: "Directory" },
        { href: "/event-calendar", label: "Events" },
        { href: "/event-calendar/full", label: "Calendar overview" },
        { href: "/blog", label: "Blog" },
        { href: "/about-us", label: "About Us" },
        { href: "/about-us/juana-diaz", label: "History" },
        { href: "/waiting-list", label: "Waiting List" },
        { href: "/analytics", label: "Analytics" },
        { href: "/ai-assistant", label: "AI Assistant" },
        { href: "/ai-lab", label: "AI Lab" },
        { href: "/school", label: "School" },
        { href: "/contact", label: "Contact" },
        { href: "/login", label: "Sign In" },
      ],
      mobileMenuLabel: "Open menu",
      searchPlaceholder: "Search navigation",
      allPages: "All pages",
      quickAccess: "Browse everything",
      panelTitle: "Your hub",
      panelSubtitle: "Welcome back, {name}!",
      panelGuestSubtitle: "Sign in to unlock your personalized hub.",
    },
    footer: {
      tagline:
        "Your passport to Juana Díaz. Discover culture, nightlife, community and more.",
      quickLinks: "Quick Links",
      stayConnected: "Stay Connected",
      newsletterHelper: "Subscribe to our newsletter for weekly updates and challenges.",
      placeholder: "Email address",
      subscribeCta: "Subscribe",
      copyrightSuffix: "All rights reserved.",
      contactTitle: "Contact",
      contactEmailLabel: "Email",
      contactPhoneLabel: "Phone",
      contactAddressLabel: "Address",
      socialTitle: "Social",
      resourcesTitle: "Resources",
      analyticsLink: "Community analytics",
      waitlistLink: "Join the waitlist",
      supportLink: "Support center",
    },
    auth: {
      title: "Welcome back",
      subtitle:
        "Sign in to access community discussions, events, and curated local resources.",
      emailLabel: "Email",
      passwordLabel: "Password",
      forgotPassword: "Forgot password?",
      signIn: "Sign in",
      signingIn: "Signing in...",
      orContinue: "Or continue with",
      google: "Google",
      facebook: "Facebook",
      tiktok: "TikTok",
      noAccount: "Don't have an account?",
      createAccount: "Create one",
      ssoTitle: "Single sign-on",
      ssoSubtitle: "Use a trusted provider to unlock your learning hub instantly.",
      manualTitle: "Use your community credentials",
      manualSubtitle: "Administrators can also sign in with their secure password.",
      passwordStrength: "Password strength",
      weak: "Weak",
      medium: "Medium",
      strong: "Strong",
      requirements: [
        "Use at least 8 characters.",
        "Add numbers or symbols.",
        "Mix uppercase and lowercase letters.",
      ],
      rememberMe: "Remember me",
      communityBadge: "Community Access",
      adminOnly: "Administrator Access Only",
      loginRequired: "Please sign in to access the admin dashboard.",
      missingFields: "Enter both email and password to continue.",
      invalidCredentials: "Invalid email or password. Please try again.",
      notConfigured: "Admin login is not configured yet. Contact your developer.",
      serverError: "We couldn't complete your request. Try again shortly.",
      contactAdmin: "Contact support to reset your access.",
      oauthError: "We couldn't complete the single sign-on flow. Try again or use credentials.",
    },
    actions: {
      themeToggle: "Toggle theme",
      languageToggle: "Switch language",
      english: "English",
      spanish: "Español",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      dashboard: "Dashboard",
      signOut: "Sign out",
      lightMode: "Switch to light mode",
      darkMode: "Switch to dark mode",
      settings: "Settings",
      messages: "Messages",
      courses: "Courses",
      updates: "Updates",
      viewDashboard: "View dashboard",
      globalSettings: "Global preferences",
      searchPlaceholder: "Search navigation",
      noResults: "No matching pages yet.",
    },
    toolbar: {
      quickLinksTitle: "Popular right now",
      quickLinksSubtitle: "Jump back into the spaces neighbors are exploring.",
      quickLinks: [
        { label: "Home", description: "Community overview", href: "/", icon: "home" },
        { label: "Explore", description: "Guides & culture", href: "/explore", icon: "explore" },
        { label: "Events", description: "Calendar & RSVPs", href: "/event-calendar", icon: "events" },
        { label: "Forum", description: "Messages & channels", href: "/forum", icon: "forum" },
      ],
      aiAssistant: "AI Assistant",
      aiNew: "New",
      aiSubtitle: "Meet our bilingual concierge for quick answers.",
      accountMenu: {
        accountName: "LEARN AS U GROW 501",
        handle: "@LearnAsUGrow501",
        viewProfile: "View your profile",
        switchAccount: "Switch account",
        signOut: "Sign out",
        studio: "JD Studio",
        premium: "Your Premium benefits",
        purchases: "Purchases and memberships",
        appearance: "Appearance",
        deviceTheme: "Device theme",
        language: "Language",
        english: "English",
        restricted: "Restricted Mode: Off",
        location: "Location",
        locationValue: "Puerto Rico",
        keyboard: "Keyboard shortcuts",
        settings: "Settings",
        help: "Help",
        feedback: "Send feedback",
        assistant: "AI Assistant",
        newLabel: "New",
        globalSettings: "Settings & privacy",
      },
    },
    forum: {
      hero: {
        eyebrow: "Community forum",
        title: "Build in public, together",
        description:
          "Swap ideas, share progress, and learn from neighbors accelerating Juana Díaz with AI, design, and civic action.",
      },
      list: {
        activeTitle: "Active threads",
        replyLabel: "{count} replies",
        likeLabel: "{count} appreciations",
        empty: "Be the first to spark a conversation!",
        allTags: "All tags",
      },
      composer: {
        title: "Start a new conversation",
        description: "Share what you are building with AI, ask for collaborators, or announce a community project.",
        titleLabel: "Title",
        titlePlaceholder: "Share your AI-powered idea",
        summaryLabel: "Summary",
        summaryPlaceholder: "One-line overview for readers",
        detailsLabel: "Details",
        detailsPlaceholder: "Describe your question, share resources, or invite collaboration.",
        submit: "Publish thread",
        submitting: "Posting...",
        error: "Unable to create thread.",
        tagsLabel: "Tags",
        tagsPlaceholder: "Add or search for tags",
        tagsHint: "{count} slots remaining",
        removeTag: "Remove tag {tag}",
        tagCount: "{count} threads",
      },
      reply: {
        title: "Add your voice",
        description: "Keep it respectful and actionable for fellow builders.",
        placeholder: "Share updates, attach links, or encourage next steps.",
        submit: "Post reply",
        submitting: "Posting...",
        error: "Unable to post reply.",
      },
      thread: {
        eyebrow: "Community thread",
        hostedBy: "Hosted by {name}",
        pinned: "Pinned conversation starter",
      },
      like: {
        label: "Appreciate · {count}",
        likedLabel: "Appreciated · {count}",
        error: "Unable to update appreciation.",
      },
    },
    admin: {
      members: {
        title: "Member directory",
        description: "Review roles, providers, and locales for everyone who has access to the hub.",
        searchPlaceholder: "Filter by name or email",
        table: {
          name: "Name",
          email: "Email",
          role: "Role",
          provider: "Provider",
          joined: "Joined",
          locale: "Locale",
          actions: "Actions",
        },
        roleOptions: { user: "Learner", moderator: "Moderator", admin: "Administrator" },
        status: {
          updating: "Saving...",
          updated: "Role updated",
          error: "Unable to update role",
        },
        empty: "No members yet. Invite neighbors via Google, Facebook, or TikTok sign-in.",
      },
      moderation: {
        title: "Forum moderation",
        description: "Keep conversations healthy by reviewing threads with tags, replies, and appreciation counts.",
        table: {
          thread: "Thread",
          replies: "Replies",
          likes: "Appreciations",
          tags: "Tags",
          actions: "Actions",
        },
        remove: "Archive thread",
        confirm: "Archive this thread? It will remove replies and likes for everyone.",
        removed: "Thread archived",
        error: "Unable to archive thread.",
        empty: "No threads available yet.",
      },
    },
  },
  es: {
    nav: {
      brand: "Juana Díaz Hub",
      items: [
        { href: "/", label: "Inicio" },
        { href: "/explore", label: "Explorar" },
        { href: "/forum", label: "Foro" },
        { href: "/messages", label: "Mensajes" },
        { href: "/nightlife", label: "Vida Nocturna" },
        { href: "/culture", label: "Cultura" },
        { href: "/safety", label: "Seguridad" },
        { href: "/travel-tips", label: "Consejos de Viaje" },
        { href: "/directory", label: "Directorio" },
        { href: "/event-calendar", label: "Eventos" },
        { href: "/event-calendar/full", label: "Calendario completo" },
        { href: "/blog", label: "Blog" },
        { href: "/about-us", label: "Sobre Nosotros" },
        { href: "/about-us/juana-diaz", label: "Historia" },
        { href: "/waiting-list", label: "Lista de espera" },
        { href: "/analytics", label: "Analítica" },
        { href: "/ai-assistant", label: "Asistente IA" },
        { href: "/ai-lab", label: "Laboratorio IA" },
        { href: "/school", label: "Escuela" },
        { href: "/contact", label: "Contacto" },
        { href: "/login", label: "Iniciar Sesión" },
      ],
      mobileMenuLabel: "Abrir menú",
      searchPlaceholder: "Buscar en la navegación",
      allPages: "Todas las páginas",
      quickAccess: "Explora todo",
      panelTitle: "Tu panel",
      panelSubtitle: "Bienvenido de nuevo, {name}!",
      panelGuestSubtitle: "Inicia sesión para activar tu panel personalizado.",
    },
    footer: {
      tagline:
        "Tu pasaporte a Juana Díaz. Descubre cultura, vida nocturna, comunidad y más.",
      quickLinks: "Enlaces rápidos",
      stayConnected: "Mantente conectado",
      newsletterHelper:
        "Suscríbete a nuestro boletín para recibir retos y novedades semanales.",
      placeholder: "Correo electrónico",
      subscribeCta: "Suscribirse",
      copyrightSuffix: "Todos los derechos reservados.",
      contactTitle: "Contacto",
      contactEmailLabel: "Correo",
      contactPhoneLabel: "Teléfono",
      contactAddressLabel: "Dirección",
      socialTitle: "Redes",
      resourcesTitle: "Recursos",
      analyticsLink: "Analítica comunitaria",
      waitlistLink: "Únete a la lista",
      supportLink: "Centro de apoyo",
    },
    auth: {
      title: "Bienvenido de nuevo",
      subtitle:
        "Inicia sesión para acceder a las discusiones, eventos y recursos locales seleccionados.",
      emailLabel: "Correo electrónico",
      passwordLabel: "Contraseña",
      forgotPassword: "¿Olvidaste tu contraseña?",
      signIn: "Iniciar sesión",
      signingIn: "Iniciando...",
      orContinue: "O continúa con",
      google: "Google",
      facebook: "Facebook",
      tiktok: "TikTok",
      noAccount: "¿No tienes una cuenta?",
      createAccount: "Crea una",
      ssoTitle: "Inicio de sesión unificado",
      ssoSubtitle: "Conéctate con un proveedor confiable y accede al instante.",
      manualTitle: "Usa tus credenciales comunitarias",
      manualSubtitle: "Los administradores también pueden ingresar con su contraseña segura.",
      passwordStrength: "Fortaleza de la contraseña",
      weak: "Débil",
      medium: "Media",
      strong: "Fuerte",
      requirements: [
        "Usa al menos 8 caracteres.",
        "Añade números o símbolos.",
        "Combina letras mayúsculas y minúsculas.",
      ],
      rememberMe: "Recordarme",
      communityBadge: "Acceso a la comunidad",
      adminOnly: "Solo para administradores",
      loginRequired: "Inicia sesión para acceder al panel de administración.",
      missingFields: "Ingresa correo y contraseña para continuar.",
      invalidCredentials: "Correo o contraseña inválidos. Intenta nuevamente.",
      notConfigured: "El acceso de administrador aún no está configurado. Contacta al desarrollador.",
      serverError: "No pudimos completar tu solicitud. Intenta más tarde.",
      contactAdmin: "Contacta soporte para restablecer tu acceso.",
      oauthError: "No pudimos completar el acceso con proveedor. Intenta otra vez o usa tus credenciales.",
    },
    actions: {
      themeToggle: "Cambiar tema",
      languageToggle: "Cambiar idioma",
      english: "English",
      spanish: "Español",
      openMenu: "Abrir navegación",
      closeMenu: "Cerrar navegación",
      dashboard: "Panel",
      signOut: "Cerrar sesión",
      lightMode: "Cambiar a modo claro",
      darkMode: "Cambiar a modo oscuro",
      settings: "Configuración",
      messages: "Mensajes",
      courses: "Cursos",
      updates: "Actualizaciones",
      viewDashboard: "Ver panel",
      globalSettings: "Preferencias globales",
      searchPlaceholder: "Buscar en la navegación",
      noResults: "No hay páginas que coincidan.",
    },
    toolbar: {
      quickLinksTitle: "Populares ahora",
      quickLinksSubtitle: "Regresa a los espacios que la comunidad está visitando.",
      quickLinks: [
        { label: "Inicio", description: "Resumen comunitario", href: "/", icon: "home" },
        { label: "Explorar", description: "Guías y cultura", href: "/explore", icon: "explore" },
        { label: "Eventos", description: "Calendario y registros", href: "/event-calendar", icon: "events" },
        { label: "Foro", description: "Mensajes y canales", href: "/forum", icon: "forum" },
      ],
      aiAssistant: "Asistente IA",
      aiNew: "Nuevo",
      aiSubtitle: "Conoce a nuestro concierge bilingüe para respuestas rápidas.",
      accountMenu: {
        accountName: "LEARN AS U GROW 501",
        handle: "@LearnAsUGrow501",
        viewProfile: "Ver tu perfil",
        switchAccount: "Cambiar de cuenta",
        signOut: "Cerrar sesión",
        studio: "JD Studio",
        premium: "Tus beneficios Premium",
        purchases: "Compras y membresías",
        appearance: "Apariencia",
        deviceTheme: "Tema del dispositivo",
        language: "Idioma",
        english: "Inglés",
        restricted: "Modo restringido: Desactivado",
        location: "Ubicación",
        locationValue: "Puerto Rico",
        keyboard: "Atajos de teclado",
        settings: "Configuración",
        help: "Ayuda",
        feedback: "Enviar comentarios",
        assistant: "Asistente IA",
        newLabel: "Nuevo",
        globalSettings: "Configuración y privacidad",
      },
    },
    forum: {
      hero: {
        eyebrow: "Foro comunitario",
        title: "Construyan en público, juntos",
        description:
          "Intercambia ideas, comparte avances y aprende de vecinas que impulsan Juana Díaz con IA, diseño y acción cívica.",
      },
      list: {
        activeTitle: "Conversaciones activas",
        replyLabel: "{count} respuestas",
        likeLabel: "{count} reconocimientos",
        empty: "¡Sé la primera persona en iniciar una conversación!",
        allTags: "Todas las etiquetas",
      },
      composer: {
        title: "Inicia una nueva conversación",
        description: "Comparte lo que construyes con IA, busca colaboradoras o anuncia un proyecto comunitario.",
        titleLabel: "Título",
        titlePlaceholder: "Comparte tu idea impulsada por IA",
        summaryLabel: "Resumen",
        summaryPlaceholder: "Una línea para despertar interés",
        detailsLabel: "Detalles",
        detailsPlaceholder: "Describe tu pregunta, comparte recursos o invita a colaborar.",
        submit: "Publicar hilo",
        submitting: "Publicando...",
        error: "No se pudo crear el hilo.",
        tagsLabel: "Etiquetas",
        tagsPlaceholder: "Añade o busca etiquetas",
        tagsHint: "Quedan {count} espacios",
        removeTag: "Eliminar etiqueta {tag}",
        tagCount: "{count} hilos",
      },
      reply: {
        title: "Añade tu voz",
        description: "Mantén el respeto y brinda pasos accionables para otras personas constructoras.",
        placeholder: "Comparte actualizaciones, enlaces o próximos pasos.",
        submit: "Publicar respuesta",
        submitting: "Publicando...",
        error: "No se pudo publicar la respuesta.",
      },
      thread: {
        eyebrow: "Conversación comunitaria",
        hostedBy: "Organizado por {name}",
        pinned: "Inicio de conversación destacado",
      },
      like: {
        label: "Apreciar · {count}",
        likedLabel: "Apreciado · {count}",
        error: "No se pudo actualizar el reconocimiento.",
      },
    },
    admin: {
      members: {
        title: "Directorio de miembros",
        description: "Revisa roles, proveedores y ubicaciones de quienes acceden al hub.",
        searchPlaceholder: "Filtra por nombre o correo",
        table: {
          name: "Nombre",
          email: "Correo",
          role: "Rol",
          provider: "Proveedor",
          joined: "Ingreso",
          locale: "Idioma",
          actions: "Acciones",
        },
        roleOptions: { user: "Aprendiz", moderator: "Moderadora", admin: "Administradora" },
        status: {
          updating: "Guardando...",
          updated: "Rol actualizado",
          error: "No se pudo actualizar el rol",
        },
        empty: "Aún no hay miembros. Invita vecinas con acceso Google, Facebook o TikTok.",
      },
      moderation: {
        title: "Moderación del foro",
        description: "Cuida las conversaciones revisando hilos con etiquetas, respuestas y reconocimientos.",
        table: {
          thread: "Hilo",
          replies: "Respuestas",
          likes: "Reconocimientos",
          tags: "Etiquetas",
          actions: "Acciones",
        },
        remove: "Archivar hilo",
        confirm: "¿Archivar este hilo? Se eliminarán respuestas y reconocimientos.",
        removed: "Hilo archivado",
        error: "No se pudo archivar el hilo.",
        empty: "Aún no hay hilos disponibles.",
      },
    },
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "jd-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SupportedLanguage>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
    if (stored === "en" || stored === "es") {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const dictionary = useMemo(() => dictionaries[language], [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      dictionary,
    }),
    [language, dictionary]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
