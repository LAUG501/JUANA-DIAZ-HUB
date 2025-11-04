"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type SupportedLanguage = "en" | "es";

type NavItem = {
  href: string;
  label: string;
};

type Dictionary = {
  nav: {
    brand: string;
    items: NavItem[];
    mobileMenuLabel: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    stayConnected: string;
    newsletterHelper: string;
    placeholder: string;
    subscribeCta: string;
    copyrightSuffix: string;
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
        { href: "/blog", label: "Blog" },
        { href: "/about-us/juana-diaz/", label: "History" },
        { href: "/about-us", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/login", label: "Sign In" },
      ],
      mobileMenuLabel: "Open menu",
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
        { href: "/blog", label: "Blog" },
        { href: "/about-us/juana-diaz/", label: "Historia" },
        { href: "/about-us", label: "Sobre Nosotros" },
        { href: "/contact", label: "Contacto" },
        { href: "/login", label: "Iniciar Sesión" },
      ],
      mobileMenuLabel: "Abrir menú",
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
