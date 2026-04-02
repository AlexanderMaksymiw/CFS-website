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
    <div className="absolute inset-0 z-20 flex flex-col  justify-center  text-white mx-auto  h-200 md:h-200">
      <div>
        <h1 className="md:text-7xl lg:text-left text-center md:px-30 text-6xl font-bold max-w-2xl md:max-w-3xl mb-20  antialiased ">
          WELCOME TO CAR FARM SOCIAL
        </h1>
      </div>
    </div>
  );
}
