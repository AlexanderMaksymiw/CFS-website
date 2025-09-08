"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function HeroOverlay() {
  function navigate() {
    <Link href="/events"></Link>;
  }
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left bg-slate-900/20 text-white px-55 pt-35 h-[750px]">
      <div className="">
        <h1 className="text-8xl tracking-wide font-bold mb-4 max-w-2xl antialiased ">
          WELCOME TO <span className="text-yellow-400">CAR FARM SOCIAL </span>
        </h1>
        <h3 className="text-xl md:text 3xl max-w-sm mb-6 font-semibold ">
          We look forward to welcoming you at the farm! We’ll continue to push
          the boundaries with new experiences at the farm and out on the road.
        </h3>
        <button className="btn" onClick={() => navigate()}>
          Latest Events
        </button>
      </div>
    </div>
  );
}
