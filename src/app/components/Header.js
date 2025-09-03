"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full h-20 z-20 bg-gradient-to-b from-black/100 to-transparent text-white">
      <div className="flex items-center justify-between h-full px-4 md:px-6 lg:px-10">
        <Logo />
        <nav className="flex gap-4 text-sm md:text-base lg:text-lg font-bold text-amber-300 dark:text-amber-400">
          <Link href="/about">About</Link>
          <Link href="/rules">Rules</Link>
          <Link href="/gear">Gear</Link>
          <Link href="/events">Events</Link>
          <Link href="/latest">Latest</Link>

          {/* dropdown menu for gallery */}
          <div className="relative">
            <button
              onMouseEnter={() => setGalleryOpen(!isGalleryOpen)}
              className="flex items-center gap-1 focus:outline-none"
            >
              Gallery
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="m6 916 6 6-6" />
              </svg>
            </button>

            {isGalleryOpen && (
              <ul className="absolute top-full mt-2 left-0 bg-black/90 text-white rounded shadow-md w-40 z-50">
                <li>
                  <Link
                    href="/gallery/photos"
                    className="block px-4 py-2 hover:bg-gray-800"
                    onClick={() => setGalleryOpen(false)}
                  >
                    Photos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery/videos"
                    className="block px-4 py-2 hover:bg-gray-800"
                    onClick={() => setGalleryOpen(false)}
                  >
                    Videos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery/events"
                    className="block px-4 py-2 hover:bg-gray-800"
                    onClick={() => setGalleryOpen(false)}
                  >
                    Events
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
