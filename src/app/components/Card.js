"use client";

export default function Card({ image, title, content }) {
  return (
    <div
      className="relative p-4 rounded-lg bg-cover bg-center text-white h-100"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay (optional, for readability) */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      {/* Content sits on top */}
      <div className="relative z-10">
        <h3 className="mt-2 text-lg font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
