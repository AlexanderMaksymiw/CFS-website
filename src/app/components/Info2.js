import SectionBG from "./SectionBG";
import Image from "next/image";
import Link from "next/link";

export default function Info2() {
  return (
    <section className=" pb-20">
      <SectionBG
        image="/images/two-scoobies.jpg"
        className="h-[500px]"
      ></SectionBG>

      <div className="md:hidden px-4 sm:px-10 md:px-56 pt-10 pb-10 ">
        <Link
          href="/latest/"
          className="relative block w-full h-[300px] sm:h-[400px]
          overflow-hidden"
        >
          <Image
            src="/images/evo-adventure.jpg"
            alt="Elan Valley Road Trip"
            fill
            className="object-cover w-full h-full shadow shadow-indigo-200 "
          />
          <div className="absolute gap-3 inset-0 bg-slate-800/40 bg-opacity-40 flex flex-col justify-center items-center text-center px-4 ">
            <h2 className="text-4xl sm:text-3xl font-semibold text-white drop-shadow-3xl">
              Epic Road Trips
            </h2>
            <button className="btn">See Road Trips</button>
          </div>
        </Link>
      </div>

      {/* Desktop version */}
      <div className=" relative hidden md:grid md:grid-cols-2 gap-10 items-center px-4 pt-20 sm:px-10 pb-20 md:px-56">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-800">
            Epic Road Trips
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl">
            Our road trips often take us through the stunning Elan Valley and
            across the beautiful roads of Mid Wales. Over the years, we’ve
            enjoyed memorable drives out to places like Bala, with plenty of
            chances to stop along the way for food and conversation whether
            that’s at the Red Kite Café and Grill or other local favourites.
            Every trip is about the drive, the scenery, and the company.
          </p>
          <div className="flex justify-start">
            <button className="btn">Events</button>
          </div>
        </div>
        <div className="relative w-full h-[400px] md:h-110">
          <Image
            src="/images/evo-adventure.jpg"
            alt="Elan Valley Road Trip"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Mobile version */}

      <div className="md:hidden px-4 sm:px-10 md:px-56">
        <Link
          href="/gallery"
          className="relative block w-full h-[300px] sm:h-[400px]"
        >
          <Image
            src="/images/orange-mclaren.jpg"
            alt="orange mclaren at cfs"
            fill
            className="object-cover w-full h-full border border-gray-200 shadow shadow-indigo-200"
          />
          <div className="absolute inset-0 gap-3 bg-slate-800/20 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl sm:text-3xl font-semibold text-white drop-shadow-3xl">
              Explore New Roads
            </h2>
            <button className="btn">See the Lineup</button>
          </div>
        </Link>
      </div>

      {/* Desktop version */}
      <div className="relative hidden md:grid md:grid-cols-2 gap-10 items-center px-4 sm:px-10 md:px-56">
        <div className="relative w-full h-[400px] md:h-110">
          <Image
            src="/images/orange-mclaren.jpg"
            alt="Lineup of Supercars"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-800">
            Supercars and Classics
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl">
            Everyone is welcome; supercars, 90s icons, JDM legends, timeless
            classics, and everything in between. Part of the excitement is never
            knowing exactly what will roll up at each event, making every meet
            unique and full of surprises.
          </p>
          <div className="flex justify-start">
            <button className="btn">Cars</button>
          </div>
        </div>
      </div>
    </section>
  );
}
