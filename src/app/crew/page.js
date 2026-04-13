import Image from "next/image";
import Header from "../components/Header";
import SubPageHero from "../components/SubPageHero";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { CREW_QUERY } from "@/sanity/queries/crew";
import Map from "../components/Map";

const builder = imageUrlBuilder(client);

export default async function Crew() {
  const crew = await client.fetch(CREW_QUERY);

  return (
    <div className="bg-white">
      <Header />
      <SubPageHero title="THE CREW" images={["/images/hero/bmw-back.jpg"]} />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] items-center border-b border-slate-900">
        <div className="p-6 md:p-20 lg:p-30 space-y-8">
          <div className="w-20 h-2 bg-amber-400" />
          <h1 className="text-5xl md:text-7xl font-black italic text-slate-900 leading-[0.85] tracking-tighter uppercase">
            CFS
            <br /> Marshals
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight italic uppercase tracking-tight">
            Road trip organization, arrival management, and site flow control.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
            Car Farm Social Club wouldn’t exist without our crew of dedicated
            marshals. From directing 400+ builds into formation to ensuring the
            vibe stays safe and relaxed, these enthusiasts volunteer their time
            to keep the gears turning every Thursday night.
          </p>
        </div>
        <div className="relative h-100 lg:h-full w-full bg-slate-100">
          <Image
            src="/images/marshals-group.jpg"
            alt="CFS group"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative bg-slate-900 py-24 md:py-40 overflow-hidden">
        <div className="relative px-6 md:px-30">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none">
              KEEPING <br /> <span className="text-amber-400">CFS SAFE</span>
            </h2>
            <p className="text-slate-400 max-w-md text-lg font-medium">
              Our marshals are enthusiasts, just like you. They volunteer their
              time to ensure every meet is safe, and respectful so that everyone
              can enjoy CFS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "/images/cfs-merch.jpg",
              "/images/marshals-2.jpg",
              "/images/ice-cream-cfs.jpg",
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-4/5 bg-slate-800 border-b-4 border-amber-400 overflow-hidden group"
              >
                <Image
                  src={src}
                  alt="Marshal activity"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-102 grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-30 py-32">
        <div className="flex items-baseline gap-4 mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900 tracking-tighter">
            MEET THE MARSHALS
          </h2>
          <div className="h-0.5 grow bg-slate-900" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {crew.length > 0 ? (
            crew.map((member) => (
              <div key={member._id} className="group flex flex-col space-y-6">
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden ">
                  {member.carImage ? (
                    <Image
                      src={builder.image(member.carImage).url()}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-102"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-black text-slate-200 italic uppercase">
                      No Car Photo
                    </div>
                  )}
                  <div className="absolute top-0 right-0 bg-amber-400 px-4 py-2 font-black italic text-slate-900 uppercase text-xs">
                    {member.role}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b-2 border-slate-100 pb-2">
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900">
                      {member.name}
                    </h3>
                    <span className="text-amber-500 font-black italic uppercase text-sm">
                      {member.car}
                    </span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="font-black italic uppercase text-slate-300">
              Summoning the pit crew...
            </p>
          )}
        </div>
      </div>

      <Map />
      <Footer />
    </div>
  );
}
