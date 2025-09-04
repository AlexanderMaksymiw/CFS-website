"use client";

export default function Intro({ eyebrow, title, content }) {
  return (
    <div className="container mx-auto px-4 justify-items-center p-10 max-w-6xl space-y-9">
      <p className="tracking-wider font-bold text-slate-800">{eyebrow}</p>
      <h2 className="text-base md:text-2xl lg:text-4xl font-semibold text-center text-slate-800">
        {title}
      </h2>
      <h4 className="text-center max-w-3xl text-slate-800 text-lg">{content}</h4>
    </div>
  );
}
