"use client";

import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function RoadTripGallery({ roadTrips }) {
  // 1. Ensure we have an array
  const galleryImages = roadTrips || [];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);
  const paginatedImages = galleryImages.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  if (galleryImages.length === 0) return null;

  return (
    <div className="w-full">
      {/* MASONRY GRID */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {paginatedImages.map((img, i) => {
          // 2. Extract the URL safely based on your Sanity query
          const src = img.asset?.url;
          if (!src) return null;

          return (
            <div
              key={img._key || i}
              onClick={() => setSelectedIndex(page * itemsPerPage + i)}
              className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-slate-900"
            >
              <img
                src={src}
                alt={`Gallery image ${i}`}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
              />
              {/* Amber Frame hover effect */}
              <div className="absolute inset-0 border-0 group-hover:border-[1px] border-amber-400 transition-all duration-200" />
            </div>
          );
        })}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-8 mt-16 border-t border-slate-100 pt-10">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className={`text-[10px] font-black uppercase tracking-widest ${page === 0 ? "text-slate-200" : "text-slate-900 hover:text-amber-500"}`}
          >
            ← Prev
          </button>

          <div className="flex gap-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rotate-45 transition-all ${page === i ? "bg-amber-400 scale-125" : "bg-slate-200"}`}
              />
            ))}
          </div>

          <button
            disabled={page === totalPages - 1}
            onClick={() => setPage(page + 1)}
            className={`text-[10px] font-black uppercase tracking-widest ${page === totalPages - 1 ? "text-slate-200" : "text-slate-900 hover:text-amber-500"}`}
          >
            Next →
          </button>
        </div>
      )}

      {/* LIGHTBOX / MODAL */}
      {selectedIndex !== null && galleryImages[selectedIndex] && (
        <div
          className="fixed inset-0 z-[200] bg-slate-950 flex flex-col animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="p-6 flex justify-between items-center text-white">
            <span className="text-[10px] font-black tracking-[0.5em] text-slate-500 uppercase">
              Frame {selectedIndex + 1} / {galleryImages.length}
            </span>
            <XMarkIcon
              className="w-8 h-8 text-white cursor-pointer hover:text-amber-400"
              onClick={() => setSelectedIndex(null)}
            />
          </div>

          <div className="flex-grow relative flex items-center justify-center p-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev > 0 ? prev - 1 : galleryImages.length - 1,
                );
              }}
              className="absolute left-6 text-white/20 hover:text-amber-400 transition-colors hidden md:block"
            >
              <ChevronLeftIcon className="w-12 h-12" />
            </button>

            <img
              src={galleryImages[selectedIndex].asset?.url}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              alt="Enlarged"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev < galleryImages.length - 1 ? prev + 1 : 0,
                );
              }}
              className="absolute right-6 text-white/20 hover:text-amber-400 transition-colors hidden md:block"
            >
              <ChevronRightIcon className="w-12 h-12" />
            </button>
          </div>
          <div className="p-10 text-center text-slate-700 font-black uppercase tracking-[1em] text-[10px]">
            Car Farm Archive
          </div>
        </div>
      )}
    </div>
  );
}
