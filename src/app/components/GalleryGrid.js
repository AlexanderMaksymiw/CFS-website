"use client";

import Image from "next/image";

export default function GalleryGrid({ images }) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-6 lg:px-8 py-10 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden"
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
