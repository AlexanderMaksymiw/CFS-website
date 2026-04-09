"use client";
import Image from "next/image";
import Link from "next/link";

export default function Content({ img, title, text, button, href }) {
  return (
    <div className="group h-[500px] rounded-2xl relative bg-slate-900 overflow-hidden shadow-lg border border-white/5">
      {/* Image with a subtle zoom effect on hover */}
      <Image
        src={img}
        alt={title}
        fill
        className=" opacity-60 transition-transform duration-700 group-hover:scale-102"
      />

      {/* Modern Gradient Overlay to ensure text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Content anchored to the bottom left for a magazine feel */}
      <div className="absolute bottom-10 left-10 right-10 text-white space-y-4 z-10">
        <h2 className="text-white text-5xl font-black uppercase tracking-tight leading-none italic">
          {title}
        </h2>

        <p className="text-gray-200 max-w-md font-medium text-base leading-relaxed opacity-90">
          {text}
        </p>

        <div className="pt-2">
          <Link href={href}>
            <button className="bg-white hover:bg-red-600 hover:text-white text-slate-900 font-black py-3 px-6 rounded-lg transition-all cursor-pointer uppercase text-[10px] tracking-[0.2em]">
              {button}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
