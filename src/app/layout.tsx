import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Juana Diaz Hub',
  description: 'Your passport to Juana Diaz – explore culture, nightlife, community and events.',
  icons: {
    icon: '/favicon.ico'
  },
};

/**
 * Root layout applied to all pages. Wraps content with Navbar and Footer.
 */
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-neutralLight text-neutralDark">
        <Navbar />
        <main className="flex-1 container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}