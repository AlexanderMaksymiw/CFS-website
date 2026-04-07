"use client";
import Image from "next/image";
import Link from "next/link";

export default function RulesContent({ img, title, text, button, href }) {
  return (
    <div className="h-125 rounded-xl relative bg-black overflow-hidden">
      <Image src={img} alt={title} fill className="opacity-70 object-cover" />

      <div className="absolute top-20 left-20 text-white max-w-lg space-y-5">
        <h2 className=" text-white text-6xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="  text-white max-w-xl font-bold text-lg ">{text}</p>
        <Link href={href}>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
            {button}
          </button>
        </Link>
      </div>
    </div>
  );
}
