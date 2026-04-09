import Divider from "./Divider";
import Image from "next/image";
import Link from "next/link";
import Content from "./Content";
import RulesContent from "./RulesContent";

import { SocialIcon } from "react-social-icons";
import Featured from "./Featured";
import NextRoadTripContent from "./NextRoadTripServer";

export default function Info2() {
  return (
    <section className="pb-20">
      {/* FIX 1: BALA LAKE / NEXT TRIP
         Removed px-30. Using px-4 on mobile so it's not a 'chimney'.
      */}
      <div className="px-4 md:px-30 pb-20">
        <NextRoadTripContent />
      </div>

      <section className="relative w-full bg-amber-500 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 text-[10rem] md:text-[20rem] font-black text-white/5 select-none pointer-events-none -translate-y-1/2 translate-x-1/4">
          CFS
        </div>

        <div className="max-w-full mx-auto px-6 md:px-30 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter italic uppercase">
                  Show Off Your <br />
                  <span className="not-italic text-slate-900/90">
                    Epic CFS Moments
                  </span>
                </h2>
                <p className="max-w-md text-lg md:text-xl text-white font-medium leading-relaxed tracking-tight">
                  Share your pride and joy from the paddock or the open road.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex gap-3">
                  <SocialIcon
                    bgColor="rgba(255,255,255,0.2)"
                    fgColor="#ffffff"
                    url="https://facebook.com"
                    style={{ height: 45, width: 45 }}
                  />
                  <SocialIcon
                    bgColor="rgba(255,255,255,0.2)"
                    fgColor="#ffffff"
                    url="https://instagram.com"
                    style={{ height: 45, width: 45 }}
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 w-full">
              <Featured />
            </div>
          </div>
        </div>
      </section>

      {/* FIX 2: LLYNCLYS HALL & CARDS
         The 'px-4' ensures the text actually appears and has room to breathe.
      */}
      <div className="px-4 md:px-30">
        <div className="py-24 bg-white">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            More Than <br />
            <span className="text-slate-400">Just Cars</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Explore Card */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/205-drive.jpg"
                  alt="Explore"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-black uppercase text-slate-900">
                  Explore
                </h3>
                <p className="text-slate-600 font-medium">
                  Explore twisty roads and see Wales through a new light.
                </p>
                <Link href="/road-trips">
                  <button className="mt-4 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl uppercase text-xs tracking-widest">
                    See road trips
                  </button>
                </Link>
              </div>
            </div>

            {/* Represent Card */}
            <div className="flex-1 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/cfs-merchandise.jpg"
                  alt="Represent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-black uppercase text-slate-900">
                  Represent
                </h3>
                <p className="text-slate-600 font-medium">
                  Grab CFS hoodies and stickers, available every Thursday.
                </p>
                <Link href="/merch">
                  <button className="mt-4 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl uppercase text-xs tracking-widest">
                    See stock
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FIX 3: LLYNCLYS COMPONENT
           If 'Content' was missing text, ensure the props are actually being passed 
           and the Content component isn't using a fixed 'max-w' that hides it.
        */}
        <div className="w-full">
          <Content
            title={"LLYNCLYS HALL FARM"}
            text="Llynclys Hall Farm grows thousands of pumpkins every year. It’s renowned as the largest pumpkin producer in Shropshire."
            button={"Discover Llynclys Farm"}
            href={"https://llynclyshall.co.uk/"}
            img="/images/llynclys-hall-farm-shop-dog-furiendly.jpg"
          />
        </div>

        {/* FIREWOOD / COFFEE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {/* Firewood */}
          <div className="rounded-2xl overflow-hidden flex flex-col bg-slate-50">
            <div className="relative h-64 w-full">
              <Image
                src="/images/llynclys-hall-farm-logs.jpg"
                alt="Logs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 space-y-4 flex-1">
              <h2 className="text-3xl font-black uppercase text-slate-900">
                Firewood
              </h2>
              <p className="text-slate-600">
                Cut and ready to burn. £65.00 bag.
              </p>
              <Link href="#">
                <button className="bg-slate-900 text-white font-black py-3 px-6 rounded-xl text-[10px] tracking-widest uppercase">
                  Get logs
                </button>
              </Link>
            </div>
          </div>
          {/* Coffee */}
          <div className="rounded-2xl overflow-hidden flex flex-col bg-slate-50">
            <div className="relative h-64 w-full">
              <Image
                src="/images/coffee-2.jpg"
                alt="Coffee"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 space-y-4 flex-1">
              <h2 className="text-3xl font-black uppercase text-slate-900">
                Coffee
              </h2>
              <p className="text-slate-600">
                Local Aroma coffee served from the Mean Bean van.
              </p>
              <Link href="#">
                <button className="bg-slate-900 text-white font-black py-3 px-6 rounded-xl text-[10px] tracking-widest uppercase">
                  Hire Van
                </button>
              </Link>
            </div>
          </div>
        </div>

        <RulesContent
          title={"CFS PADDOCK RULES"}
          text="Zero tolerance for anti-social behavior. Violating rules results in a permanent ban."
          button={"Rules"}
          href={"/rules"}
          img="/images/mirror-smiling.jpg"
        />
      </div>

      {/* FIX 4: EXPLORE NEW ROADS (McLaren Section) */}
      <div className="mt-20 px-4 md:px-30">
        {/* MOBILE VIEW: Visible only on small screens */}
        <div className="md:hidden">
          <Link
            href="/gallery"
            className="group relative block w-full h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/orange-mclaren.jpg"
              alt="McLaren"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-10 left-8 right-8 space-y-4">
              <h2 className="text-5xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                Explore <br /> New Roads
              </h2>
              <button className="bg-white text-slate-900 font-black py-3 px-6 rounded-xl uppercase text-xs tracking-widest">
                See the Lineup
              </button>
            </div>
          </Link>
        </div>

        {/* DESKTOP VIEW: Visible only on md screens and up */}
        <div className="hidden md:grid grid-cols-2 gap-16 items-center">
          {/* Copy your McLaren Image and Text logic here so it has something to display! */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="/images/orange-mclaren.jpg"
              alt="McLaren"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-5xl font-black  uppercase tracking-tight  leading-none">
              Explore <br /> New Roads
            </h2>
            <p className="text-slate-600 text-xl font-medium">
              Supercars, classic cars, JDM and passion projects come see a wide
              collection of cars.{" "}
            </p>
            <Link href="/gallery">
              <button className="bg-slate-900 text-white font-black py-4 px-8 rounded-xl uppercase text-sm tracking-widest">
                See the Lineup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
