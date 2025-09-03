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
    <div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-left text-amber-500 px-45 pb-30  ">
      <div className="bg-amber-950">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-xl bg-amber-950">
          Car Farm Social 2025 and Beyond
        </h1>
        <h3 className="text-lg md:text 2xl max-w-2xl mb-6 font-semibold ">
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
