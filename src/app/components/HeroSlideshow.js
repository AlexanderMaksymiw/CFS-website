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
    <div className="relative w-full h-[750px] object-none">
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

// "use client"; → Required for client-side rendering since we use hooks (useState, useEffect).
// import { useState, useEffect } → React hooks to manage state and handle side effects (slideshow timing).
// import Image from "next/image" → Next.js component that optimizes images (lazy loading, WebP, resizing).

// images array → Contains all image paths for the slideshow. Each index corresponds to a slide.

// useState(0) → "current" stores the index of the currently displayed image, starting at 0 (first image).

// useEffect → Runs after the component renders.
// Inside, setInterval changes the "current" index every 7 seconds.
// The formula (prev + 1) % images.length increments the index, and loops back to 0 when reaching the end.
// Cleanup function (clearInterval) stops the slideshow when the component unmounts.
// Dependency [images.length] ensures the effect reruns if the image array changes.

// return() → Renders the slideshow UI.

// <div className="relative w-full h-[750px] object-none"> → Container for the slideshow.
// "relative" ensures the absolutely positioned <Image fill /> can stretch inside it.
// "w-full h-[750px]" sets the slideshow size.

// images.map((src, idx) => … ) → Iterates through the image array and renders an <Image> for each one.
// key={idx} → Unique key required by React when mapping lists.
// src={src} → Image file path.
// alt={`Hero slide ${idx + 1}`} → Alt text with slide number for accessibility.
// fill → Makes image cover the container dimensions (requires parent "relative").
// priority={idx === 0} → Ensures the very first image loads immediately for better UX.
// className → Handles display and animation:
//   - object-cover → Scales image to cover container area.
//   - transition-opacity duration-1000 → 1 second fade effect when changing slides.
//   - idx === current ? "opacity-100" : "opacity-0" → Shows the current image (100% opacity) and hides others (0%).
