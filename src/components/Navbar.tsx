"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * Navigation bar component.
 * Responsive, mobile-friendly with dropdown toggle.
 * Includes link to /about/juana-diaz page.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
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
    { href: "/about-us/juana-diaz/", label: "History" }, // ✅ History of
    { href: "/about-us", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold font-accent text-indigo-700 tracking-tight hover:text-indigo-500 transition"
        >
          Juana Díaz Hub
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-indigo-700 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3 text-sm font-medium shadow-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-gray-800 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
