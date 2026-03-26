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
    <div className="absolute inset-0 z-20 flex flex-col  justify-center  text-white mx-auto lg:pt-0 h-160 md:h-160">
      <div>
        <h1 className="md:text-8xl lg:text-left  text-center md:px-12 text-6xl font-bold mb-4 max-w-2xl md:max-w-6xl antialiased ">
          WELCOME TO <span className="text-yellow-400">CAR FARM SOCIAL </span>
        </h1>
      </div>
    </div>
  );
}
