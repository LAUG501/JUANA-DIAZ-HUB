// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gray-900 text-white">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Plaza_Rom%C3%A1n_Baldorioty_de_Castro_-_Juana_Diaz%2C_PR_%282025%29-1.jpg?auto=format&fit=crop&w=1800&q=60"
        alt="Puerto Rico coastline"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="relative z-10 px-6 py-24 md:px-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Juana Díaz Hub</h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-100">
          Gateway for businesses, events, services, and community life across Puerto Rico.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/directory" className="rounded-xl bg-white text-gray-900 px-5 py-3 font-semibold">
            Explore Directory
          </Link>
          <Link href="/events" className="rounded-xl bg-primary px-5 py-3 font-semibold">
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
}
