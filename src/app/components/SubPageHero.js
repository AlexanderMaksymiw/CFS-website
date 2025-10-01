"use client";
import Image from "next/image";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import Footer from "./Footer";

export default function SubPageHero({ title, images }) {
  //default images if none are passed as props
  const defaultImages = [
    "/images/Ferrari Hero 2.jpg",
    "/images/M3.jpg",
  ];

  //use props if provided, otherwise fallback to defaults
  const hero = images && images.length > 0 ? images : defaultImages;

  return (
    <div className=" hero relative w-full h-180">
      <Header />
      <Image
      src={hero[0]}
        className="object-cover"
        alt={title}
        fill
        priority
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className=" absolute inset-0 flex flex-col px-55 justify-center  text-white">
        <h1 className="text-7xl text-center drop-shadow-2xl font-bold">
          {title}
        </h1>
      </div>
    </div>
  );
}
