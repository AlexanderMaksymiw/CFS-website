"use client";
import Image from "next/image";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

export default function SubPageHero({ title }) {
  return (
    <div className="relative w-full h-180">
      <Header />
      <Image
        className="object-cover"
        src="/images/row_2.jpg"
        alt="Porsche in a row of cars"
        fill
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className=" absolute inset-0 flex flex-col px-55 justify-center  text-white">
        <h1 className="text-7xl text-center drop-shadow-2xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
