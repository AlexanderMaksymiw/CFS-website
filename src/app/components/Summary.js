"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Summary({ title, content, button, image }) {
  return (
    <div className="flex container mx-auto p-6 gap-x-55 ">
      <div className="flex flex-col gap-9 flex-1 justify-center max-w-xl text-slate-800">
        <h1 className="font-bold text-base md:text-2xl lg:text-3xl md:px-6 text-slate-800 ">
          {title}
        </h1>
        <p className="md:px-6 max-w-xl text-md/6">{content}</p>
        <div className="md:px-6">
          <button className="btn ">{button}</button>
        </div>
      </div>
      <div className="flex-1 ">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
}
