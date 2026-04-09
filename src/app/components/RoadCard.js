"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoadCard({ title, description, image, link }) {
  return (
    <Link href={link} className="group block relative overflow-hidden">
      <div className="relative w-full h-[500px] md:h-[600px] bg-slate-900">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-102"
          priority
        />

        {/* HEAVIER GRADIENT: 
           This allows smaller text to be perfectly legible without needing to be massive.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 bg-amber-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                Route Map Included
              </span>
            </div>

            {/* Tuned down the size from 5xl to 3xl/4xl 
               Increased leading slightly so the italics don't clash 
            */}
            <h5 className="text-3xl md:text-4xl font-black text-white leading-[1] uppercase tracking-tight italic antialiased group-hover:text-amber-400 transition-colors max-w-[90%]">
              {title}
            </h5>

            <p className="text-sm md:text-base line-clamp-2 text-slate-300 font-medium tracking-tight max-w-sm opacity-90">
              {description}
            </p>
          </div>
        </div>

        {/* Muted top-right detail */}
        <div className="absolute top-8 right-8 border border-white/10 px-3 py-1">
          <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">
            CFS / EXPLORE
          </span>
        </div>
      </div>
    </Link>
  );
}
