"use client";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import SubPageHero from "../components/SubPageHero";

const merchDescription = {
  mainText: `We didn't start Car Farm Social to turn a profit, we built it out of
our love for cars and the drive to foster a real community around
them. Every piece of merch we make reflects that same passion. It's
not about selling stuff; it's about giving people in the scene a way
to connect, represent, and feel like they're part of something bigger
than just the next meet or weekend drive.`,

  stickersText: `The stickers are one of the most fun ways to show you're part of Car
            Farm Social. Slap one on your car, and it's more than just a graphic
            it's a badge that says you're in the culture with us. Next time
            you're out on the road, keep an eye out for CFS stickers on other
            cars; it's like spotting another member of the crew while cruising
            around. That instant recognition is what makes the community real.`,

  hoodiesText: `Hoodies that bring the same energy: comfortable, reliable, and
perfect whether you're at the track, wrenching in the garage, or
just chilling with friends. CFS hoodies are in limited supply so
make sure to pick one up before they're all gone.`,
};

export default function Merch() {
  return (
    <div>
      <SubPageHero title={"CFS Merch"} images={["/images/R8 Black.jpg"]} />

      <div className="flex flex-col items-center pt-10 sm:px-6 md:px-0 w-full pb-20">
        <h3 className="text-lg sm:text-2xl md:text-3xl font-medium text-center md:text-left max-w-sm md:max-w-4xl mx-auto text-slate-800">
          {merchDescription.mainText}
        </h3>
      </div>

      <div className="grid gap-10 items-center px-4 sm:px-6 md:px-10 lg:px-40 md:grid-cols-2  mx-auto max-w-8xl justify-center">
        <div className="relative w-full h-60 sm:h-80 md:h-110">
          <Image
            src="/images/CFS Stickers.jpg"
            alt="CFS Stickers"
            fill
            className="object-cover "
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-800 text-center md:text-left">
            CFS Stickers
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mb-10">
            {merchDescription.stickersText}
          </p>
        </div>
      </div>

      <div className="grid gap-10 items-center px-4 sm:px-6 md:px-10 lg:px-40 md:grid-cols-2 mx-auto max-w-8xl justify-center mt-20 mb-20">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl font-semibold text-slate-800 text-center md:text-left">
            CFS Hoodies
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl md:text-left mb-10">
            {merchDescription.hoodiesText}
          </p>
        </div>
        <div className="relative order-1 md:order-2 w-full h-60 sm:h-80 md:h-110">
          <Image
            src="/images/cfs-hoodie.jpg"
            alt="CFS Hoodie"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
