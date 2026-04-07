"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import SubPageHero from "../components/SubPageHero";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { CREW_QUERY } from "@/sanity/queries/crew";

const builder = imageUrlBuilder(client);

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
        title="MEET THE MARSHALS"
        images={["/images/hero/bmw-back.jpg"]}
      />

      <div>
        <div className="relative flex flex-col md:flex-row  md:items-start mt-20 gap-10">
          <div className="space-y-4  w-full md:w-200 md:h-170">
            <h1 className="text-4xl max-w-90 lg:max-w-110 mx-auto mt-25 sm:text-5xl lg:text-5xl font-bold  text-slate-900 text-center md:text-left">
              SHROPSHIRE'S BEST PIT STOP BETWEEN ENGLAND AND WALES FOR CAR
              CULTURE AND COMMUNITY
            </h1>
            <p className="text-lg  leading-7 sm:text-xl lg:text-2xl mx-auto text-slate-900 max-w-110 font-semibold text-center md:text-left tracking-tight">
              Come see classic cars, supercars, JDM, VAG cars, passion projects
              and get inspired by their owners.
            </p>

            <p className="text-xl sm:text-xl leading-7   text-slate-900 mx-auto tracking-tight max-w-110 text-center md:text-left">
              Every Thursday evening up to 400 like-minded car enthusiasts meet
              up at Llynclys farm to show off their pride and joy, share their
              ride's story and learn from others. CFS is more than just a
              meet-up, our events include scenic road trips, delicious food and
              coffee, with a relaxed atmosphere that celebrates car culture.
            </p>
          </div>

          <div className="relative w-full md:w-240 h-100 sm:h-87.5 md:h-200 overflow-hidden rounded-xl">
            <Image
              src="/images/marshals-group.jpg"
              alt="CFS marshal"
              fill
              className="object-cover object-[75%] scale-110"
            />
          </div>
        </div>
        <div
          className=" h-250 bg-amber-400 mt-5 px-30 gap-10"
          style={{
            clipPath: "polygon(0 0%, 100% 10%, 100% 100%, 0 80%)",
          }}
        >
          <div className="pt-25">
            <h2 className="text-5xl font-bold tracking-tight text-white">
              KEEPING CFS SAFE
            </h2>
          </div>
          <div className="grid grid-cols-3 relative gap-8 pt-50">
            <div className=" relative  h-100  rounded-xl  w-full">
              <Image
                src="/images/cfs-merch.jpg"
                alt="paul"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className=" relative h-100  rounded-xl  w-full">
              <Image
                src="/images/marshals-2.jpg"
                alt="marshals"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className=" relative h-100 rounded-xl  w-full">
              <Image
                src="/images/ice-cream-cfs.jpg"
                alt="marshals"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-6xl font-bold tracking-tight px-30">
            MEET OUR MARSHALS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-25 px-30 pb-20">
            {crew.length > 0 ? (
              crew.map((member) => (
                <div
                  key={member._id}
                  className="flex flex-col space-y-5 bg-white rounded-xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-80 w-full">
                    {member.carImage ? (
                      <Image
                        src={builder.image(member.carImage).url()}
                        alt={member.car || member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex   bg-gray-200">
                        No image
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className=" space-y-2 pl-10">
                    <h3 className="text-3xl font-bold">{member.name}</h3>
                    <p className="text-lg font-semibold">{member.role}</p>
                    <p className="text-base">{member.bio}</p>
                    <p className="text-base font-medium">{member.car}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading crew...</p>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
