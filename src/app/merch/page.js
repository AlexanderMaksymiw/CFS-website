import Footer from "../components/Footer";
import SubPageHero from "../components/SubPageHero";
import MerchContainer from "../components/MerchContainer";
import Image from "next/image";
import Map from "../components/Map";
import Header from "../components/Header";

export default async function Merch() {
  return (
    <div className="bg-white">
      <Header />
      <SubPageHero title="CFS MERCH" images={["/images/r8-black.jpg"]} />

      <div className="px-6 md:px-30 pt-20">
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 tracking-tighter">
            The Collection
          </h2>
          <div className="h-0.5 flex-grow bg-slate-900" />
        </div>
        <MerchContainer />
      </div>

      {/* --- FEATURED STICKERS SECTION --- */}
      <div className="relative grid md:grid-cols-2 mt-20 border-t border-slate-900">
        <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden group">
          <Image
            src="/images/cfs-stickers.jpg"
            alt="CFS Stickers"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Angular Overlay */}
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="flex flex-col justify-center p-10 md:p-24 bg-slate-900 text-white space-y-8">
          <div className="w-20 h-2 bg-amber-400" />
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.8]">
              JOIN THE <br /> LINEUP
            </h2>
            <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-md">
              Grab some CFS vinyl, just a small way to show you’re part of the
              crew.
            </p>
          </div>
          <div className="bg-amber-400/10 border border-amber-400/20 p-4 w-fit">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">
              Available at CFS
            </p>
          </div>
        </div>
      </div>

      <Map />
      <Footer />
    </div>
  );
}
