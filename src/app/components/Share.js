"use client";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import { SocialIcon } from "react-social-icons";

export default function Share() {
  return (
    <section className="relative bg-amber-400 py-20 overflow-hidden">
      {/* Background Decorative Element: Large faded text */}
      <div className="absolute top-0 right-0 text-[15rem] font-black text-black/5 leading-none select-none pointer-events-none translate-x-20 -translate-y-10">
        GALLERY
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-black font-black uppercase tracking-[0.3em] text-xs">
              Community Driven
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.8] uppercase tracking-tighter antialiased">
              Your CFS <br />
              <span className="italic">Moments</span>
            </h2>
          </div>

          <div className="max-w-xs">
            <p className="text-black font-bold text-sm leading-tight uppercase tracking-tight">
              Tag your shots with{" "}
              <span className="bg-black text-amber-400 px-1">
                #carfarmsocial
              </span>{" "}
              for a chance to be featured on the main feed.
            </p>
          </div>
        </div>

        {/* The Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* LEFT: Featured Static Shot */}
          <div className="md:col-span-5 relative group h-100 md:h-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-black transition-transform hover:-rotate-1">
            <Image
              src="/images/subaru-couple.jpg"
              alt="Subaru Couple"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>

          {/* RIGHT: The Live Slideshow */}
          <div className="md:col-span-7 relative h-125 rounded-3xl overflow-hidden shadow-2xl border-4 border-black rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0">
              <Slideshow
                images={[
                  "/images/silver-e30.jpg",
                  "/images/bmw-exit.jpg",
                  "/images/subaru-red.jpg",
                  "/images/tvr-chimaera.jpg",
                  "/images/ww2.jpg",
                  "/images/beetle.jpg",
                  "/images/205-leaving.jpg",
                  "/images/evo-6.jpg",
                  "/images/toyota-yaris.jpg",
                ]}
              />
            </div>
            {/* "Live View" Overlay */}
            <div className="absolute bottom-6 right-6 bg-black text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest z-30">
              Next Slide →
            </div>
          </div>
        </div>

        {/* Footer: Social Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t-4 border-black pt-8 gap-8">
          <div className="flex gap-4">
            {[
              "https://facebook.com/...",
              "https://instagram.com/...",
              "https://youtube.com/...",
            ].map((url, i) => (
              <SocialIcon
                key={i}
                url={url}
                bgColor="#000000"
                fgColor="#fbbf24" // This matches amber-400
                style={{ height: 45, width: 45 }}
                className="hover:scale-110 transition-transform"
              />
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-black font-black uppercase text-xl tracking-tighter">
              Join the 4,000+ members online
            </p>
            <p className="text-black/60 text-xs font-bold uppercase tracking-widest">
              Facebook Group • Instagram • YouTube
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
