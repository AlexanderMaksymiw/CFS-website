// SectionBGShort.jsx
"use client";

export default function SectionBGShort({ image, children, className }) {
  return (
    <div
      className={`w-full relative h-[600px] text-white flex justify-center items-center bg-fixed bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-0" />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
