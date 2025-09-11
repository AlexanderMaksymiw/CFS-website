"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer
      className="w-full relative h-150 text-white flex flex-col bg-fixed bg-center bg-contain"
      style={{ backgroundImage: "url('/images/Ford rally.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-0" />

      {/* (2 columns) */}
      <div className="relative z-10 w-full h-120 gap-6 flex px-55 pt-15 pb-10">
        <div className="flex-1 ">
          <h1 className="bg-gradient-to-l from-amber-500 to-yellow-200 bg-clip-text text-transparent text-9xl font-black  ">
            CAR FARM SOCIAL
          </h1>
        </div>

        <div className="flex-[2] ">
          <div className="flex  gap-80">
            <div className="  flex">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-semibold pb-2 pt-2 whitespace-nowrap">
                  Quick Links
                </h2>
                <Link href="/about">
                  <span className="link text-lg font-semibold">Our Story</span>
                </Link>

                <Link href="/gallery">
                  <span className="link text-lg font-semibold">Gallery</span>
                </Link>
                <Link href="/events">
                  <span className="link text-lg font-semibold">Events</span>
                </Link>
                <Link href="/latest">
                  <span className="link text-lg font-semibold">Latest</span>
                </Link>
                <Link href="/merch">
                  <span className="link text-lg font-semibold">Merch</span>
                </Link>
                <Link href="/rules">
                  <span className="link text-lg font-semibold">Rules</span>
                </Link>
              </div>
            </div>
            <div className="flex">
              <div className="  flex-col  pt-2">
                <h2 className="text-3xl font-semibold pb-2">Contact</h2>
                <p className="text-md max-w-sm">
                  If you would like to get in touch regarding partnerships and
                  clubs reach out to the admins on Facebook.
                </p>
              </div>
            </div>
          </div>
          <div className=" pt-20">
            <p>
              Please can spectators not encourage bad behaviour by filming bad
              behaviour and posting on social media. This is harming CFS. There
              is a ban on filming cars exiting via the minor road leading to the
              main A483.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-55 ">
        <div className="relative z-10 border-t border-white py-4 flex justify-center gap-5 text-center">
          <SocialIcon
            bgColor="#ffffff"
            fgColor="#0f172a"
            url="https://www.facebook.com/groups/3764447677206661"
          />
          <SocialIcon
            bgColor="#ffffff"
            fgColor="#0f172a"
            url="https://www.instagram.com/carfarmsocial/"
          />
          <SocialIcon
            bgColor="#ffffff"
            fgColor="#0f172a"
            url="https://www.youtube.com/@carfarmsocial"
          />
        </div>
        <p className="text-sm text-center">
          © 2025 CarFarmSocial. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
