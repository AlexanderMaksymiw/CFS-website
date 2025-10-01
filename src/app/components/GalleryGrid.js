"use client";

import Image from "next/image";

export default function GalleryGrid({ images }) {
  return (
    <div className="px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-120 overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
