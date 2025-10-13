"use client";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import FullBackground from "../components/Full Background";
import SectionBG from "../components/SectionBG";
import SectionBGShort from "../components/SectionBGShort";
import ItemGrid from "../components/ItemGrid";
import { useRouter } from "next/navigation";

export default function Info() {
  const router = useRouter();

  function navigateGallery() {
    router.push("/gallery");
  }

  function navigateEvents() {
    router.push("/events");
  }

  return (
    <section className="pt-8">
      <div className="space-y-16 pb-20">
        <SectionBG image={"/images/hero/Supra_front.jpg"}>
          <div className=" relative flex px-56 gap-6">
            <div className=" space-y-4 bg-cover bg-center h-[600px] flex-2">
              <h1 className=" text-6xl max-w-xl font-bold text-white pb-5 drop-shadow-2xl">
                A Community Where Cars and Culture{" "}
                <span className="text-yellow-400">Come Alive</span>
              </h1>
              <h3 className="text-2xl/8 font-semibold text-justify text-white max-w-md pb-5 drop-shadow-xl">
                Every Thursday evening throughout Spring, Summer, and Autumn, up
                to 400 amazing rides gather near Oswestry, Shropshire.
              </h3>
              <h3 className="text-2xl/8 font-semibold text-justify text-white max-w-md  drop-shadow-xl">
                CFS is more than just a meet-up our events include scenic road
                trips, delicious food and coffee, and a relaxed, inclusive
                atmosphere that celebrates everything from supercars to timeless
                classics.
              </h3>
            </div>
            <div className="relative space-y-6 h-[600px] w-[900px]  overflow-hidden">
              <Slideshow
                images={[
                  "/images/friends 4.jpg",
                  "/images/eating.jpg",
                  "/images/dad 2.jpg",
                  "/images/Ice_cream.jpg",
                  "/images/having fun.jpg",
                  "/images/MX5_Polaroid.jpg",
                  "/images/dog 6.jpg",
                  "/images/group-2.jpg",
                  "/images/talking.jpg",
                  "/images/dog 4.jpg",
                  "/images/Ice_cream CFS.jpg",
                  "/images/Leon.jpg",
                  "/images/photographer.jpg",
                  "/images/porsche-back.jpg",
                ]}
              />
            </div>
          </div>
        </SectionBG>
        <div className="flex px-56 relative gap-6">
          <div
            className=" relative space-y-4 bg-cover bg-center h-[600px] flex-1"
            style={{ backgroundImage: "url('/images/couple.jpg')  " }}
          >
            <h2 className="text-white z-20 relative text-5xl font-bold pt-10 pl-8 drop-shadow-2xl">
              Share Your CFS <span className="text-yellow-400">Moments </span>
            </h2>
            <div className="absolute z-10 inset-0 bg-gradient-to-b from-slate-950/20 to-transparent" />
          </div>

          <div
            className=" relative space-y-6 h-[600px] flex-2 bg-cover overflow-hidden"
            style={{ backgroundImage: "url('/images/Subaru Red.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 to-transparent"></div>
            <div className="relative z-10 space-y-5 pt-5">
              <h1 className=" text-6xl max-w-xl font-bold text-white pl-16 pt-5">
                What Makes a CFS{" "}
                <span className="text-yellow-400">Event Special</span>
              </h1>
              <h3 className="text-xl font-semibold text-white max-w-xl pl-16 drop-shadow-2xl ">
                Freelance photographers capture the highlights, while local
                businesses add creativity and character. Together, they create a
                vibrant mix of cars, culture, and community. With a family- and
                dog-friendly atmosphere, clear rules, and respect for all, it’s
                an event everyone can enjoy.
              </h3>
            </div>
          </div>
        </div>
        <div className="px-56">
          <ItemGrid />
        </div>
        <SectionBGShort
          className="bg-slate-300/20"
          image={"/images/two-scoobies.jpg"}
        >
          {" "}
        </SectionBGShort>
        <div className="grid px-56 md:grid-cols-2 gap-10 items-center ">
          <img
            src="/images/Elan_Valley.jpg"
            alt="Elan Valley Road Trip"
            className=" object-cover w-full h-110"
          />

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800">
              Epic Road Trips
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl">
              Our road trips often take us through the stunning Elan Valley and
              across the beautiful roads of Mid Wales. Over the years, we’ve
              enjoyed memorable drives out to places like Bala, with plenty of
              chances to stop along the way for food and conversation — whether
              that’s at the Red Kite Café and Grill or other local favourites.
              Every trip is about the drive, the scenery, and the company.{" "}
            </p>
            <button className="btn" onClick={navigateEvents}>
              Road Trips
            </button>
          </div>
        </div>

        {/* Supercars and Classics */}
        <div className="grid md:grid-cols-2 px-56 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-semibold text-slate-800">
              Supercars and Classics
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl">
              Everyone is welcome supercars, 90s icons, JDM legends, timeless
              classics, and everything in between. Part of the excitement is
              never knowing exactly what will roll up at each event, making
              every meet unique and full of surprises.{" "}
            </p>
            <button className="btn" onClick={navigateGallery}>
              Cars
            </button>
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
