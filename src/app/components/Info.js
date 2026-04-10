"use client";
import Image from "next/image";
import Intro from "../components/Intro";

export default function Info() {
  return (
    <section className=" bg-white overflow-hidden">
      <section className="w-full bg-white py-10">
        <div className="max-w-400 mx-auto px-6 md:px-30">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">
              cfs / event
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight">
              A weekly gathering of car enthusiasts, come join us and show off
              your pride and joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 relative h-100 md:h-175 bg-slate-50 overflow-hidden">
              <Image
                src="/images/subaru-couple.jpg"
                alt="subaru"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="relative h-75 md:h-83.5  overflow-hidden">
                <Image
                  src="/images/group-2.jpg"
                  alt="cfs group of attendess"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-75 md:h-83.5  overflow-hidden">
                <Image
                  src="/images/i8-bmw.png"
                  alt="busy cfs event with a bmw i8"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10">
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
