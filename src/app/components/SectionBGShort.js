// SectionBGShort.jsx
"use client";

export default function SectionBGShort({ image, children, className }) {
  return (
    <div
      className="w-full relative py-32 sm:py-40 md:py-52 text-white flex flex-col bg-center bg-cover md:bg-fixed"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/10 z-0" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
