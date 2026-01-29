"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroOverlay() {
  const router = useRouter();

  function navigateRules() {
    router.push("/rules");
  }

  return (
    <div className="absolute inset-0 z-20 flex flex-col  justify-center bg-slate-900/60 md:bg-slate-900/10 text-white mx-auto pt-26 md:pt-26 lg:pt-0 h-162.5 md:h-212.5">
      <div>
        <h1 className="md:text-9xl lg:text-left  text-center md:px-56 text-6xl font-bold mb-4 max-w-2xl md:max-w-6xl antialiased ">
          WELCOME TO <span className="text-yellow-400">CAR FARM SOCIAL </span>
        </h1>
      </div>

    </div>
  );
}
