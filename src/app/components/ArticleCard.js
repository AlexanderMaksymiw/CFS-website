"use client"; // if using Next.js 13+ app directory

import Image from "next/image";

export default function ArticleCard({ title, description, image, link }) {
  return (
    <div className=" flex flex-col justify-between h-full bg-white w-full max-w-full border-gray-200  shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <a href={link}>
        <Image
          src={image}
          alt={title}
          width={800} // approximate width
          height={450} // approximate height
          className="w-full h-auto object-cover"
          priority
        />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 bg-amber-300 text-slate-800 rounded-2xl hover:bg-amber-400 cursor-pointer p-2 font-semibold text-sm"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
