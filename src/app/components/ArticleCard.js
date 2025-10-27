"use client";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ title, description, image, link }) {
  return (
    <div className="flex flex-col bg-white border rounded-t-xl border-gray-200 shadow-indigo-200 shadow-md overflow-hidden pb-5">
      {/* Image */}
      <Link href={link}>
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80  overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>

        {/* Text */}
        <div className="p-5 flex flex-col flex-grow">
          <h5 className="text-xl  font-semibold mb-3 text-slate-800 leading-tight">
            {title}
          </h5>

          <p className="text-slate-600 text-sm line-clamp-2 lg:text-base flex-grow">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
