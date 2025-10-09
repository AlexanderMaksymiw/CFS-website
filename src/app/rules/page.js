"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import SubPageHero from "../components/SubPageHero";
import Footer from "../components/Footer";
import Video from "../components/Video";

export default function Rules() {
  return (
    <div>
      <Header />
      <SubPageHero
        title="Car Farm Social Rules"
        images={["/images/Porsche GT4.webp"]}
      />
      <div className="px-52">
        <h3 className="text-slate-800 px-40 p-15 text-2xl font-semibold leading-8 text-center">
          NEW RULES WITH IMMEDIATE EFFECT Ignorance of the rules is not an
          excuse. Breaking the rules will result in a PERMANENT BAN. These rules
          exist to ensure absolute safety of people, pets, and other road users.
        </h3>
        <div className="border border-slate-300"> </div>
        <div className="grid grid-cols-2 gap-4 pt-10 pr-91">
          {/* Left column */}
          <h2 className="text-slate-800 text-5xl font-bold">01</h2>

          {/* Right column */}
          <div className="flex flex-col items-start ">
            {/* Wrap heading + image in the same container */}
            <div className="w-[920px]">
              <h2 className="text-slate-800 text-5xl font-bold mb-8">
                Arrival
              </h2>
              <div className="relative w-[920px] h-[580px]">
                <Image
                  src="/images/young friends.jpg"
                  alt="White Subaru Impreza STI"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-slate-700 pt-10 pb-10">
                Respect and obey marshals at all times. Park up, switch your
                engine off, and take the keys out. Do not sit revving your
                engine. Maintain a strict 10MPH crawl through the car park. If
                you're unsure of where to park speak to one of our marshals who
                can be found at the main entrance or nearby seating area.
              </p>
            </div>
          </div>
        </div>
        <div className="border border-slate-300"> </div>
        <div className="grid grid-cols-2 gap-4 pt-10 pr-91">
          {/* Left column */}
          <h2 className="text-slate-800 text-5xl font-bold">02</h2>

          {/* Right column */}
          <div className="flex flex-col items-start ">
            {/* Wrap heading + image in the same container */}
            <div className="w-[920px]">
              <h2 className="text-slate-800 text-5xl font-bold mb-8">
                Car Park & Exit Roads
              </h2>
              <div className="relative w-[920px] h-[580px]">
                <video
                  src="/videos/exit.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-slate-700  pb-10">
                Arrival rules apply in the car park, on the exit road to the
                A483, and when joining the A483. No wheelspinning is allowed at
                any time.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-slate-300"> </div>
        <div className="grid grid-cols-2 gap-4 pt-10 pr-91">
          {/* Left column */}
          <h2 className="text-slate-800 text-5xl font-bold">03</h2>

          {/* Right column */}
          <div className="flex flex-col items-start ">
            {/* Wrap heading + image in the same container */}
            <div className="w-[920px]">
              <h2 className="text-slate-800 text-5xl font-bold mb-8">
                Leaving the Event
              </h2>
              <div className="relative w-[920px] h-[580px]">
                <Image
                  src="/images/EVO 6.jpg"
                  alt="Mitsubishi Evo 6 leaving CFS"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-slate-700 pt-10 pb-10">
                Leave in an orderly fashion. A gentle 1st or 2nd gear pull to
                reach legal speed is acceptable, but do not accelerate
                aggressively all the way to the end of the straight towards
                Oswestry. This alarms local residents and other road users, and
                it is both dangerous and illegal.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-slate-300"> </div>
        <div className="grid grid-cols-2 gap-4 pt-10 pr-91">
          {/* Left column */}
          <h2 className="text-slate-800 text-5xl font-bold">04</h2>

          {/* Right column */}
          <div className="flex flex-col items-start ">
            {/* Wrap heading + image in the same container */}
            <div className="w-[920px]">
              <h2 className="text-slate-800 text-5xl font-bold mb-8">
                Filming & Social Media
              </h2>
              <div className="relative w-[920px] h-[580px]">
                <Image
                  src="/images/Abarth.jpg"
                  alt="White Subaru Impreza STI"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-slate-700 pt-10 pb-10">
                Spectators must not encourage bad behaviour by filming it or
                posting it online, as this damages CFS. Only the official CFS
                photographer is permitted to monitor junction activity. Filming
                cars exiting via the minor road leading to the A483 is also
                banned.
              </p>
            </div>
          </div>
        </div>
        <div className="border border-slate-300"> </div>
        <div className="grid grid-cols-2 gap-4 pt-10 pr-91">
          {/* Left column */}
          <h2 className="text-slate-800 text-5xl font-bold">05</h2>

          {/* Right column */}
          <div className="flex flex-col items-start ">
            {/* Wrap heading + image in the same container */}
            <div className="w-[920px]">
              <h2 className="text-slate-800 text-5xl font-bold mb-8">
                Community Spirit
              </h2>
              <div className="relative w-[920px] h-[580px]">
                <Image
                  src="/images/talking.jpg"
                  alt="White Subaru Impreza STI"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-slate-700 pt-10 pb-10">
                CFS is a social gathering, so be social and respectful.
                Prejudice, elitism, or gross negativity towards other members
                and their cars is not in the spirit of CFS. This also extends to
                online behaviour on CFS social media channels, where bans may be
                imposed at the discretion of the organising committee.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-slate-300"> </div>
        <div className="grid grid-cols-2 gap-4 pt-10 pr-91">
          {/* Left column */}
          <h2 className="text-slate-800 text-5xl font-bold">06</h2>

          {/* Right column */}
          <div className="flex flex-col items-start ">
            {/* Wrap heading + image in the same container */}
            <div className="w-[920px]">
              <h2 className="text-slate-800 text-5xl font-bold mb-8">
                On a Final Note
              </h2>
              <div className="relative w-[920px] h-[580px]">
                <Image
                  src="/images/I8.png"
                  alt="White Subaru Impreza STI"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-slate-700 pt-10 pb-10">
                Thank you to everyone for supporting the event. With everyone’s
                cooperation, we can look forward to many more safe and enjoyable
                CFS meets.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
