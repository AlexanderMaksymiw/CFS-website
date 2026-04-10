"use client";
import Image from "next/image";

export default function FullBackground({ children }) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-800">
      <Image
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/hero/cfs-background.jpg"
        alt="CFS Hero Background"
        fill
        priority
      />

      <div className="absolute inset-0 bg-slate-900/40 z-10" />

      <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-300/10 to-transparent z-10" />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-slate-900 to-transparent z-10" />

      <div className="relative z-30 h-full w-full">{children}</div>
    </div>
  );
}
