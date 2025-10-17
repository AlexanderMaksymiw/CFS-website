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
    <div className="absolute inset-0 z-20 flex flex-col justify-center text-left bg-slate-900/60 md:bg-slate-900/40 text-white px-4 pt-26 md:pt-26 h-[650px] md:h-[850px]">
      <div>
        <h1 className="md:text-8xl text-left md:px-56 text-6xl font-bold mb-4 max-w-2xl md:max-w-5xl antialiased ">
          WELCOME TO <span className="text-yellow-400">CAR FARM SOCIAL </span>
        </h1>
      </div>
    </div>
  );
}
