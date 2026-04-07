"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoadCard({ title, description, image, link }) {
  return (
    <Link href={link} className="block">
      <div className="relative w-full h-48 sm:h-56 md:h-90 lg:h-120 overflow-hidden rounded-xl">
        {/* Image */}
        <Image src={image} alt={title} fill className="object-cover" priority />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-5">
          <h5 className="text-xl font-semibold mb-1 text-white leading-tight">
            {title}
          </h5>
          <p className="text-sm line-clamp-2 lg:text-base text-white">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
