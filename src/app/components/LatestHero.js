"use client";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SubPageHero({
  title,
  image,
  articleTitle,
  articleIntro,
  link,
}) {
  const defaultImages = ["/images/Ferrari Hero 2.jpg", "/images/M3.jpg"];
  const hero = image && image.length > 0 ? image : defaultImages;

  return (
    <div>
      <Header />

      {/* Container handles both mobile & desktop layouts */}
      <div className="relative flex flex-col md:flex-row h-auto md:h-[600px]">

        {/*  Background image for all devices */}
        <div className="absolute inset-0 md:static">
          <Image
            src={hero[0]}
            alt={articleTitle || "Hero image"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ✅ Translucent overlay only visible on mobile */}
        <div className="absolute inset-0 bg-slate-800/10 md:hidden"></div>

        {/* Text section */}
        <div className="relative z-10 flex-1 flex pt-30 items-center justify-center px-8 py-16 md:py-0 bg-slate-800/70 md:bg-slate-800 md:static">
          <div className="text-left max-w-xl">
            <h3 className="text-white text-base pb-4 uppercase tracking-wide">
              Latest
            </h3>
            <h2 className="text-white text-4xl md:text-5xl pb-4 font-semibold leading-tight">
              {articleTitle}
            </h2>
            <h3 className="text-white text-base md:text-lg max-w-md leading-relaxed">
              {articleIntro}
            </h3>
            <div className="pt-6">
              <a href={link}>
                <button className="bg-amber-300 text-slate-800 hover:bg-amber-400 cursor-pointer px-5 py-2 font-semibold text-sm rounded-2xl transition-colors duration-200">
                  Find out more
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Desktop image (visible only on md and up) */}
        <div className="hidden md:block flex-1 relative w-full h-[600px]">
          <Image
            src={hero[0]}
            alt={articleTitle || "Hero image"}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
