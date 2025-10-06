"use client";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import SubPageHero from "../components/SubPageHero";

export default function Merch() {
  return (
    <div>
      <SubPageHero title={"CFS Merch"} images={["/images/R8 Black.jpg"]} />
      <div className="">
        <h2 className="text-4xl font-semibold text-center pt-10 pb-10 text-slate-800">
          Car Farm Show Merchandise
        </h2>
      </div>
      <div className="px-52">
        <h3 className="text-slate-800 px-40 p-15 text-2xl font-semibold leading-8 text-center">
          We didn’t start Car Farm Social to turn a profit, we built it out of
          our love for cars and the drive to foster a real community around
          them. Every piece of merch we make reflects that same passion. It’s
          not about selling stuff; it’s about giving people in the scene a way
          to connect, represent, and feel like they’re part of something bigger
          than just the next meet or weekend drive.
        </h3>
      </div>

      <div className="grid px-55 md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/CFS Stickers.jpg"
          alt="Elan Valley Road Trip"
          className=" object-cover w-full h-110"
        />
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-800">
            CFS Stickers
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl">
            The stickers are one of the most fun ways to show you’re part of Car
            Farm Social. Slap one on your car, and it’s more than just a graphic
            — it’s a badge that says you’re in the culture with us. Next time
            you’re out on the road, keep an eye out for CFS stickers on other
            cars; it’s like spotting another member of the crew while cruising
            around. That instant recognition is what makes the community real.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 px-55 gap-10 items-center mt-15 mb-20">
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="text-3xl font-semibold text-slate-800">CFS Hoodies</h2>
          <p className="text-lg text-slate-700 max-w-2xl">
            hoodies that bring the same energy comfortable, reliable, and
            perfect whether you’re at the track, wrenching in the garage, or
            just chilling with friends. CFS hoodies are in limited supply so
            make sure to pick one up before they're all gone.
          </p>
        </div>
        <img
          src="/images/CFS Hoodie.jpg"
          alt="Lineup of Supercars"
          className="order-1 md:order-2  object-cover w-full h-110"
        />
      </div>
      <Footer />
    </div>
  );
}
