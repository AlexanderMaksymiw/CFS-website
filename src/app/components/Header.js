"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Our Story", href: "/about" },
  { name: "Rules", href: "/rules" },
  { name: "Merch", href: "/merch" },
  { name: "Latest", href: "/latest" },
  { name: "Gallery", href: "/gallery" },
  { name: "Crew", href: "/crew" },
  { name: "Road Trips", href: "/road-trips" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-slate-900/90 backdrop-blur-md h-20 shadow-xl"
          : "bg-transparent h-28"
      } text-white`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 max-w-400 mx-auto h-full">
        <motion.div
          className="shrink-0"
          animate={{
            scale: isScrolled ? 0.85 : 1,
            y: isScrolled ? 0 : 5,
          }}
          transition={{ duration: 0.4 }}
        >
          <Logo className="w-auto h-12" />
        </motion.div>

        <nav className="hidden xl:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-[11px] font-black uppercase tracking-[0.25em] transition-colors hover:text-amber-400"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <button
          className="xl:hidden flex flex-col gap-1.5 p-2 z-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 transition-all ${isOpen ? "bg-amber-400 rotate-45 translate-y-2" : "bg-white"}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 transition-all ${isOpen ? "bg-amber-400 -rotate-45 -translate-y-2" : "bg-white"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-slate-900 z-105 flex flex-col items-center overflow-y-auto pt-32 pb-12 px-6"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tight transition-colors text-white hover:text-amber-400 active:italic"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
