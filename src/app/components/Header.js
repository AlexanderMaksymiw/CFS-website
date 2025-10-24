"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        isScrolled ? "bg-slate-900 shadow-2xl h-20" : "bg-transparent h-32"
      } text-white`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-56 max-w-full mx-auto h-full transition-all duration-500">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0 max-w-[150px]" // prevents logo overflow
          animate={{
            scale: isScrolled ? 0.8 : 1.0,
            y: isScrolled ? 0 : 10,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Logo />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-semibold tracking-wide">
          <Link href="/about">Our Story</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/merch">Merch</Link>
          <Link href="/latest">Latest</Link>
          <Link href="/gallery">Gallery</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl relative z-50 p-2 "
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-slate-900 flex flex-col px-4 py-6 gap-4 items-center overflow-x-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/about" onClick={() => setIsOpen(false)}>Our Story</Link>
          <Link href="/rules" onClick={() => setIsOpen(false)}>Rules</Link>
          <Link href="/merch" onClick={() => setIsOpen(false)}>Merch</Link>
          <Link href="/latest" onClick={() => setIsOpen(false)}>Latest</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        </motion.div>
      )}
    </header>
  );
}
