import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import { ThemeProvider } from "../components/providers/theme-provider";
import { LanguageProvider } from "../components/providers/language-context";

export const metadata = {
  title: "Juana Díaz Hub",
  description:
    "Your passport to Juana Díaz – explore culture, nightlife, community and events.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col bg-neutralLight text-neutralDark dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
              <Navbar />
              <main className="flex-1 container mx-auto px-4 pt-24 pb-12">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
