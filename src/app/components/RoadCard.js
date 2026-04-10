"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoadCard({ title, description, image, link }) {
  return (
    <Link href={link} className="group block relative overflow-hidden">
      <div className="relative w-full h-125 md:h-150 bg-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-102"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 bg-amber-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                Route Map Included
              </span>
            </div>

            <h5 className="text-3xl md:text-4xl font-black text-white leading-none uppercase tracking-tight italic antialiased group-hover:text-amber-400 transition-colors max-w-[90%]">
              {title}
            </h5>

            <p className="text-sm md:text-base line-clamp-2 text-slate-300 font-medium tracking-tight max-w-sm opacity-90">
              {description}
            </p>
          </div>
        </div>

        <div className="absolute top-8 right-8 border border-white/10 px-3 py-1">
          <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">
            CFS / EXPLORE
          </span>
        </div>
      </div>
    </Link>
  );
}
