"use client";
import Image from "next/image";
import Link from "next/link";

export default function NextRoadTrip({ img, title, text, button, href }) {
  return (
    <div className="group h-125 md:h-150 relative bg-slate-900 overflow-hidden  transition-all duration-500">
      {/* Background Image */}
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105 opacity-60 md:opacity-75"
        priority
      />

      {/* Industrial Gradient: Heavier on mobile for readability */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent md:bg-linear-to-r md:from-slate-900 md:via-slate-900/20 md:to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 text-white">
        <div className="max-w-3xl space-y-4 md:space-y-6">
          <div className="flex">
            <span className="px-2 py-1 text-[9px] md:text-[10px] font-black tracking-[0.3em] bg-amber-400 text-slate-900 uppercase italic">
              Featured Trip
            </span>
          </div>

          <h2 className="text-5xl md:text-5xl font-black tracking-tight leading-[0.8] uppercase ">
            {title}
          </h2>

          {/* Condensed Intro Text */}
          <p className="text-sm md:text-xl text-gray-200 max-w-xl font-medium leading-snug md:leading-relaxed opacity-90 border-l-2 border-amber-400 pl-4">
            {text}
          </p>

          <div className="pt-4">
            <Link href={href}>
              <button className="group/btn relative bg-white hover:bg-amber-400 text-slate-900 font-black uppercase text-xs md:text-sm tracking-widest py-4 px-8 md:px-10 transition-all duration-300 flex items-center gap-3">
                {button}
                <span className="transition-transform duration-300 group-hover/btn:translate-x-2">
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
