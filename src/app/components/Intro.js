"use client";

export default function Intro({ eyebrow, title, content }) {
  return (
    <div className="container mx-auto px-4 justify-items-center border-2 p-10 max-w-6xl space-y-4">
      <p className="tracking-wider font-bold">{eyebrow}</p>
      <h2 className="text-base md:text-2xl lg:text-5xl font-bold text-center text-slate-900">
        {title}
      </h2>
      <h4>{content}</h4>
    </div>
  );
}
