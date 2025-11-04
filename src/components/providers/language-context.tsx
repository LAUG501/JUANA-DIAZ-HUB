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
      noAccount: "Don't have an account?",
      createAccount: "Create one",
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
  },
  es: {
    nav: {
      brand: "Juana Díaz Hub",
      items: [
        { href: "/", label: "Inicio" },
        { href: "/explore", label: "Explorar" },
        { href: "/forum", label: "Foro" },
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
      noAccount: "¿No tienes una cuenta?",
      createAccount: "Crea una",
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
