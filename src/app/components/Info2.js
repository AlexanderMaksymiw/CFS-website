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
    <section className=" pb-20">
      <div className="px-30 pb-20">
        <NextRoadTripContent />
      </div>
      <Divider
        className="h-480"
        content={
          <div>
            <h2 className="text-6xl font-bold drop-shadow-2xl max-w-xl tracking-tight">
              SHOW OFF YOUR EPIC CFS MOMENTS!
            </h2>
            <p className="pt-5 max-w-xl text-lg tracking-tight">
              Share your pride and joy or your favorite moments at CFS from one
              of our exciting road trips or moments from the paddock! Interact
              with us on our socials for a chance to win to be featured.
            </p>
            <div className="flex gap-3 pt-5">
              <SocialIcon
                bgColor="#ffffff"
                fgColor="#0f172a"
                url="https://www.facebook.com/groups/3764447677206661"
                style={{ height: 40, width: 40 }}
              />
              <SocialIcon
                bgColor="#ffffff"
                fgColor="#0f172a"
                url="https://www.instagram.com/carfarmsocial/"
                style={{ height: 40, width: 40 }}
              />
            </div>
            <Featured />
          </div>
        }
      >
        {" "}
      </Divider>
      <div className="sm:px-10 md:px-30 gap-6 relative z-0   ">
        <h2 className="relative lg:block z-10  text-4xl sm:text-5xl font-bold pb-5 drop-shadow-2xl">
          MORE THAN JUST CARS
        </h2>
        {/* LEFT + RIGHT SECTION */}
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* LEFT SECTION */}
          <div className="relative hidden md:block flex-1 bg-cover bg-center min-h-125 sm:min-h-150 md:min-h-125 rounded-xl overflow-hidden">
            <div className="absolute inset-0 z-0 h-1/2">
              <Image
                src="/images/205-drive.jpg"
                alt="Peugeot 205 GTI"
                fill
                className="w-full h-full object-cover object-[900%_100%] "
              />
            </div>
            <div className=" pt-85 pl-10 max-w-lg space-y-5">
              <h2 className=" text-4xl font-bold tracking-tight">EXPLORE</h2>
              <p className=" max-w-xl font-bold text-md ">
                Explore twisty roads and see Wales through a new light. We
                organise frequent road trips across Wales sometimes to other
                events other times to experience the beautiful welsh
                countryside.
              </p>
              <Link href={"http://localhost:3000/road-trips"}>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
                  See road trips
                </button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block flex-1  bg-cover bg-center min-h-125 sm:min-h-150 md:min-h-150 rounded-xl overflow-hidden">
            <div className="absolute inset-0 z-0 h-1/2">
              <Image
                src="/images/cfs-merchandise.jpg"
                alt="CFS hoodies, t-shirts, and stickers"
                fill
                className="object-cover object-[10%_100%] "
              />
            </div>
            <div className=" pt-85 pl-10 max-w-lg space-y-5">
              <h2 className=" text-4xl font-bold tracking-tight">REPRESENT</h2>
              <p className=" max-w-xl font-bold text-md ">
                Represent CFS with our comfy selection of hoodies and t-shirts,
                or join the club and slap a CFS sticker on your car. We sell CFS
                merch in-person every Thursday at Llynclys Hall Farm.
              </p>
              <Link href={"http://localhost:3000/merch"}>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
                  See stock
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-30">
        <Content
          title={"LLYNCLYS HALL FARM"}
          text={`Llynclys Hall Farm grows thousands of pumpkins every year.
In fact, it produces so many that it’s renowned as the largest pumpkin producer in Shropshire.
Locals from Oswestry call it “the pumpkin farm.”`}
          button={"Discover Llynclys Farm"}
          href={"https://llynclyshall.co.uk/"}
          img="/images/llynclys-hall-farm-shop-dog-furiendly.jpg"
        />
        <div className=" gap-6 relative z-0 pt-10">
          {/* LEFT + RIGHT SECTION */}
          <div className="flex flex-col md:flex-row gap-6 ">
            {/* LEFT SECTION */}
            <div className="relative hidden md:block flex-1  bg-cover bg-center min-h-125 sm:min-h-150 md:min-h-125 rounded-xl overflow-hidden">
              <div className="absolute inset-0 z-0 h-1/2">
                <Image
                  src="/images/llynclys-hall-farm-logs.jpg"
                  alt="llynclys hall farm bag of logs"
                  fill
                  className="w-full h-full object-cover object-[80%_20%] "
                />
              </div>
              <div className=" pt-85 pl-10 max-w-lg space-y-5">
                <h2 className=" text-4xl font-bold tracking-tight">FIREWOOD</h2>
                <p className=" max-w-xl font-bold text-md ">
                  Drop into the farm at Llynclys, near Oswestry, to pick up a
                  bag of logs. Cut and ready to burn perfect for keeping the
                  home warm. £65.00 bag.
                </p>
                <Link href={"https://llynclyshall.co.uk/about-us/farm-shop/"}>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
                    Get logs
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="relative hidden md:block flex-1 bg-cover bg-center min-h-125 sm:min-h-150 md:min-h-150 rounded-xl overflow-hidden">
              <div className="absolute inset-0 z-0 h-1/2">
                <Image
                  src="/images/coffee-2.jpg"
                  alt="mean bean coffee van"
                  fill
                  className=" object-cover "
                />
              </div>
              <div className=" pt-85 pl-10 max-w-lg space-y-5">
                <h2 className=" text-4xl font-bold tracking-tight">COFFEE</h2>
                <p className=" max-w-xl font-bold text-md ">
                  The Mean Bean Coffee Van is Llynclys Hall Farm's mobile coffee
                  van equipped with a professional coffee machine ready to
                  deploy as a coffee bar serving Shrewsbury supplied Aroma
                  coffee.
                </p>
                <Link href={"https://llynclyshall.co.uk/mean-bean-coffee/"}>
                  <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center hover:cursor-pointer">
                    Hire for your event
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <RulesContent
          title={"CFS PADDOCK RULES"}
          text={
            "Please take some time to read the rules of attending CFS we have zero tollerance for anti-social behaviour inside the paddock and surrounding area of Llynclys Hall Farm. Violating the rules will result in a permenant ban."
          }
          button={"Rules"}
          href={"/rules"}
          img="/images/mirror-smiling.jpg"
        />
      </div>

      {/* Mobile version */}

      <div className="md:hidden px-4 sm:px-10 md:px-56">
        <Link href="/gallery" className="relative block w-full h-75 sm:h-100">
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
      <div className="relative hidden md:grid md:grid-cols-2 gap-10 items-center px-4 sm:px-10 md:px-30 mt-20">
        <div className="relative w-full h-100 md:h-110">
          <Image
            src="/images/orange-mclaren.jpg"
            alt="Lineup of Supercars"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            SUPERCARS AND CLASSICS
          </h2>
          <p className="text-lg  max-w-2xl">
            Everyone is welcome; supercars, 90s icons, JDM legends, timeless
            classics, and everything in between. Part of the excitement is never
            knowing exactly what will roll up at each event, making every meet
            unique and full of surprises.
          </p>
          <div className="flex justify-start">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
              Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
