"use client";
import SubPageHero from "../components/SubPageHero";
import Image from "next/image";
import Video from "../components/Video";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main>
      <SubPageHero title="Our Story" />

      {/* Parent flex container for text and image */}
      <div className="flex flex-col md:flex-row items-start gap-8 px-55 ">
        {/* Text block */}
        <div className=" ">
          <h3 className="text-3xl pt-20 text-slate-700 font-semibold px-55 mb-8 p-8 pb-20  leading-10 text-center bg-slate-100">
            "We’re a team of unapologetic car nuts. If it’s got wheels, we’re
            into it. Most days you’ll find us getting our fix, either online,
            under the bonnet, or out on the road. The idea for Car Farm Social
            (CFS) started simple: a small, midweek gathering for local
            enthusiasts."
          </h3>
          <p className="text-lg leading-8 text-slate-700 mb-8 px-40">
            Car Farm Social (CFS) began as a simple idea: a small, friendly
            gathering for car enthusiasts to meet, share stories, and enjoy good
            company. We wanted a space where cars were the conversation starter,
            but community came first. Fortunately, Lynda and Richard, the
            wonderful owners of Llynclys Hall Farm on the outskirts of Oswestry
            welcomed us with open arms and provided the perfect venue.
          </p>
          <p className="text-lg leading-8 text-slate-700 mb-8 px-40">
            {" "}
            On a damp Thursday evening, a lone classic Mini arrived at the farm,
            its occupants quietly hoping someone else would show up. As the 6 pm
            start time approached, it didn’t exactly look promising. Slowly but
            surely, more enthusiasts arrived. Alongside a handful of classic
            cars, these early attendees returned almost every week, forming the
            foundation of what would become Car Farm Social. Without them, CFS
            would never have grown into the thriving community it is today.
          </p>
          <p className="text-lg leading-8 text-slate-700 mb-8 px-40">
            {" "}
            At its heart, CFS is a social club first, with cars attached. While
            cars are the initial draw, we are not primarily driven by profit—we
            are motivated by building community, fostering connections, and
            creating social value for everyone who attends. Looking ahead to
            2025 and beyond, we are excited to continue pushing boundaries with
            new experiences—both at the farm and out on the road. What will
            never change is the spirit of CFS: the welcoming, friendly, and
            respectful attitude of everyone who joins and supports the event.
          </p>
          <p className="text-lg leading-8 text-slate-700 mb-8 px-40">
            {" "}
            We look forward to seeing you at the farm, sharing cars,
            conversation, and community. Come along and be part of something
            special!
          </p>
          <h2 className="text-4xl font-semibold px-40 mb-10 text-slate-700 text-center mt-10">
            First Car Farm Social August 2021
          </h2>
        </div>
      </div>
      <div className="px-55 flex flex-row text-xl gap-10 text-slate-700 pb-20">
        <div className="flex-1 h-[400] relative ">
          <Image
            src="/images/First_Mini.png"
            alt="First Mini at CFS"
            fill
            className="object-cover pl-40"
          />
        </div>
        <div className="flex-1 relative h-[400]">
          <Image
            src="/images/First Cars.png"
            alt="first cars at CFS"
            fill
            className="object-cover pr-40"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
