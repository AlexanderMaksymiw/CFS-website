"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlideshow() {
  const images = [
    "/images/hero/Volvo_drive.jpg",
    "/images/hero/BMW_back.jpg",
    "/images/hero/911_front_side.jpg",
    "/images/hero/Toyota_Corolla.jpg",
    "/images/hero/Evo_back_2.jpg",
    "/images/hero/Supra.jpg",
    "/images/hero/MX5.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-187.5 object-none">
      {images.map((src, idx) => (
        <Image
          key={idx}
          src={src}
          alt={`Hero slide ${idx + 1}`}
          fill
          priority={idx === 0}
          className={`object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
