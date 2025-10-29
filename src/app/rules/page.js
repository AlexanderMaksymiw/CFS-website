"use client";
import Image from "next/image";
import Header from "../components/Header";
import SubPageHero from "../components/SubPageHero";
import Footer from "../components/Footer";

export default function Rules() {
  const rules = [
    {
      id: "01",
      title: "Arrival",
      img: "/images/young-friends.jpg",
      text: `Respect and obey marshals at all times. Park up, switch your engine off, and take the keys out. Do not sit revving your engine. Maintain a strict 10MPH crawl through the car park. If you're unsure of where to park, speak to one of our marshals who can be found at the main entrance or nearby seating area.`,
    },
    {
      id: "02",
      title: "Car Park & Exit Roads",
      video: "/videos/exit.mp4",
      text: `Arrival rules apply in the car park, on the exit road to the A483, and when joining the A483. No wheelspinning is allowed at any time.`,
    },
    {
      id: "03",
      title: "Leaving the Event",
      img: "/images/evo-6.jpg",
      text: `Leave in an orderly fashion. A gentle 1st or 2nd gear pull to reach legal speed is acceptable, but do not accelerate aggressively all the way to the end of the straight towards Oswestry. This alarms local residents and other road users, and it is both dangerous and illegal.`,
    },
    {
      id: "04",
      title: "Filming & Social Media",
      img: "/images/abarth.jpg",
      text: `Spectators must not encourage bad behaviour by filming it or posting it online, as this damages CFS. Only the official CFS photographer is permitted to monitor junction activity. Filming cars exiting via the minor road leading to the A483 is also banned.`,
    },
    {
      id: "05",
      title: "Community Spirit",
      img: "/images/talking.jpg",
      text: `CFS is a social gathering, so be social and respectful. Prejudice, elitism, or gross negativity towards other members and their cars is not in the spirit of CFS. This also extends to online behaviour on CFS social media channels, where bans may be imposed at the discretion of the organising committee.`,
    },
    {
      id: "06",
      title: "On a Final Note",
      img: "/images/i8-bmw.png",
      text: `Thank you to everyone for supporting the event. With everyone’s cooperation, we can look forward to many more safe and enjoyable CFS meets.`,
    },
  ];

  return (
    <div>
      <Header />
      <SubPageHero
        title="Car Farm Social Rules"
        images={["/images/porsche-gt4.webp"]}
      />

      {/* Intro */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 max-w-7xl mx-auto">
        <h3 className="text-slate-800 text-lg sm:text-xl md:text-2xl font-semibold leading-8 text-center pt-10 pb-8">
          NEW RULES WITH IMMEDIATE EFFECT. Ignorance of the rules is not an
          excuse. Breaking the rules will result in a{" "}
          <span className="text-red-600">PERMANENT BAN</span>. These rules exist
          to ensure the absolute safety of people, pets, and other road users.
        </h3>

        {/* Rules List */}
        {rules.map((rule) => (
          <div
            key={rule.id}
            className="border-t border-slate-300 pt-10 md:pt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-10">
              {/* Rule number */}
              <h2 className="text-slate-800 text-3xl font-bold text-center md:text-left">
                {rule.id}
              </h2>

              {/* Rule content */}
              <div>
                <h2 className="text-slate-800 text-4xl font-bold mb-6 text-center md:text-left">
                  {rule.title}
                </h2>

                {/* Image or Video */}
                <div className="relative w-full h-64 sm:h-80 md:h-[480px] lg:h-[550px]  overflow-hidden">
                  {rule.img ? (
                    <Image
                      src={rule.img}
                      alt={rule.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      src={rule.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>

                {/* Text */}
                <p className="text-lg sm:text-xl font-medium text-slate-700 pt-6 pb-10 text-center md:text-left leading-relaxed">
                  {rule.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
