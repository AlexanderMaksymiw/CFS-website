import Image from "next/image";
import SubPageHero from "../components/SubPageHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import { SocialIcon } from "react-social-icons";
import Map from "../components/Map";

export default function Gallery() {
  return (
    <div className="bg-white">
      <Header />
      <SubPageHero title="THE ARCHIVE" images={["/images/bmw-m2-drive.jpg"]} />

      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] items-center border-b border-slate-900">
        <div className="p-6 md:p-20 lg:p-30 space-y-8">
          <div className="w-20 h-2 bg-amber-400" />
          <h1 className="text-5xl md:text-7xl font-black italic text-slate-900 leading-[0.85] tracking-tighter uppercase">
            SHARE YOUR <br /> PERSPECTIVE
          </h1>

          <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight italic uppercase tracking-tight max-w-md">
            From professional glass to phone snaps—every angle tells the story
            of the meet.
          </p>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            We’re incredibly lucky to have a community of talented creators. Tag
            us to be featured in our weekly highlights.
          </p>
        </div>

        <div className="relative h-[500px] lg:h-full w-full bg-slate-100 overflow-hidden">
          <Image
            src="/images/datsun-240z.jpg"
            alt="Datsun 240Z"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-24 md:py-32">
        <div className="px-6 md:px-30 mb-16 flex items-baseline gap-4">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 tracking-tighter">
            COMMUNITY HIGHLIGHTS
          </h2>
          <div className="h-0.5 flex-grow bg-slate-900" />
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
