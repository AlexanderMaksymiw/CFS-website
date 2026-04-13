"use client";
import SubPageHero from "../components/SubPageHero";
import Image from "next/image";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";

const pageContent = {
  intro:
    "We’re a team of unapologetic car nuts. If it’s got wheels, we’re into it. Most days you’ll find us getting our fix, either online under the bonnet, or out on the road. The idea for Car Farm Social Club (CFS) started simple: a small, midweek gathering for local enthusiasts.",
  content:
    "Car Farm Social Club (CFS) began as a simple idea: a small, friendly gathering for car enthusiasts to meet, share stories, and enjoy good company. We wanted a space where cars were the conversation starter, but community came first. Fortunately, Lynda and Richard, the wonderful owners of Llynclys Hall Farm on the outskirts of Oswestry welcomed us with open arms and provided the perfect venue.\n\nOn a damp Thursday evening, a lone classic Mini arrived at the farm, its occupants quietly hoping someone else would show up. As the 6 pm start time approached, it didn’t exactly look promising. Slowly but surely, more enthusiasts arrived. Alongside a handful of classic cars, these early attendees returned almost every week, forming the foundation of what would become Car Farm Social Club.{image2}Without them, CFS would never have grown into the thriving community it is today. At its heart, CFS is a social club first, with cars attached. Whilecars are the initial draw, we are not primarily driven by profit—we are motivated by building community, fostering connections, and creating social value for everyone who attends.\n\nLooking ahead we are excited to continue pushing boundaries with new experiences both at the farm and out on the road. What will never change is the spirit of CFS: the welcoming, friendly, and respectful attitude of everyone who joins and supports the event. We look forward to seeing you at the farm, sharing cars, conversation, and community. Come along and be part of something special!",
  images: {
    image1: "/images/first-mini.png",
    image2: "/images/first-cars.png",
  },
};

function renderContent(content, images) {
  const parts = content.split(/(\{image\d+\})/g);
  return parts.map((part, index) => {
    const match = part.match(/\{(image\d+)\}/);
    if (match) {
      const key = match[1];
      const src = images[key];
      if (src) {
        return (
          <div
            key={index}
            className="relative w-full aspect-video md:aspect-21/9  overflow-hidden my-16"
          >
            <Image src={src} alt={key} fill className="object-cover" />
          </div>
        );
      }
    }
    return (
      <p
        key={index}
        className="text-xl md:text-2xl text-slate-700 whitespace-pre-wrap leading-relaxed mb-12"
      >
        {part}
      </p>
    );
  });
}

export default function About() {
  return (
    <main className="bg-white">
      <SubPageHero title="OUR STORY" />

      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-slate-900 min-h-[70vh]">
        <div className="p-8 md:p-20 lg:p-24 flex flex-col justify-center space-y-8">
          <div className="w-20 h-2 bg-amber-400" />
          <h1 className="text-6xl md:text-8xl font-black italic text-slate-900 leading-[0.85] tracking-tighter uppercase">
            THE ROOTS
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight italic uppercase tracking-tighter">
            A community created by common interest
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            {pageContent.intro}
          </p>
        </div>

        <div className="relative h-100 lg:h-auto border-l border-slate-900 overflow-hidden group">
          <Image
            src={pageContent.images.image1}
            alt="First Mini"
            fill
            className="object-cover"
            priority
          />

          {/* --- THE ARROW & LABEL --- */}
          <div className="absolute bottom-[25%] left-[15%] flex flex-col items-center pointer-events-none">
            {/* Hand-drawn style SVG Arrow */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              className="text-amber-400 drop-shadow-lg -rotate-12"
            >
              <path
                d="M20 80 Q 40 40 80 20"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M65 20 L 80 20 L 80 35"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Label */}
            <span className="bg-slate-900 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-3 py-1 italic -mt-2">
              First Car
            </span>
          </div>
        </div>
      </section>

      {/* --- MAIN ARTICLE CONTENT --- */}
      <article className="py-24 px-6 md:px-0">
        <div className="max-w-4xl mx-auto">
          {renderContent(pageContent.content, pageContent.images)}

          {/* SLIDESHOW SECTION */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter">
                The Archive
              </h2>
              <div className="h-0.5 grow bg-slate-900" />
            </div>
            <div className="relative w-full aspect-video   shadow-2xl">
              <Slideshow
                images={[
                  "/images/friends-4.jpg",
                  "/images/ice-cream.jpg",
                  "/images/eating-2.jpg",
                  "/images/couple-3.jpg",
                  "/images/old-couple.jpg",
                ]}
              />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
