"use client";
import Image from "next/image";
import Header from "../components/Header";
import SubPageHero from "../components/SubPageHero";
import Footer from "../components/Footer";

export default function Rules() {
  const rules = [
    {
      id: "01",
      title: "ARRIVAL & ENTRY",
      img: "/images/young-friends.jpg",
      text: `Respect and obey marshals at all times. Park up, switch your engine off, and take the keys out. Do not sit revving your engine. Maintain a strict 10MPH crawl through the car park. If you're unsure of where to park, speak to one of our marshals who can be found at the main entrance or nearby seating area.`,
    },
    {
      id: "02",
      title: "CAR PARK & EXIT ROADS",
      video: "/videos/exit.mp4",
      text: `Arrival rules apply in the car park, on the exit road to the A483, and when joining the A483. No wheelspinning is allowed at any time.`,
    },
    {
      id: "03",
      title: "LEAVING THE EVENT",
      img: "/images/evo-6.jpg",
      text: `Leave in an orderly fashion. A gentle 1st or 2nd gear pull to reach legal speed is acceptable, but do not accelerate aggressively all the way to the end of the straight towards Oswestry. This alarms local residents and other road users, and it is both dangerous and illegal.`,
    },
    {
      id: "04",
      title: "FILMING & SOCIALS",
      img: "/images/abarth.jpg",
      text: `Spectators must not encourage bad behaviour by filming it or posting it online, as this damages CFS. Only the official CFS photographer is permitted to monitor junction activity. Filming cars exiting via the minor road leading to the A483 is also banned.`,
    },
    {
      id: "05",
      title: "COMMUNITY SPIRIT",
      img: "/images/talking.jpg",
      text: `CFS is a social gathering, so be social and respectful. Prejudice, elitism, or gross negativity towards other members and their cars is not in the spirit of CFS. This also extends to online behaviour on CFS social media channels.`,
    },
    {
      id: "06",
      title: "ON A FINAL NOTE",
      img: "/images/i8-bmw.png",
      text: `Thank you to everyone for supporting the event. With everyone’s cooperation, we can look forward to many more safe and enjoyable CFS meets.`,
    },
  ];

  return (
    <div className="bg-white">
      <Header />
      <SubPageHero
        title="PADDOCK RULES"
        images={["/images/porsche-gt4.webp"]}
      />

      {/* --- CRITICAL WARNING SECTION --- */}
      <div className="bg-slate-900 py-16 px-6 md:px-30">
        <div className="max-w-4xl space-y-6">
          <div className="w-20 h-2 bg-red-600" />
          <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase tracking-tighter leading-[0.85]">
            IGNORANCE IS NOT <br /> AN EXCUSE.
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Breaking the code results in a{" "}
            <span className="text-white underline decoration-red-600 underline-offset-4">
              PERMANENT BAN
            </span>
            . These rules ensure the safety of our community, our pets, and the
            future of CFS meets.
          </p>
        </div>
      </div>

      {/* --- RULES LIST --- */}
      <div className="px-6 md:px-30 py-20 space-y-32">
        {rules.map((rule) => (
          <div key={rule.id} className="relative group">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
              {/* SIDEBAR: Number & Title */}
              <div className="space-y-4 lg:sticky lg:top-32">
                <span className="text-8xl font-black text-slate-100 italic leading-none block">
                  {rule.id}
                </span>
                <h2 className="text-3xl md:text-5xl font-black italic uppercase text-slate-900 tracking-tighter leading-none">
                  {rule.title}
                </h2>
                <div className="w-12 h-1 bg-amber-400" />
              </div>

              {/* MAIN CONTENT: Media & Description */}
              <div className="space-y-8">
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden  ">
                  {rule.img ? (
                    <Image
                      src={rule.img}
                      alt={rule.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <video
                      src={rule.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full grayscale"
                    />
                  )}
                </div>

                <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed tracking-tight max-w-3xl">
                  {rule.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FINAL CALL TO ACTION --- */}
      <div className="px-6 md:px-30 pb-32">
        <div className="bg-amber-400 p-12 md:p-20 flex flex-col items-center text-center space-y-6">
          <h3 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 tracking-tighter">
            RESPECT THE DRIVE.
          </h3>
          <p className="text-slate-900 font-bold uppercase tracking-widest text-sm max-w-md">
            Help us keep the culture alive by calling out bad behaviour when you
            see it.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
