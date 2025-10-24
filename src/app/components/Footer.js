"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from "../components/Logo";
import { SocialIcon } from "react-social-icons";
import Address from "./Address";

export default function Footer() {
  return (
    <footer
      className="w-full relative lg:h-[700px] h-[900px] text-white flex flex-col bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/Ford rally.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/90 z-0" />

      {/* (2 columns) */}
      <div className="relative z-10 w-full h-120 lg:gap-6 lg:flex lg:px-56 px-4 pt-10 lg:pt-15 pb-10">
        <div className="flex-1 ">
          <h1 className="bg-gradient-to-l from-amber-500 to-yellow-200 bg-clip-text text-transparent lg:text-9xl lg:max-w-md text-6xl font-black text-left ">
            CAR FARM SOCIAL
          </h1>
        </div>
        <div className="flex-col flex pt-5">
          <h3 className="font-semibold tracking-wide pb-3">FIND US</h3>
          <Address />
          <h3 className="pt-5 pb-3 font-semibold tracking-wide">
            STANDARD OPENING TIMES
          </h3>
          <p>Open Thursdays from 6pm -8:30pm*</p>
          <p>Closed for Autumn and Winter*</p>
          <h3 className="font-semibold tracking-wide pt-5">FOLLOW US</h3>
          <div className="relative z-10 pt-5 py-4 pb-7 flex gap-5 border-b border-white/50">
            <SocialIcon
              bgColor="#ffffff"
              fgColor="#0f172a"
              url="https://www.facebook.com/groups/3764447677206661"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              bgColor="#ffffff"
              fgColor="#0f172a"
              url="https://www.instagram.com/carfarmsocial/"
              style={{ height: 40, width: 40 }}
            />
            <SocialIcon
              bgColor="#ffffff"
              fgColor="#0f172a"
              url="https://www.youtube.com/@carfarmsocial"
              style={{ height: 40, width: 40 }}
            />
          </div>
          <div className="border-b border-white/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-items-center mx-auto py-10">
              {/* Llynclys Farm Shop */}
              <div className="flex items-center justify-center w-40 h-20">
                <Link href="https://llynclyshall.co.uk/">
                  <Image
                    src="/images/logo/llynclys-farm-shop.webp"
                    alt="Llynclys Farm Shop logo"
                    width={120}
                    height={80}
                    className="object-contain max-h-16"
                  />
                </Link>
              </div>

              {/* MB Coffee Van (no logo yet) */}
              <div className="flex items-center justify-center w-40 h-20 border-white/40 border">
                <Link href="https://llynclyshall.co.uk/mean-bean-coffee/">
                  <p className="text-center text-white/80 font-semibold  px-3 py-2">
                    MB Coffee Van
                  </p>
                </Link>
              </div>

              {/* P&B Tyres */}
              <div className="flex items-center justify-center w-40 h-20 ">
                <Link href="https://www.pandbtyres.co.uk/">
                  <Image
                    src="/images/logo/pb-tyres-logo.jpg"
                    alt="P&B Tyres logo"
                    width={120}
                    height={80}
                    className="object-contain max-h-16"
                  />
                </Link>
              </div>

              {/* GMJ Photography (no logo yet) */}
              <div className="flex items-center justify-center w-40 h-20 border-white/40 border">
                <Link href="https://garethjohnsonphotography.shootproof.com/">
                  <p className="text-center text-white/80 font-semibold   px-3 py-2">
                    GMJ Photography
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <h3 className="font-semibold tracking-wide  text-white/50">@ Car Farm Social</h3>
            <h3 className="font-semibold tracking-wide pt-3 text-white/50">
              Website by Alex Maksymiw
            </h3>
          </div>
        </div>

        <div className="hidden lg:visible flex-[2] ">
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
      <div className=" hidden lg:px-56 px-4 lg:visible">
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
