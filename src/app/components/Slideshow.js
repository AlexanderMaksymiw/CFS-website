"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Slideshow({ images, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className=" relative w-full h-full overflow-hidden">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={`Slide ${index}`}
          fill
          className={`w-full h-full object-cover absolute top-0 left-0  transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}

// creating a slideshow in react

// since the slideshow needs to render whenever it changes image, we need to declare the current state and set the state for the initial image.
// I want the slideshow to be dynamic and fit any container I apply it to therefore I need to define the width and height to be full
// Unlike the heroSlideshow component this slideshow will be dynamic I want to set images external to the component, so I need to add images as a destructured prop.
// I'll need the interval to be declared as a prop along with its attribute (time)
// an array of images will be added in the page it will look like:
// <Slideshow images = {[
// { src: "/images/hero..., alt = Slide 0,1,2,3 depending on the current state, template literal "Slide "current"}]}
