"use client";
import Link from 'next/link';

/**
 * Hero section for the home page. Displays a headline, subheadline and call-to-action buttons.
 */
export default function Hero() {
  return (
    <section className="bg-neutralLight text-neutralDark py-12 md:py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Welcome to Juana Diaz Hub
          </h1>
          <p className="text-lg mb-6">
            Your passport to the culture, nightlife, and community of Juana Diaz, Puerto Rico. Explore local businesses, connect with residents, discover events and plan your visit.
          </p>
          <div className="flex space-x-4">
            <Link href="/explore" className="px-5 py-3 rounded bg-primary text-neutralLight font-semibold hover:bg-primary/90">
              Explore Now
            </Link>
            <Link href="/forum" className="px-5 py-3 rounded border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-neutralLight">
              Join the Forum
            </Link>
          </div>
        </div>
        <div className="flex-1">
          {/* Placeholder for hero image/video. Replace src with actual asset */}
          <div className="h-64 md:h-80 bg-neutralDark/10 rounded-lg flex items-center justify-center">
            <span className="text-neutralDark/50">Hero Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}