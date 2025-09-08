"use client";
import Image from "next/image";

export default function EventInfo() {
  return (
    <section className="px-55 pt-8">
      <div className="space-y-16">
        {/* Intro */}
        <div className="flex gap-6">
          <div
            className=" space-y-6 bg-cover bg-center h-[600px] flex-2"
            style={{ backgroundImage: "url('/images/Ferrari.webp') " }}
          >
            <h1 className=" text-6xl font-bold text-white pl-16 pt-10">
              What To Expect
            </h1>
            <p className="text-xl text-white max-w-2xl pl-16">
              Welcome to Car Farm Social, your ultimate destination for
              everything automotive. We’re building a community-driven
              experience focused on shared passions and respect for the open
              road...
            </p>
          </div>
          <div
            className="space-y-6 bg-cover bg-center h-[600px] flex-1"
            style={{ backgroundImage: "url('/images/MX5_Polaroid.jpg') " }}
          >
            <h1 className="text-5xl font-bold text-white pt-10 max-w-1 pl-16">
              Community Driven
            </h1>
            <p className="text-lg text-white font-semibold pl-16 max-w-sm ">
              Our events are proudly community-driven, shaped by the people who
              attend and contribute. Talented photographers are often on hand to
              capture the variety and spirit of the day.
            </p>
          </div>
        </div>

        {/* Epic Road Trips */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/Elan_Valley.jpg"
            alt="Elan Valley Road Trip"
            className=" object-cover w-full h-110"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-800">
              Epic Road Trips
            </h2>
            <p className="text-lg text-slate-700">
              Our road trips often take us through the stunning Elan Valley and
              across the beautiful roads of Mid Wales. Over the years, we’ve
              enjoyed memorable drives out to places like Bala, with plenty of
              chances to stop along the way for food and conversation — whether
              that’s at the Red Kite Café and Grill or other local favourites.
              Every trip is about the drive, the scenery, and the company.{" "}
            </p>
          </div>
        </div>

        {/* Supercars and Classics */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-3xl font-semibold text-slate-800">
              Supercars and Classics
            </h2>
            <p className="text-lg text-slate-700">
              Everyone is welcome — supercars, 90s icons, JDM legends, timeless
              classics, and everything in between. Part of the excitement is
              never knowing exactly what will roll up at each event, making
              every meet unique and full of surprises.{" "}
            </p>
          </div>
          <img
            src="/images/911.jpg"
            alt="Lineup of Supercars"
            className="order-1 md:order-2  object-cover w-full h-110"
          />
        </div>
      </div>
    </section>
  );
}
