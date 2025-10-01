"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Circle } from "lucide-react";

export default function Slider() {
  const images = [
    "/images/chilling.jpg",
    "/images/porsche_back.jpg",
    "/images/dad.jpg",
    "/images/young friends.jpg",
    "/images/bike.jpg",
    "/images/Ice_cream CFS.jpg",
    "/images/group 2.jpg",
    "/images/friends 4.jpg",
    "/images/dog 6.jpg",
    "/images/row 3.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[600px] object-none w-full">
      {images.map((src, idx) => (
        <Image
          key={idx}
          idx={idx}
          src={src}
          alt={`slide: ${idx + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
