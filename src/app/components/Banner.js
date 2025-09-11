"use client";
import Image from "next/image";

export default function VideoBanner() {
  return (
    <div className="relative h-[700px]">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/CFS Video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to CFS</h1>
      </div>
    </div>
  );
}
