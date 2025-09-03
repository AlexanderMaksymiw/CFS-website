"use client"; // need this we will use useState
import { useState, useEffect } from "react"; // we need this as the images will be changing
import Image from "next/image"; // this optimizes images for browser (convert to webp)

export default function HeroSlideshow() {
  //component function
  const images = [
    // images array for the slideshow
    "/images/hero/Volvo_drive.jpg", // idx 0 src "/images..."
    "/images/hero/BMW_back.jpg", // idx 1 src "/images..."
    "/images/hero/911_front_side.jpg", // idx 2 src "/images..."
    "/images/hero/Escort_green.jpg", // idx 3 src "/images..."
    "/images/hero/subaru_front.jpg", // idx 4 src "/images..."
    "/images/hero/Supra_front.jpg", // idx 5 src "/images..."
    "/images/hero/Toyota_Corolla.jpg", // idx 6 src "/images..."
    "/images/hero/Evo_back_2.jpg", // idx 7 src "/images..."
    "/images/hero/Supra.jpg", // idx 8 src "/images..."
    "/images/hero/MX5.jpg", // idx 9 src "/images..."
    "/images/hero/escort_green_side.jpg", // idx 10 src "/images..."
  ];

  const [current, setCurrent] = useState(0); // set up the vairable for the image and foundation to update it. 0 represents the index so first image

  //useEffect this bit is the engine that makes the slideshow automatically cycle through images.
  useEffect(() => {
    //run code after the component renders.
    const interval = setInterval(() => {
      //setinterval runs the callback every 5 seconds
      setCurrent((prev) => (prev + 1) % images.length); //setCurrent is the state updater for current prev syntax means we're updating current based on its previous value.
    }, 7000); // % images.length is what makes the slideshow loop forever modulo returns remainder eg. start =0 (0+1 % = 1) show img 1, prev 8 (8+1 % 9 =0 goes back to the first index)

    return () => clearInterval(interval); // clean up function optional stops the slideshow when user leaves page clear is a counterpart to set
  }, [images.length]); // this is the dependency array that the effect depends on React watches these variables

  //creates the frame for the slideshow (div className="relative...")
  return (
    <div className="relative w-full h-[750px] object-none">
      {/* .map iterates over the images array return what we specify src, idx the file source and index. (callback) */}
      {images.map((src, idx) => (
        <Image // for each image we render <Image> component Next.js optimized images. lazy loading, webp
          key={idx} //react requires unique keys when rendering lists we use the index for the key.(variable from map function)
          src={src} // image path from the images array. (variable from map function)
          alt={`Hero slide ${idx + 1}`} //alt text of image, using template literal
          fill //makes image stretch to fill parent container (parent must have position: relative)
          priority={idx === 0} //  priority tells Next.js to load immediately but only idx 0 the first.
          className={`object-cover transition-opacity duration-1000 ${
            //object-cover image scale to parent container. transition-opacity 1s trans, template literal to write js
            idx === current ? "opacity-100" : "opacity-0" // js function if current idx add opacity 100% if not current set to 0%
          }`}
        />
      ))}
    </div>
  );
}
