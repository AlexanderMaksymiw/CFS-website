"use client";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Address from "./Address";

export default function Footer() {
  return (
    <footer
      className="w-full relative min-h-screen text-white flex flex-col justify-between bg-fixed bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/images/Ford rally.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px] z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Brand Column */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <h1 className="bg-gradient-to-br from-amber-500 via-yellow-200 to-amber-600 bg-clip-text text-transparent text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tighter italic">
            CAR FARM <br /> SOCIAL
          </h1>
          <div className="mt-8 flex gap-4">
            <SocialMediaLinks />
          </div>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-3 space-y-8">
          <div>
            <h3 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4">
              Find Us
            </h3>
            <div className="text-slate-300 font-medium leading-relaxed">
              <Address />
            </div>
          </div>

          <div>
            <h3 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4">
              Standard Opening Times
            </h3>
            <div className="text-slate-300 space-y-1">
              <p className="font-bold text-white">Thursdays: 18:00 — 20:30*</p>
              <p className="text-sm opacity-60">*Closed for Autumn & Winter</p>
            </div>
          </div>
        </div>

        {/* Partners Column */}
        <div className="lg:col-span-4">
          <h3 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-6">
            Our Partners
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* Llynclys Farm Shop */}
            <PartnerCard href="https://llynclyshall.co.uk/">
              <Image
                src="/images/logo/llynclys-farm-shop.webp"
                alt="Llynclys Farm Shop"
                width={100}
                height={50}
                className="object-contain brightness-0 invert"
              />
            </PartnerCard>

            {/* MB Coffee Van */}
            <PartnerCard href="https://llynclyshall.co.uk/mean-bean-coffee/">
              <span className="text-[10px] font-bold uppercase tracking-tight text-center">
                Mean Bean <br /> Coffee Van
              </span>
            </PartnerCard>

            {/* P&B Tyres */}
            <PartnerCard href="https://www.pandbtyres.co.uk/">
              <Image
                src="/images/logo/pb-tyres-logo.jpg"
                alt="P&B Tyres"
                width={100}
                height={50}
                className="object-contain grayscale invert hover:grayscale-0 transition-all"
              />
            </PartnerCard>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="relative z-10 w-full bg-black/40 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-bold uppercase tracking-widest">
          <p>© 2025 CAR FARM SOCIAL. All rights reserved.</p>
          <p className="hover:text-amber-500 transition-colors cursor-default">
            Built by Alex Maksymiw
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper Components for cleaner code
function SocialMediaLinks() {
  const socials = [
    "https://www.facebook.com/groups/3764447677206661",
    "https://www.instagram.com/carfarmsocial/",
    "https://www.youtube.com/@carfarmsocial",
  ];
  return socials.map((url) => (
    <SocialIcon
      key={url}
      url={url}
      bgColor="transparent"
      fgColor="white"
      className="hover:scale-110 hover:bg-amber-500 rounded-full transition-all border border-white/20"
      style={{ height: 40, width: 40 }}
    />
  ));
}

function PartnerCard({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center bg-white/5 border border-white/10 rounded-xl h-20 px-4 hover:bg-white/10 hover:border-amber-500/50 transition-all group"
    >
      {children}
    </Link>
  );
}
