"use client";
import Image from "next/image";
import Share from "../components/Share";
import Intro from "../components/Intro";

export default function Info() {
  return (
    <section className=" bg-white overflow-hidden">
      <section className="w-full bg-white py-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-30">
          {/* Minimal Heading - Just context */}
          <div className="mb-10 max-w-2xl">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
              cfs / event
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight">
              A weekly gathering of cars, and the people who keep them driving.
            </p>
          </div>

          {/* The Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Large Shot */}
            <div className="md:col-span-8 relative h-[400px] md:h-[700px] bg-slate-50 overflow-hidden">
              <Image
                src="/images/subaru-couple.jpg"
                alt="subaru"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            {/* Side Stack */}
            <div className="md:col-span-4 flex flex-col gap-8">
              {/* Top Small Shot */}
              <div className="relative h-[300px] md:h-[334px] bg-slate-50 overflow-hidden">
                <Image
                  src="/images/group-2.jpg"
                  alt="Rally Details"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Bottom Small Shot */}
              <div className="relative h-[300px] md:h-[334px] bg-slate-50 overflow-hidden">
                <Image
                  src="/images/i8-bmw.png"
                  alt="Night Meet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        {" "}
        <Intro
          eyebrow="Your CFS Invitation"
          title="Join us at LLynclys Farm between 17:30 - 20:00 Every Thursday!"
          content="From April to September, classics, supercars, JDM, and everything in between..."
        />
      </div>
    </section>
  );
}
