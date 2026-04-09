"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function MerchCarousel({ merchItems = [], itemsPerPage = 4 }) {
  const [page, setPage] = useState(0);
  const [thumbIndexes, setThumbIndexes] = useState({});

  const totalItems = merchItems?.length || 0;

  // Handle empty state
  if (totalItems === 0) {
    return (
      <div className="py-20 text-center border-2 border-dashed border-slate-100">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
          No items currently in the drop
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visibleItems = merchItems.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  const handleThumbChange = (itemIndex, direction, maxImages) => {
    setThumbIndexes((prev) => {
      const currentIndex = prev[itemIndex] || 0;
      let newIndex;
      if (direction === "next") {
        newIndex = (currentIndex + 1) % maxImages;
      } else {
        newIndex = (currentIndex - 1 + maxImages) % maxImages;
      }
      return { ...prev, [itemIndex]: newIndex };
    });
  };

  return (
    <div className="space-y-12 mb-20">
      {/* --- PRODUCT GRID --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleItems.map((item, i) => {
          const globalIndex = page * itemsPerPage + i;
          const imgIndex = thumbIndexes[globalIndex] || 0;
          const currentImage = item.images?.[imgIndex]?.asset?.url;

          return (
            <div key={item._id || globalIndex} className="group flex flex-col">
              {/* IMAGE FRAME: Editorial 3:4 Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full bg-slate-50 border-b-4 border-slate-900 overflow-hidden">
                {currentImage ? (
                  <>
                    <Image
                      src={currentImage}
                      alt={item.title || "Merch Image"}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-all duration-700 grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105"
                    />

                    {/* FLUSH NAVIGATION CONTROLS */}
                    {item.images.length > 1 && (
                      <div className="absolute bottom-0 right-0 flex z-10">
                        <button
                          onClick={() =>
                            handleThumbChange(
                              globalIndex,
                              "prev",
                              item.images.length,
                            )
                          }
                          className="bg-slate-900 text-white p-3 hover:bg-amber-400 hover:text-slate-900 transition-colors"
                        >
                          <ChevronLeftIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleThumbChange(
                              globalIndex,
                              "next",
                              item.images.length,
                            )
                          }
                          className="bg-slate-900 text-white p-3 border-l border-white/10 hover:bg-amber-400 hover:text-slate-900 transition-colors"
                        >
                          <ChevronRightIcon className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full bg-slate-100 text-[10px] font-black uppercase italic text-slate-300">
                    Image Missing
                  </div>
                )}
              </div>

              {/* ITEM SPEC SHEET */}
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                  {item.title}
                </h3>

                <div className="flex flex-col border-t border-slate-200 pt-3 gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      Availability
                    </span>
                    <span className="text-[10px] font-black text-slate-900 uppercase italic">
                      In-Person / Event Only
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- DIAMOND PAGINATION --- */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-8 border-t border-slate-100 pt-10">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
              page === 0
                ? "text-slate-200"
                : "text-slate-900 hover:text-amber-500"
            }`}
          >
            ← Prev
          </button>

          <div className="flex gap-4">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rotate-45 transition-all duration-300 ${
                  page === i
                    ? "bg-amber-400 scale-125 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                    : "bg-slate-200 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <button
            disabled={page >= totalPages - 1}
            onClick={() => setPage(page + 1)}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
              page >= totalPages - 1
                ? "text-slate-200"
                : "text-slate-900 hover:text-amber-500"
            }`}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
