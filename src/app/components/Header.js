"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className=" absolute top-0 left-0 w-full h-20 z-50 bg-gradient-to-b from-slate-900 to-transparent  text-white">
      <div className="flex items-center justify-between h-full px-20">
        <Logo />
        <nav className="flex gap-4 text-sm md:text-base lg:text-lg font-semibold tracking-wide">
          <Link href="/about">
            <span className="link text-xl font-semibold">Our Story</span>
          </Link>
          <Link href="/rules">
            <span className="link text-xl font-semibold">Rules</span>
          </Link>
          <Link href="/gear">
            <span className="link text-xl font-semibold">Gear</span>
          </Link>
          <Link href="/events">
            {" "}
            <span className="link text-xl font-semibold">Events</span>
          </Link>
          <Link href="/latest">
            {" "}
            <span className="link text-xl font-semibold">Latest</span>
          </Link>
          <Link href="/gallery">
            {" "}
            <span className="link text-xl font-semibold">Gallery</span>
          </Link>

        </nav>
      </div>
    </header>
  );
}
