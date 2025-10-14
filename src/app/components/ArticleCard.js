"use client";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ title, description, image, link }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      {/* Image */}
      <Link href={link}>
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>
      </Link>

      {/* Text */}
      <div className="p-5 flex flex-col flex-grow">
        <Link href={link}>
          <h5 className="text-xl sm:text-2xl font-semibold mb-3 text-slate-800 dark:text-white leading-tight">
            {title}
          </h5>
        </Link>
        <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base flex-grow">
          {description}
        </p>

        <Link
          href={link}
          className="inline-block mt-4 px-4 py-2 bg-amber-300 text-slate-800 font-semibold text-sm rounded-xl hover:bg-amber-400 transition-colors self-start"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
