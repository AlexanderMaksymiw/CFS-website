"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SubPageHero from "../components/SubPageHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

const images = [
  "/images/renault.jpg",
  "/images/STI Subaru Front.jpg",
  "/images/type r.jpg",
  "/images/Green MX5 Front.jpg",
  "/images/Vauxhall Front.jpg",
  "/images/350z Front.jpg",
  "/images/Prelude_front.jpg",
  "/images/White EVO front.jpg",
  "/images/Scirocco Blue.jpg",
  "/images/Evo Front.jpg",
  "/images/Renault Front.jpg",
  "/images/Peugeot GTI Back.jpg",
  "/images/Yaris.jpg",
  "/images/TVR.jpg",
  "/images/Fiesta Front.jpg",
  "/images/Fiesta 2.jpg",
  "/images/Fiesta Silver.jpg",
  "/images/Mini red front.jpg",
  "/images/golf red.jpg",
  "/images/Honda S2000 side.jpg",
  "/images/EVO 10.jpg",
  "/images/Lotus_front.jpg",
  "/images/Micra 2.jpg",
  "/images/S15.jpg",
  "/images/Delorean_front.jpg",
  "/images/BMW_E30.jpg",
  "/images/audi_rs3.jpg",
  "/images/GTR front.jpg",
  "/images/Subaru_wagon.jpg",
  "/images/Subarus.jpg",
];

export default function Gallery() {
  return (
    <div>
      <SubPageHero title="Car Gallery" images={["/images/R32 Golf.jpg"]} />
      <div className="">
        <h2 className="text-4xl font-semibold text-center pt-10 px-56 text-slate-800">
          Share Your Photos
        </h2>
      </div>
      <div className="px-54">
        <h3 className="text-slate-800 px-40 p-15 text-2xl font-semibold leading-8 text-center">
          We feel incredibly lucky to have so many talented photographers
          supporting Car Farm Social not just the professionals, but also the
          passionate amateurs, and that includes you. We love seeing the shots
          you capture at our events, and many of them get featured across our
          social channels.
        </h3>
      </div>
      <GalleryGrid images={images} />
      <Header />
      <Footer />
    </div>
  );
}
