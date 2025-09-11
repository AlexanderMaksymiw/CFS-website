"use client";
import { useState, useEffect } from "react";

export default function Card({ image, title, content }) {
  return (
    <div className="relative overflow-hidden group">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-120 object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 text-white">
        <h3 className="mt-2 text-4xl font-bold">{title}</h3>
        <p className="mt-6 max-w-sm">{content}</p>
      </div>
    </div>
  );
}
