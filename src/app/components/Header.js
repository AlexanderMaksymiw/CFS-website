"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-slate-900 to-transparent text-white">
      <div className="flex items-center justify-between h-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-base font-semibold tracking-wide">
          <Link href="/about">
            <span>Our Story</span>
          </Link>
          <Link href="/rules">
            <span>Rules</span>
          </Link>
          <Link href="/merch">
            <span>Merch</span>
          </Link>
          <Link href="/latest">
            <span>Latest</span>
          </Link>
          <Link href="/gallery">
            <span>Gallery</span>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 flex flex-col px-4 py-6 gap-4 items-center">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            Our Story
          </Link>
          <Link href="/rules" onClick={() => setIsOpen(false)}>
            Rules
          </Link>
          <Link href="/merch" onClick={() => setIsOpen(false)}>
            Merch
          </Link>
          <Link href="/latest" onClick={() => setIsOpen(false)}>
            Latest
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
        </div>
      )}
    </header>
  );
}
