"use client"; // this tells next.js that this component needs to run in browser not server side because using React hooks
import Link from "next/link"; // components link
import { useRouter } from "next/navigation"; // Next.js app router hook allows for navigation
import { useState, useEffect } from "react"; // react hook for creating states
import HeroSlideshow from "./components/HeroSlideshow";
import Header from "./components/Header";
import HeroOverlay from "./components/heroOverlay";
import Footer from "./components/Footer";
import Summary from "./components/Summary";
import Intro from "./components/Intro";

export default function Home() {
  const [carBrand, setcarBrand] = useState(""); //carBrand = current value of input field, setCarBrand function to update it
  const router = useRouter();

  function navigate() {
    setcarBrand("");
    router.push("/cars/" + carBrand);
  }

  return (
    <div className="header">
      <HeroSlideshow />
      <Header />
      <HeroOverlay />
      <Intro
        eyebrow="Your CFS Invitation"
        title="Join us at LLynclys Farm between 17:30 - 20:00 Every Thursday!"
        content="From April until September classics, supercars, modern classics and specials gather in a safe space where everyone with the right attitude is welcome."
      />
      <Summary
        title="Join us for an epic car meetup with hundreds of enthusiasts"
        content="Every Thursday evening through Spring, Summer and Autumn we witness up to 400 cool rides gathering near Oswestry Shropshire. With hardstanding provided across the site and onsite catering."
        button="CFS Rules"
        image="/images/I8.png"
      />
      <Footer />
    </div>
  );
}
