"use client";

import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function MyPageHeader({
  title,
  description,
  imageSrc,
  imageAlt = "Header image",
}: PageHeaderProps) {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-8">
        {/* Text */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={300}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
