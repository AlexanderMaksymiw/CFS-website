"use client";
import Image from "next/image";
import Header from "../components/Header";

export default function SubPageHero({ title, images, subtitle }) {
  // Fallback images
  const defaultImages = ["/images/Ferrari Hero 2.jpg", "/images/M3.jpg"];
  const hero = images && images.length > 0 ? images : defaultImages;

  return (
    <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] bg-slate-900 overflow-hidden">
      <Header />

      {/* Hero Image with a subtle scale-in effect or just clean fill */}
      <Image
        src={hero[0]}
        className="object-cover object-center"
        alt={title}
        fill
        priority
      />

      {/* GRADIENT OVERLAY:
        Using Slate-900/80 at the bottom to blend into your page content 
        and Slate-900/40 at the top to make the Header legible.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40 z-10" />

      {/* CONTENT BOX */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-30 text-white">
        <div className="max-w-4xl space-y-2">
          {/* Subtle Accent Line */}
          <div className="w-12 h-1 bg-amber-400 mb-4" />

          {/* Breadcrumb or Subtitle (Optional but pro) */}
          {subtitle && (
            <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 block mb-2">
              {subtitle}
            </span>
          )}

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight italic leading-[0.8] drop-shadow-2xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Bottom Edge "Blade" - subtle decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10 z-30" />
    </section>
  );
}
