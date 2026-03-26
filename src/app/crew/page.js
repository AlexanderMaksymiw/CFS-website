"use client";
import Image from "next/image";
import Header from "../components/Header";
import SubPageHero from "../components/SubPageHero";
import Footer from "../components/Footer";

export default function Crew() {
  return (
    <div>
      <SubPageHero
        title={"Meet the Crew"}
        images={["/images/hero/ford-escort-green-side.jpg"]}
      />
      <Footer />
    </div>
  );
}
