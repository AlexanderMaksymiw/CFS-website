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
import Highlights from "./components/Highlights";

const myCards = [
  {
    image: "/images/Drive_out_ford.jpg",
    title: "Epic Adventures",
    content:
      "Join us on a road trip for a well-organised, respectful, and unforgettable drive through this stunning part of the country. It's about enjoying the road responsibly. ",
  },
  {
    image: "/images/catering.jpg",
    title: "Food and Drink",
    content:
      "On-site catering food, drink and seating is provided at CFS grab a coffee and sit down and talk to fellow car enthusiasts.",
  },
  {
    image: "/images/escort.jpg",
    title: "Supercars and Classics",
    content:
      "Bring your four-legged roadster along for the ride, we’re dog-friendly, stocked with Pawtastic treats, and always ready to fuel up wagging tails with snacks.",
  },
  {
    image: "/images/abarth.jpg",
    title: "Clubs Welcome!",
    content:
      "Bring your four-legged roadster along for the ride, we’re dog-friendly, stocked with Pawtastic treats, and always ready to fuel up wagging tails with snacks.",
  },
  {
    image: "/images/MX5_polaroid.jpg",
    title: "Community Driven",
    content:
      "Bring your four-legged roadster along for the ride, we’re dog-friendly, stocked with Pawtastic treats, and always ready to fuel up wagging tails with snacks.",
  },
  {
    image: "/images/dog.jpg",
    title: "Dog Friendly",
    content:
      "Bring your four-legged roadster along for the ride, we’re dog-friendly, stocked with Pawtastic treats, and always ready to fuel up wagging tails with snacks.",
  },
];

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
        title="Visit LLynclys Farm between 17:30 - 20:00 Every Thursday!"
        content="From April to September, classics, supercars, and modern specials gather at LLynclys Farm in a vibrant, welcoming space for all enthusiasts with the right attitude."
      />
      <Summary
        title="Join us for an epic car meetup with hundreds of enthusiasts"
        content={
          <>
            Every Thursday evening through Spring, Summer and Autumn we witness
            up to{" "}
            <strong> 400 cool rides gathering near Oswestry Shropshire </strong>
            . With hardstanding provided across the site and onsite catering.
          </>
        }
        button="CFS Rules"
        image="/images/I8.png"
      />
      <Highlights
        heading="Our Highligts"
        text="Check out our feature Cards!"
        cards={myCards}
      />
      <Footer />
    </div>
  );
}
