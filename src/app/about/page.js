"use client";
import SubPageHero from "../components/SubPageHero";
import Image from "next/image";
import Video from "../components/Video";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Slideshow from "../components/Slideshow";

const pageContent = {
  intro:
    "We’re a team of unapologetic car nuts. If it’s got wheels, we’re into it. Most days you’ll find us getting our fix, either online under the bonnet, or out on the road. The idea for Car Farm Social (CFS) started simple: a small, midweek gathering for local enthusiasts.",
  content:
    "Car Farm Social (CFS) began as a simple idea: a small, friendly gathering for car enthusiasts to meet, share stories, and enjoy good company. We wanted a space where cars were the conversation starter, but community came first. Fortunately, Lynda and Richard, the wonderful owners of Llynclys Hall Farm on the outskirts of Oswestry welcomed us with open arms and provided the perfect venue.\n\nOn a damp Thursday evening, a lone classic Mini arrived at the farm, its occupants quietly hoping someone else would show up. As the 6 pm start time approached, it didn’t exactly look promising. Slowly but surely, more enthusiasts arrived. Alongside a handful of classic cars, these early attendees returned almost every week, forming the foundation of what would become Car Farm Social.{image2}Without them, CFS would never have grown into the thriving community it is today. At its heart, CFS is a social club first, with cars attached. Whilecars are the initial draw, we are not primarily driven by profit—we are motivated by building community, fostering connections, and creating social value for everyone who attends.\n\nLooking ahead to 2025 and beyond, we are excited to continue pushing boundaries with new experiences—both at the farm and out on the road. What will never change is the spirit of CFS: the welcoming, friendly, and respectful attitude of everyone who joins and supports the event. We look forward to seeing you at the farm, sharing cars, conversation, and community. Come along and be part of something special!",
  images: {
    image1: "/images/first-mini.png",
    image2: "/images/first-cars.png",
  },
};

//helper function to render images within content
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
            className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[16/9] overflow-hidden my-8"
          >
            <Image
              src={src}
              alt={key}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        );
      }
    }
    return (
      <p
        key={index}
        className="text-base sm:text-lg md:text-xl text-slate-700 whitespace-pre-wrap leading-relaxed"
      >
        {part}
      </p>
    );
  });
}

export default function About() {
  return (
    <main>
      <SubPageHero title="Our Story" />

      {/* article content */}
      <div className="flex flex-col items-center pt-10 sm:px-6 md:px-0 w-full pb-20">
        {/* Heading centered */}
        <h3 className="text-lg sm:text-2xl md:text-3xl font-medium text-center md:text-left max-w-4xl text-slate-800">
          {pageContent.intro}
        </h3>

        {/*article first image */}
        <div className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden mt-8 mb-5">
          <Image
            src={pageContent.images.image1}
            alt={pageContent.images.image1}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
          />
        </div>

        {/* main content */}
        <div className="max-w-4xl w-full space-y-8 text-left text-slate-700 px-2 sm:px-4 md:px-0">
          {renderContent(pageContent.content, pageContent.images)}
        </div>

        <div className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden mt-8">
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

      <Footer />
    </main>
  );
}
