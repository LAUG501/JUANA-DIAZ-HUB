"use client";

import Link from 'next/link';

/**
 * Navigation bar component.
 * Displays the site logo and main navigation links. Uses Tailwind for styling.
 */
export default function Navbar() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/forum', label: 'Forum' },
    { href: '/nightlife', label: 'Nightlife' },
    { href: '/culture', label: 'Culture' },
    { href: '/safety', label: 'Safety' },
    { href: '/travel-tips', label: 'Travel Tips' },
    { href: '/directory', label: 'Directory' },
    { href: '/event-calendar', label: 'Events' },
    { href: '/blog', label: 'Blog' },
    { href: '/about-us', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-neutralLight text-neutralDark shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold font-accent text-primary">
          Juana Diaz Hub
        </Link>
        <ul className="hidden md:flex space-x-4 text-sm font-semibold">
          {navItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}