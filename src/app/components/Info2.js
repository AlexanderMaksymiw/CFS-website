import Divider from "./Divider";
import Image from "next/image";
import Link from "next/link";
import Content from "./Content";

export default function Info2() {
  return (
    <section className=" pb-20">
      <Divider image="/images/two-scoobies.jpg" className="h-300"></Divider>
      <div className="sm:px-10 md:px-30 gap-6 relative z-0 pt-10  ">
        <h2 className="relative lg:block z-10 text-slate-800 text-4xl sm:text-5xl font-bold pb-5 drop-shadow-2xl">
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
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                See road trips
              </button>
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
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                See stock
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-30">
        <Content />
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
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  Get logs
                </button>
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
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  Hire for your event
                </button>
              </div>
            </div>
          </div>
        </div>
        <Content />
      </div>

      <div className="md:hidden px-4 sm:px-10 md:px-56 pt-10 pb-10 ">
        <Link
          href="/latest/"
          className="relative block w-full h-75 sm:h-100
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
      <div className=" relative hidden md:grid md:grid-cols-2 gap-10 items-center px-4 pt-20 sm:px-10 pb-20 md:px-30">
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
      <div className="relative hidden md:grid md:grid-cols-2 gap-10 items-center px-4 sm:px-10 md:px-30">
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
