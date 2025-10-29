"use client";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import SectionBG from "../components/SectionBG";
import { useRouter } from "next/navigation";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

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
      <div className="relative md:hidden w-full h-[300px] sm:h-[400px] overflow-hidden bg-gray-200 ">
        <Image
          src="/images/i8-bmw.png"
          alt="BMW I8 at CFS"
          fill
          className="object-cover px-4 pt-5"
          priority
        />
      </div>
      <div className="px-4 md:hidden pb-10  bg-gray-200 ">
        <div className="md:hidden px-5 pt-10 pb-10 border-gray-200 bg-white shadow shadow-indigo-200">
          <h2 className="pb-5 text-3xl font-semibold text-slate-900 max-w-50">
            Community & Clubs Welcome
          </h2>
          <p className="leading-7 text-lg max-w-70 text-slate-800">
            CFS welcomes enthusiasts of all levels to enjoy scenic road trips,
            friendly competitions, photography opportunities, and delicious food
            and drinks. Family-friendly and inclusive, our events encourage
            socializing, sharing your passion, and making memories but remember,
            respect and the right attitude are key. Please follow our simple
            rules to keep the meet safe and enjoyable for everyone.
          </p>
          <div className="pt-15">
            <Link href={"/rules"}>
              <button className="btn">See Rules</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden relative px-4 sm:px-10 md:px-56 pb-5 pt-5 h-[350px] ">
        <video
          src="/videos/mean-bean-coffee.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full  shadow shadow-indigo-200"
        />
        <div className="absolute inset-0 gap-5  flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-4xl sm:text-3xl font-semibold text-white drop-shadow-3xl max-w-50 drop-shadow-2xl">
            Grab Some Food & Drink
          </h2>

        </div>
      </div>

      <div>
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

              <p className="text-lg px-4 leading-7 sm:text-xl lg:text-xl lg:font-semibold lg:text-white text-slate-900 max-w-md text-center md:text-left drop-shadow-xl">
                Every Thursday evening throughout Spring, Summer, and Autumn, up
                to 400 amazing rides gather near Oswestry, Shropshire.
              </p>

              <p className="text-lg px-4 sm:text-xl leading-7 lg:font-semibold lg:text-white text-slate-900  max-w-md text-center md:text-left drop-shadow-xl">
                CFS is more than just a meet-up, our events include scenic road
                trips, delicious food and coffee, and a relaxed, inclusive
                atmosphere that celebrates everything from supercars to timeless
                classics.
              </p>
            </div>

            <div className="relative w-full md:w-[900px] h-[400px] sm:h-[350px] md:h-[600px] overflow-hidden shadow-xl">
              <Slideshow
                images={[
                  "/images/friends-4.jpg",
                  "/images/eating.jpg",
                  "/images/dad-2.jpg",
                  "/images/ice-cream.jpg",
                  "/images/having-fun.jpg",
                  "/images/mx5-polaroid.jpg",
                  "/images/dog-6.jpg",
                  "/images/group-2.jpg",
                  "/images/talking.jpg",
                  "/images/dog-4.jpg",
                  "/images/ice-cream-cfs.jpg",
                  "/images/mg.jpg",
                  "/images/photographer.jpg",
                  "/images/cfs-hoodie.jpg",
                ]}
              />
            </div>
          </div>
        </SectionBG>
        <div className="sm:px-10 md:px-56 gap-6 relative z-0 pt-20">
          <h2 className="relative lg:block z-10 text-slate-800 text-4xl sm:text-5xl font-bold pb-10  text-center  drop-shadow-2xl">
            Share Your CFS Moments
          </h2>
          {/* LEFT + RIGHT SECTION */}
          <div className="flex flex-col md:flex-row gap-6 ">
            {/* LEFT SECTION */}
            <div
              className="relative hidden md:block flex-1 bg-cover bg-center min-h-[500px] sm:min-h-[600px] md:min-h-[500px] overflow-hidden"
              style={{ backgroundImage: "url('/images/subaru-couple.jpg')" }}
            >
              <h2 className="sm:hidden relative z-10 text-white text-4xl sm:text-5xl font-bold pt-16  px-8 text-center md:text-left drop-shadow-2xl">
                Share Your CFS Moments
              </h2>
            </div>

            {/* RIGHT SECTION */}
            <div className="relative flex-1 min-h-[500px] sm:min-h-[400px] md:min-h-[500px] overflow-hidden z-20">
              <div className="absolute inset-0 z-0">
                <Slideshow
                  images={[
                    "/images/silver-e30.jpg",
                    "/images/bmw-exit.jpg",
                    "/images/subaru-red.jpg",
                    "/images/tvr-chimaera.jpg",
                    "/images/ww2.jpg",
                    "/images/beetle.jpg",
                    "/images/205-leaving.jpg",
                    "/images/evo-6.jpg",
                    "/images/toyota-yaris.jpg",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION (STACKED BELOW LEFT + RIGHT) */}
          <div className="px-4 mx-auto flex flex-col justify-center items-center pb-10 pt-10 z-10">
            <p className="text-slate-800 font-semibold text-lg lg:max-w-xl lg:text-2xl leading-7 max-w-xs text-center">
              Tag your photos with
              <span className="text-sky-500"> #carfarmsocial</span> on Instagram
              or Facebook for a chance to be featured!
            </p>
            <div className="space-x-3 mt-5">
              <SocialIcon
                bgColor="#ffffff"
                fgColor="#0f172a"
                url="https://www.facebook.com/groups/3764447677206661"
              />
              <SocialIcon
                bgColor="#ffffff"
                fgColor="#0f172a"
                url="https://www.instagram.com/carfarmsocial/"
              />
              <SocialIcon
                bgColor="#ffffff"
                fgColor="#0f172a"
                url="https://www.youtube.com/@carfarmsocial"
              />
            </div>
          </div>
        </div>

        <div className=" relative h-[550px] lg:h-[650px]">
          <video
            src="/videos/cfs-civic.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative flex flex-col justify-center h-full px-4 lg:px-56 bg-black/50 ">
            <div className="border border-white flex p-6">
              <div>
                <h1 className="text-6xl sm:text-5xl lg:text-7xl font-bold text-white max-w-xl drop-shadow-2xl ">
                  Where Car Lovers Learn, Share, and Inspire
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-white max-w-70 lg:max-w-xl  pt-10 pb-10 drop-shadow-2xl">
                  With a family and dog friendly atmosphere, clear rules, and
                  respect for all, it’s an event everyone can enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
