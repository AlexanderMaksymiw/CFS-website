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
          <Link href="/story">Our Story</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/events">Events</Link>
          <Link href="/latest">Latest</Link>
          <Link href="/gallery">Gallery</Link>
        </nav>
      </div>
    </header>
  );
}
