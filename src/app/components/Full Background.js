"use client";

import Image from "next/image";

export default function FullBackground({ children }) {
  return (
    <div className="relative h-160 md:h-160 bg-center bg-fixed overflow-hidden ">
      <Image
        className="absolute inset-0 w-full h-full object-cover z-0 "
        src="/images/hero/cfs-background.jpg"
        alt="CFS Hero Background"
        fill
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className=" flex relative z-20">
        <div className="  h-160 flex-1"></div>
        <div>{children}</div>
      </div>
    </div>
  );
}
