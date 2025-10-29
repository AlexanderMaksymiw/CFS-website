"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SubPageHero from "../components/SubPageHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import ImageCard from "../components/ImageCard";

const images = [
  "/images/renault.jpg",
  "/images/sti-subaru-front.jpg",
  "/images/type-r.jpg",
  "/images/green-mx5-front.jpg",
  "/images/vauxhall-front.jpg",
  "/images/350z-front.jpg",
  "/images/prelude-front.jpg",
  "/images/white-evo-front.jpg",
  "/images/scirocco-blue.jpg",
  "/images/evo-front.jpg",
  "/images/renault-front.jpg",
  "/images/peugeot-gti-back.jpg",
  "/images/toyota-yaris.jpg",
  "/images/tvr-chimaera.jpg",
  "/images/fiesta-front.jpg",
  "/images/fiesta-2.jpg",
  "/images/fiesta-silver.jpg",
  "/images/mini-red-front.jpg",
  "/images/golf-red.jpg",
  "/images/honda-s2000-side.jpg",
  "/images/evo-10.jpg",
  "/images/lotus-front.jpg",
  "/images/micra-2.jpg",
  "/images/s15.jpg",
  "/images/delorean-front.jpg",
  "/images/bmw-e30.jpg",
  "/images/audi-rs3.jpg",
  "/images/gtr-front.jpg",
  "/images/subaru-wagon.jpg",
  "/images/subarus-posing.jpg",
];

export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-800 ">
      <Header />
      <SubPageHero title="Car Gallery" images={["/images/R32 Golf.jpg"]} />

      <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8">
          Share Your Photos
        </h2>

        <h3 className="text-base sm:text-lg md:text-xl leading-relaxed text-center font-medium">
          We feel incredibly lucky to have so many talented photographers
          supporting Car Farm Social not just the professionals, but also the
          passionate amateurs, and that includes you. We love seeing the shots
          you capture at our events, and many of them get featured across our
          social channels.
        </h3>
      </section>

      <section className="w-full justify-center mx-auto px-4 sm:px-6 md:px-10 py-10 ">
        <GalleryGrid images={images} />
      </section>
      <Footer />
    </div>
  );
}
