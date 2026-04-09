"use client";
import Image from "next/image";
import Header from "../components/Header";

// Added 'category' prop here
export default function SubPageHeroNews({ title, images, category = "News" }) {
  const defaultImages = ["/images/Ferrari Hero 2.jpg", "/images/M3.jpg"];
  const hero = images && images.length > 0 ? images : defaultImages;

  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] bg-slate-900 overflow-hidden">
      <Header />

      <Image src={hero[0]} className="object-cover" alt={title} fill priority />

      <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-30 text-white">
        <div className="max-w-5xl space-y-4">
          <div className="w-16 h-1.5 bg-amber-400" />

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight italic leading-[0.8] drop-shadow-2xl">
            {title}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
              Latest {category === "Road Trips" ? "Road Trips" : "News"}
            </span>
            <span className="w-8 h-px bg-white/20"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
              CFS Community
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5 z-30" />
    </section>
  );
}
