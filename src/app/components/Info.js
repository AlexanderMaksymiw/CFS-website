"use client";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import FullBackground from "../components/Full Background";
import SectionBG from "../components/SectionBG";
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
    <section className="pt-8 sm:pt-8">
      <div className="relative md:hidden w-full h-[300px] sm:h-[400px] overflow-hidden">
        <Image
          src="/images/i8.png"
          alt="BMW I8 at CFS"
          fill
          className="object-cover px-4"
          priority
        />
      </div>
      <div className="px-4 md:hidden pb-10  ">
        <div className="md:hidden px-5 pt-10 pb-10 bg-slate-200">
          <h2 className="pb-5 text-3xl font-semibold text-slate-900 max-w-50">
            Community & Clubs Welcome
          </h2>
          <p className="leading-7 text-md max-w-70 text-slate-800">
            CFS welcomes enthusiasts of all levels to enjoy scenic road trips,
            friendly competitions, photography opportunities, and delicious food
            and drinks. Family-friendly and inclusive, our events encourage
            socializing, sharing your passion, and making memories—but remember,
            respect and the right attitude are key. Please follow our simple
            rules to keep the meet safe and enjoyable for everyone.
          </p>
          <div className="pt-15">
            <button className="btn">See Rules</button>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 sm:px-10 md:px-56 pb-5 -mt-4">
        <a
          href="/gallery"
          className="relative block w-full h-[300px] sm:h-[400px] overflow-hidden"
        >
          <video
            src="/videos/mean-bean-coffee.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 gap-5 bg-slate-800/20 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-4xl sm:text-3xl font-semibold text-white drop-shadow-3xl">
              Excellent Coffee
            </h2>
            <button className="btn">Grab a Cup</button>
          </div>
        </a>
      </div>

      <div className="space-y-10 sm:space-y-16 pb-10 sm:pb-20">
        <SectionBG
          image={"/images/hero/Supra_front.jpg"}
          className={"bg-white/90 lg:bg-slate-800/60"}
        >
          <div className="relative flex flex-col md:flex-row  md:items-start  sm:px-10 md:px-56 gap-10">
            <div className="space-y-4 bg-cover bg-center w-full md:w-1/2 md:h-[600px]">
              <h1 className="text-4xl max-w-90 lg:max-w-2xl mx-auto lg:hidden-mx-auto sm:text-5xl lg:text-7xl font-bold lg:text-white text-slate-900 drop-shadow-2xl text-center md:text-left">
                A Community Where Cars and Culture{" "}
                <span className="lg:text-yellow-400 text-slate-900">
                  Come Alive
                </span>
              </h1>

              <h3 className="text-base px-4 leading-7 sm:text-lg font-semibold lg:text-white text-slate-900 max-w-md text-center md:text-left drop-shadow-xl">
                Every Thursday evening throughout Spring, Summer, and Autumn, up
                to 400 amazing rides gather near Oswestry, Shropshire.
              </h3>

              <h3 className="text-base px-4 sm:text-lg leading-7 font-semibold lg:text-white text-slate-900  max-w-md text-center md:text-left drop-shadow-xl">
                CFS is more than just a meet-up — our events include scenic road
                trips, delicious food and coffee, and a relaxed, inclusive
                atmosphere that celebrates everything from supercars to timeless
                classics.
              </h3>
            </div>

            <div className="relative w-full md:w-[900px] h-[400px] sm:h-[350px] md:h-[600px] overflow-hidden shadow-xl">
              <Slideshow
                images={[
                  "/images/friends 4.jpg",
                  "/images/eating.jpg",
                  "/images/dad 2.jpg",
                  "/images/ice-cream.jpg",
                  "/images/having fun.jpg",
                  "/images/MX5_Polaroid.jpg",
                  "/images/dog 6.jpg",
                  "/images/group-2.jpg",
                  "/images/talking.jpg",
                  "/images/dog 4.jpg",
                  "/images/ice-cream-cfs.jpg",
                  "/images/mg.jpg",
                  "/images/photographer.jpg",
                  "/images/cfs-hoodie.jpg",
                ]}
              />
            </div>
          </div>
        </SectionBG>
        <div className="flex flex-col md:flex-row sm:px-10 md:px-56 gap-6">
          {/* LEFT SECTION */}
          <div
            className="relative flex-1 bg-cover bg-center min-h-[500px] sm:min-h-[600px] md:min-h-[500px] overflow-hidden"
            style={{ backgroundImage: "url('/images/couple.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 to-transparent"></div>
            <h2 className="relative z-10 text-white text-4xl sm:text-5xl font-bold pt-16 px-8 text-center md:text-left drop-shadow-2xl">
              Share Your CFS <span className="text-yellow-400">Moments</span>
            </h2>
          </div>

          {/* RIGHT SECTION */}
          <div
            className="relative flex-1 bg-cover bg-center min-h-[500px] sm:min-h-[600px] md:min-h-[500px] overflow-hidden"
            style={{ backgroundImage: "url('/images/Subaru Red.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 to-transparent"></div>
            <div className="relative z-10 space-y-5 pt-10 px-8 md:px-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-xl drop-shadow-2xl">
                What Makes a CFS{" "}
                <span className="text-yellow-400">Event Special</span>
              </h1>
              <h3 className="text-lg sm:text-xl font-semibold text-white max-w-xl drop-shadow-2xl">
                Freelance photographers capture the highlights, while local
                businesses add creativity and character. Together, they create a
                vibrant mix of cars, culture, and community. With a family- and
                dog-friendly atmosphere, clear rules, and respect for all, it’s
                an event everyone can enjoy.
              </h3>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-10 md:px-56">
          <ItemGrid />
        </div>
        <SectionBG image={"/images/two-scoobies.jpg"}>
          <div className="relative flex flex-col md:flex-row  md:items-start  sm:px-10 md:px-56 gap-10">
            <div className="relative w-full md:w-[900px] h-[400px] sm:h-[350px] md:h-[600px] overflow-hidden ">
              <h2></h2>
            </div>
          </div>
        </SectionBG>
        {/* Mobile version */}
        <div className="md:hidden px-4 sm:px-10 md:px-56 -mt-4 ">
          <a
            href="/latest"
            className="relative block w-full h-[300px] sm:h-[400px] overflow-hidden"
          >
            <img
              src="/images/evo-adventure.jpg"
              alt="Elan Valley Road Trip"
              className="object-cover w-full h-full"
            />
            <div className="absolute gap-3 inset-0 bg-slate-800/40 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-4xl sm:text-3xl font-semibold text-white drop-shadow-3xl">
                Epic Road Trips
              </h2>
              <button className="btn">See Road Trips</button>
            </div>
          </a>
        </div>

        {/* Desktop version */}
        <div className="hidden md:grid md:grid-cols-2 gap-10 items-center px-4 sm:px-10 md:px-56">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-slate-800">
              Epic Road Trips
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl">
              Our road trips often take us through the stunning Elan Valley and
              across the beautiful roads of Mid Wales. Over the years, we’ve
              enjoyed memorable drives out to places like Bala, with plenty of
              chances to stop along the way for food and conversation — whether
              that’s at the Red Kite Café and Grill or other local favourites.
              Every trip is about the drive, the scenery, and the company.
            </p>
            <div className="flex justify-start">
              <button className="btn">Events</button>
            </div>
          </div>
          <img
            src="/images/evo-adventure.jpg"
            alt="Elan Valley Road Trip"
            className="object-cover w-full h-[400px] md:h-110"
          />
        </div>

        {/* Mobile version */}

        <div className="md:hidden px-4 sm:px-10 md:px-56 -mt-4">
          <a
            href="/gallery"
            className="relative block w-full h-[300px] sm:h-[400px] overflow-hidden"
          >
            <img
              src="/images/mclaren.jpg"
              alt="Lineup of Supercars"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 gap-3 bg-slate-800/20 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-4xl sm:text-3xl font-semibold text-white drop-shadow-3xl">
                Explore New Roads
              </h2>
              <button className="btn">See the Lineup</button>
            </div>
          </a>
        </div>

        {/* Desktop version */}
        <div className="hidden md:grid md:grid-cols-2 gap-10 items-center px-4 sm:px-10 md:px-56">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-slate-800">
              Supercars and Classics
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl">
              Everyone is welcome—supercars, 90s icons, JDM legends, timeless
              classics, and everything in between. Part of the excitement is
              never knowing exactly what will roll up at each event, making
              every meet unique and full of surprises.
            </p>
            <div className="flex justify-start">
              <button className="btn">Cars</button>
            </div>
          </div>
          <img
            src="/images/mclaren.jpg"
            alt="Lineup of Supercars"
            className="object-cover w-full h-[400px] md:h-110"
          />
        </div>
      </div>
    </section>
  );
}
