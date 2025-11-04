import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserToolbar from "../components/UserToolbar";
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
            <div className="min-h-screen bg-neutralLight text-neutralDark transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
              <div className="flex min-h-screen">
                <Navbar />
                <div className="flex min-h-screen flex-1 flex-col">
                  <UserToolbar />
                  <main className="flex-1">
                    <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8 lg:px-12">{children}</div>
                  </main>
                  <Footer />
                </div>
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
