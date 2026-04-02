"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import SubPageHero from "../components/SubPageHero";
import Footer from "../components/Footer";
import Link from "next/link";
import { client } from "@/sanity/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const CREW_QUERY = `*[_type == "crew"] | order(name asc) {
  _id,
  name,
  role,
  "imageUrl": image.asset->url,
  bio
}`;

export default function Crew() {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    async function fetchCrew() {
      const data = await client.fetch(CREW_QUERY);
      setCrew(data);
    }
    fetchCrew();
  }, []);

  return (
    <div>
      <SubPageHero
        title="Meet the Crew"
        images={["/images/hero/ford-escort-green-side.jpg"]}
      />

      <div className="grid md:grid-cols-3 gap-6 pt-10 px-4 sm:px-10 md:px-56">
        {crew.length > 0 ? (
          crew.map((member) => (
            <div
              key={member._id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                  No image
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading crew...</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
