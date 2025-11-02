"use client";
import { ReactNode } from 'react';

/**
 * Generic card component. Use this for listing items such as blog posts,
 * directory entries, events, etc. Accepts children for flexible content.
 */
export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow dark:bg-neutralDark dark:text-neutralLight">
      {children}
    </div>
  );
}