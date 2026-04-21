import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/sanityClient";

import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import RoadTripGallery from "@/app/components/RoadTripGallery";

const builder = imageUrlBuilder(client);

const ROADTRIP_QUERY = `*[_type == "roadTrip" && slug.current == $slug][0]{
  ...,
  heroImage{ asset->{ url } },
  images[]{ _key, asset->{ url } },
  qrCode{ asset->{ url } }
}`;

function urlFor(source) {
  return source ? builder.image(source) : null;
}

export default async function RoadTripPage({ params }) {
  const { slug } = await params;
  const roadTrip = await client.fetch(ROADTRIP_QUERY, { slug });

  if (!roadTrip)
    return (
      <p className="h-screen flex items-center justify-center bg-slate-900 text-white">
        Road trip not found
      </p>
    );

  const heroImageUrl = roadTrip.heroImage
    ? urlFor(roadTrip.heroImage).width(1600).url()
    : null;

  const date = new Date(roadTrip.tripDate);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white">
      <Header />

      <div className="h-[60vh] md:h-[75vh] relative bg-slate-900 overflow-hidden">
        {heroImageUrl && (
          <Image
            src={heroImageUrl}
            alt={roadTrip.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="px-6 md:px-30 -mt-20 md:-mt-32 relative z-10 pb-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-1.5 bg-amber-400" />
              <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight italic leading-[0.9] text-slate-900">
                {roadTrip.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 font-medium tracking-tight max-w-2xl leading-relaxed">
                {roadTrip.description}
              </p>
            </div>

            {roadTrip.stops?.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-black tracking-widest text-slate-400 uppercase">
                  Route Checkpoints
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {roadTrip.stops.map((stop, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-slate-50 border-l-4 border-slate-900 p-4 transition-colors hover:border-amber-400"
                    >
                      <span className="text-2xl">{stop.icon}</span>
                      <div className="flex flex-col">
                        <span className="font-black uppercase text-slate-900 tracking-tight">
                          {stop.name}
                        </span>
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wide">
                          {stop.notes}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-96 bg-slate-900 text-white p-8 space-y-8 shadow-2xl">
            <div className="space-y-6">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-amber-400 uppercase border-b border-white/10 pb-4">
                Trip Logistics
              </h2>

              <div className="space-y-4">
                {[
                  { label: "Date", value: formattedDate },
                  { label: "Departure", value: formattedTime },
                  { label: "Distance", value: `${roadTrip.miles} Miles` },
                  { label: "Duration", value: roadTrip.time },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-end border-b border-white/5 pb-2"
                  >
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span className="font-black uppercase italic tracking-tight">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 text-center space-y-4">
              <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                Digital Navigator
              </h3>
              <div className="bg-slate-50 p-2 inline-block">
                <Image
                  src={urlFor(roadTrip.qrCode).width(200).url()}
                  alt="QR code"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight leading-tight">
                Scan to sync route with Google Maps
              </p>
            </div>
          </div>
        </div>
      </div>

      {roadTrip.googleMapsEmbed && (
        <div className="px-6 md:px-30 mb-20">
          <div className="border-12 border-slate-50 overflow-hidden">
            <iframe
              src={roadTrip.googleMapsEmbed}
              width="100%"
              height="500"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="px-6 md:px-30 pt-10 mb-20 border-t border-slate-100">
        <div className="flex items-baseline gap-4 mb-10">
          <h3 className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase text-slate-900">
            Gallery
          </h3>
          <div className="h-2 grow bg-slate-900" />
        </div>
        <RoadTripGallery roadTrips={roadTrip.images} />
      </div>

      <Footer />
    </div>
  );
}
