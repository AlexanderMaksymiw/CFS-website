import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/sanityClient";

import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const builder = imageUrlBuilder(client);

const ROADTRIP_QUERY = `*[_type == "roadTrip" && slug.current == $slug][0]`;

// Helper to safely build Sanity image URLs
function urlFor(source) {
  return source ? builder.image(source) : null;
}

export default async function RoadTripPage({ params }) {
  const { slug } = await params;

  const roadTrip = await client.fetch(ROADTRIP_QUERY, { slug });

  if (!roadTrip) return <p>Road trip not found</p>;

  // Hero and first image URLs
  const heroImageUrl = roadTrip.heroImage
    ? urlFor(roadTrip.heroImage).width(1200).height(600).url()
    : null;

  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold">{roadTrip.title}</h1>
        <p className="text-gray-500">
          {new Date(roadTrip.tripDate).toLocaleDateString()} &bull;{" "}
          {roadTrip.miles} miles &bull; {roadTrip.time}
        </p>
        {heroImageUrl && (
          <Image
            src={heroImageUrl}
            alt={roadTrip.title}
            width={1200}
            height={600}
            className="rounded-xl object-cover"
          />
        )}
        <p>{roadTrip.description}</p>
        <div className="grid grid-cols-3 gap-4">
          {roadTrip.images?.map((img, i) => {
            const imgUrl = urlFor(img)?.width(400).height(300).url();
            if (!imgUrl) return null; // skip invalid images
            return (
              <Image
                key={i}
                src={imgUrl}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            );
          })}
        </div>
        {/* Google Maps embed */}
        {roadTrip.googleMapsEmbed && (
          <iframe
            src={roadTrip.googleMapsEmbed}
            width="100%"
            height="450"
            className="rounded-xl"
            allowFullScreen
          />
        )}
        {/* QR Code */}
        {roadTrip.qrCode &&
          urlFor(roadTrip.qrCode)?.width(150).height(150).url() && (
            <Image
              src={urlFor(roadTrip.qrCode).width(150).height(150).url()}
              alt="QR code"
              width={150}
              height={150}
            />
          )}
      </div>
      <Footer />
    </div>
  );
}
