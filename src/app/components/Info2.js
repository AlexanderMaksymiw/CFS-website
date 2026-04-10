import Divider from "./Divider";
import Image from "next/image";
import Link from "next/link";
import Content from "./Content";
import RulesContent from "./RulesContent";

import { SocialIcon } from "react-social-icons";
import Featured from "./Featured";
import NextRoadTripContent from "./NextRoadTripServer";
import WeeklyWinners from "./WeeklyWinners";
import WeeklyWinnersContent from "./WeeklyWinnersContent";

export default function Info2() {
  return (
    <section className="pb-20">
      <div className="px-4 md:px-30 pb-20">
        <NextRoadTripContent />
      </div>
      <WeeklyWinnersContent />

      <section className="z-50 relative w-full bg-amber-500 py-24 overflow-hidden">
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
                    url="https://www.facebook.com/groups/3764447677206661"
                    style={{ height: 45, width: 45 }}
                  />
                  <SocialIcon
                    bgColor="rgba(255,255,255,0.2)"
                    fgColor="#ffffff"
                    url="https://www.instagram.com/carfarmsocial/"
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

      <div className="px-4 md:px-30">
        <div className="py-24 bg-white">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-12">
            More Than <br />
            <span className="text-slate-400">Just Cars</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 rounded-2xl overflow-hidden ">
              <div className="relative h-86 w-full">
                <Image
                  src="/images/205-drive.jpg"
                  alt="Explore"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-black uppercase">Explore</h3>
                <p className="">
                  Come join us on a roadtrip and explore twisty roads and see
                  Wales through a new light.
                </p>
                <Link href="/road-trips">
                  <button className="mt-4 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl uppercase text-xs tracking-widest hover:bg-red-600 cursor-pointer">
                    See road trips
                  </button>
                </Link>
              </div>
            </div>

            {/* Represent Card */}
            <div className="flex-1 rounded-2xl overflow-hidden ">
              <div className="relative h-86 w-full">
                <Image
                  src="/images/cfs-merchandise.jpg"
                  alt="Represent"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-black uppercase ">Represent</h3>
                <p className="">
                  Grab some comfy CFS merchandise, hoodies, t-shirts and even a
                  sticker for your car and represent CFS.
                </p>
                <Link href="/merch">
                  <button className="mt-4 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl uppercase text-xs tracking-widest hover:bg-red-600 cursor-pointer">
                    See stock
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 ">
          {/* Firewood */}
          <div className="rounded-2xl overflow-hidden flex flex-col ">
            <div className="relative h-86 w-full">
              <Image
                src="/images/llynclys-hall-farm-logs.jpg"
                alt="Logs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 space-y-4 flex-1">
              <h2 className="text-3xl font-black uppercase ">Firewood</h2>
              <p className="">
                Come down to Llynclys farm and pick up a bag of logs. Cut and
                ready to burn to keep the home warm £65.00 bag.
              </p>
              <Link href="https://llynclyshall.co.uk/about-us/farm-shop/">
                <button className="bg-slate-900 text-white font-black py-3 px-6 rounded-xl text-[10px] tracking-widest uppercase hover:bg-red-600 cursor-pointer">
                  Get logs
                </button>
              </Link>
            </div>
          </div>
          {/* Coffee */}
          <div className="rounded-2xl overflow-hidden flex flex-col ">
            <div className="relative h-86 w-full">
              <Image
                src="/images/coffee-2.jpg"
                alt="Coffee"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 space-y-4 flex-1">
              <h2 className="text-3xl font-black uppercase ">Coffee</h2>
              <p className="">
                Local Shrewsbury Aroma coffee and other hot drinks and tasty
                snacks served from the Mean Bean van.
              </p>
              <Link href="https://llynclyshall.co.uk/mean-bean-coffee/">
                <button className="bg-slate-900 text-white font-black py-3 px-6 rounded-xl text-[10px] tracking-widest uppercase hover:bg-red-600 cursor-pointer">
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
    </section>
  );
}
