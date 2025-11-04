// components/Card.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type CardProps = {
  title?: string;
  eyebrow?: string;
  imageUrl?: string;
  description?: string;
  href?: string;
  children?: ReactNode;
};

export default function Card({ title, eyebrow, imageUrl, description, href, children }: CardProps) {
  const content = (
    <>
      {imageUrl ? (
        <div className="relative h-44 w-full overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt={title ?? "Card image"}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 320px, 100vw"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-3">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {title ? <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3> : null}
        {description ? <p className="muted">{description}</p> : null}
        {children}
        {href && !children ? (
          <span className="mt-auto inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80 dark:text-secondary dark:hover:text-secondary/80">
            Learn more →
          </span>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="surface-card flex h-full flex-col gap-5">
        {content}
      </Link>
    );
  }

  return (
    <div className="surface-card flex h-full flex-col gap-5">
      {content}
    </div>
  );
}
