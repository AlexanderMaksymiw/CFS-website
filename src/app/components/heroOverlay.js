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
    <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left bg-slate-900/40 text-white px-56 pt-36 h-[850px]">
      <div>
        <h1 className="text-8xl  font-bold mb-4 max-w-2xl antialiased ">
          WELCOME TO <span className="text-yellow-400">CAR FARM SOCIAL </span>
        </h1>
        <h3 className="text-xl md:text 3xl max-w-sm mb-6 font-semibold ">
          Join us at the farm and be part of something special! We’re constantly
          raising the bar with fresh experiences, both here and out on the road.
        </h3>
        <button className="btn" onClick={navigateRules}>
          Rules
        </button>
      </div>
    </div>
  );
}
