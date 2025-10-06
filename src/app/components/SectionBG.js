"use client";

export default function SectionBG({ image, children, className}) {
  return (
    <div
      className="w-full relative h-[850px] text-white flex flex-col bg-fixed bg-center justify-center bg-cover"
      style={{ backgroundImage: `url(${(image)})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/80 z-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
