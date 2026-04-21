import Image from "next/image";
import SubPageHero from "../components/SubPageHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import { SocialIcon } from "react-social-icons";
import Map from "../components/Map";
import WeeklyWinners from "../components/WeeklyWinners";
import WeeklyWinnersContent from "../components/WeeklyWinnersContent";

export default function Gallery() {
  return (
    <div className="bg-white">
      <Header />
      <SubPageHero title="THE PADDOCK" images={["/images/bmw-m2-drive.jpg"]} />

      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] items-center border-b border-slate-300">
        <div className="p-6 md:p-20 lg:p-30 space-y-8">
          <div className="w-20 h-2 bg-amber-400" />
          <h1 className="text-5xl md:text-6xl font-black italic text-slate-900 leading-[0.85] tracking-tight uppercase">
            SHARE YOUR <br /> PHOTOS
          </h1>

          <p className="text-xl md:text-xl font-bold text-slate-900 leading-tight italic uppercase tracking-tight max-w-md">
            We’re incredibly lucky to have a community of talented creators. Tag
            us to be featured on our page.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Only the official CFS photographer is allowed to take photos on exit
            to the A483
          </p>
        </div>

        <div className="relative h-125 lg:h-full w-full bg-slate-100 overflow-hidden">
          <Image
            src="/images/datsun-240z.jpg"
            alt="Datsun 240Z"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-102"
          />
        </div>
      </section>
      <WeeklyWinnersContent />

      <section className="bg-slate-50 py-15 md:py-15">
        <div className="px-6 md:px-30 mb-5 flex items-baseline gap-4">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 tracking-tight">
            COMMUNITY HIGHLIGHTS
          </h2>
          <div className="h-0.5 grow bg-slate-300" />
        </div>
        <div className="px-6 md:px-30">
          <Featured />
        </div>
      </section>

      <Map />
      <Footer />
    </div>
  );
}
