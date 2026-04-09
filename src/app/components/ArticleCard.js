"use client";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ title, description, image, link }) {
  return (
    <Link href={link} className="group flex flex-col bg-white overflow-hidden">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Amber Corner Accent on Hover */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-amber-400 border-l-[40px] border-l-transparent translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
      </div>

      {/* Text Content */}
      <div className="py-6 flex flex-col grow">
        <h5 className="text-xl font-black mb-3 text-slate-900 leading-tight uppercase tracking-tight italic group-hover:text-amber-500 transition-colors">
          {title}
        </h5>

        <p className="text-slate-600 text-sm line-clamp-2 font-medium leading-relaxed tracking-tight grow">
          {description}
        </p>

        {/* Read More link aesthetic */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
            Read Article
          </span>
          <div className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-amber-400 transition-all" />
        </div>
      </div>
    </Link>
  );
}
