"use client";

export default function SectionBG({ image, children, className }) {
  return (
    <div
      className={`w-full relative pt-10 sm:py-40 md:py-52 text-white flex flex-col bg-center bg-cover md:bg-fixed ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay: this will show the color/tint */}
      <div className={`absolute inset-0 z-0 ${className}`} />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
