"use client"; // this tells next.js that this component needs to run in browser not server side because using React hooks
import Link from "next/link"; // components link
import { useRouter } from "next/navigation"; // Next.js app router hook allows for navigation
import { useState, useEffect, Component } from "react"; // react hook for creating states
import HeroSlideshow from "./components/HeroSlideshow";
import Header from "./components/Header";
import HeroOverlay from "./components/heroOverlay";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Map from "./components/Map";
import Info from "./components/Info";
import FullBackground from "./components/Full Background";
import SectionBG from "./components/SectionBG";

const myCards = [
  {
    image: "/images/Drive_out_ford.jpg",
    title: "Epic Adventures",
  },
  {
    image: "/images/catering.jpg",
    title: "Food and Drink",
  },
  {
    image: "/images/escort.jpg",
    title: "Supercars and Classics",
  },
  {
    image: "/images/abarth.jpg",
    title: "Clubs Welcome!",
  },
  {
    image: "/images/MX5_polaroid.jpg",
    title: "Community Driven",
  },
  {
    image: "/images/dog.jpg",
    title: "Dog Friendly",
  },
];

export default function Home() {
  return (
    <div className="header">
      <Header />
      <FullBackground />
      <HeroOverlay />

      <Intro
        eyebrow="Your CFS Invitation"
        title="Join us at LLynclys Farm between 17:30 - 20:00 Every Thursday!"
        content="From April to September, classics, supercars, JDM, and everything in between gather at LLynclys Farm in a vibrant, welcoming space for all enthusiasts with the right attitude."
      />
      <Info />
      <Map />
      <Footer />
    </div>
  );
}
