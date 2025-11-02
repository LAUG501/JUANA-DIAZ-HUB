// components/Card.tsx
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export type CardProps = {
  title?: string;
  imageUrl?: string;
  description?: string;
  href?: string;
  children?: ReactNode;
};

export default function Card({
  title,
  imageUrl,
  description,
  href,
  children,
}: CardProps) {
  const Wrapper: any = href ? Link : "div";
  const wrapperProps = href ? { href } : {};

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image src={imageUrl} alt={title ?? "image"} fill className="object-cover" priority />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
        {children ? (
          children
        ) : href ? (
          <Wrapper {...wrapperProps} className="text-primary font-semibold">
            Learn more →
          </Wrapper>
        ) : null}
      </div>
    </div>
  );
}
