"use client";

import Link from 'next/link';

/**
 * Footer component.
 * Contains site navigation, social links, and a short tagline.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutralDark text-neutralLight mt-12">
      <div className="container mx-auto py-8 px-4 grid gap-6 grid-cols-1 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg mb-2 text-primary">Juana Diaz Hub</h3>
          <p className="text-sm">Your passport to Juana Diaz. Discover culture, nightlife, community and more.</p>
        </div>
        <div>
          <h4 className="font-heading mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about-us" className="hover:text-primary">About</Link></li>
            <li><Link href="/directory" className="hover:text-primary">Directory</Link></li>
            <li><Link href="/event-calendar" className="hover:text-primary">Events</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading mb-2">Stay Connected</h4>
          <p className="text-sm mb-2">Subscribe to our newsletter for weekly updates and challenges.</p>
          {/* Note: Replace with actual form integration (e.g., Mailchimp) */}
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-2 py-1 rounded-l bg-neutralLight text-neutralDark border-none focus:outline-none"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded-r bg-primary text-neutralLight font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-neutralLight/20">
        &copy; {year} Juana Diaz Hub. All rights reserved.
      </div>
    </footer>
  );
}