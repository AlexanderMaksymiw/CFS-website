"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid"; // Switched back to Solid for that "heavy" look

export default function FeaturedModal({ featuredPosts }) {
  const postsPerPage = 6;
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);
  const totalPages = Math.ceil(featuredPosts.length / postsPerPage);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [thumbIndex, setThumbIndex] = useState(0);

  const selectedPost =
    selectedIndex !== null ? featuredPosts[selectedIndex] : null;

  useEffect(() => {
    setThumbIndex(0);
  }, [selectedIndex]);

  const handlePageChange = (i) => {
    setPage(i);
    if (sectionRef.current) {
      const top =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const paginatedPosts = featuredPosts.slice(
    page * postsPerPage,
    page * postsPerPage + postsPerPage,
  );

  return (
    <div className="w-full">
      <section
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10"
      >
        {paginatedPosts.map((post, i) => (
          <div
            key={post._id}
            onClick={() => setSelectedIndex(page * postsPerPage + i)}
            className="group relative cursor-pointer aspect-4/5 bg-slate-900 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-40" />

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <h3 className="text-xl font-black text-white uppercase tracking-tight italic">
                {post.title}
              </h3>
            </div>

            {post.thumbnails?.length > 0 ? (
              <img
                src={post.thumbnails[0].asset.url}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102 group-hover:opacity-60"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-500 font-black uppercase text-[10px] tracking-widest">
                No Media
              </div>
            )}

            {/* Border frame effect on hover */}
            <div className="absolute inset-0 border-0  transition-all duration-200 z-30 pointer-events-none" />
          </div>
        ))}
      </section>

      {/* UNIVERSAL PAGINATION (Works on Amber & White) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 mt- border-t border-slate-900/10 pt-10">
          <button
            disabled={page === 0}
            onClick={() => handlePageChange(page - 1)}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
              page === 0
                ? "text-slate-900/20"
                : "text-slate-900 hover:opacity-60 cursor-pointer"
            }`}
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, i) => {
              const isVisible =
                i === 0 ||
                i === totalPages - 1 ||
                (i >= page - 1 && i <= page + 1);

              if (!isVisible) {
                if (i === 1 || i === totalPages - 2) {
                  return (
                    <span
                      key={i}
                      className="text-slate-900/30 font-black text-xs px-1"
                    >
                      ...
                    </span>
                  );
                }
                return null;
              }

              return (
                <button
                  key={i}
                  onClick={() => handlePageChange(i)}
                  className={`min-w-9 h-9 flex items-center justify-center text-[11px] font-black transition-all rounded-md cursor-pointer ${
                    page === i
                      ? "bg-slate-900 text-white shadow-lg scale-110"
                      : "text-slate-900/50 hover:text-slate-900 hover:bg-slate-900/5"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>

          <button
            disabled={page === totalPages - 1}
            onClick={() => handlePageChange((i) => i + 1)}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
              page === totalPages - 1
                ? "text-slate-900/20"
                : "text-slate-900 hover:opacity-60 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {selectedPost && (
        <div
          className="fixed inset-0 z-9999 bg-slate-950 flex flex-col animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="p-4 flex justify-between items-center text-white">
            <span className="text-[10px] font-black tracking-[0.5em] text-slate-500 uppercase">
              CFS Gallery {selectedIndex + 1} / {featuredPosts.length}
            </span>
            <XMarkIcon
              className="w-8 h-8 text-white cursor-pointer hover:text-amber-400 transition-colors"
              onClick={() => setSelectedIndex(null)}
            />
          </div>

          {/* Main Content Area */}
          <div className="grow relative flex items-center justify-center p-4">
            {/* Global Post Navigation (Left) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev > 0 ? prev - 1 : featuredPosts.length - 1,
                );
              }}
              className="absolute left-6 text-white/20 hover:text-amber-400 transition-colors hidden md:block z-50"
            >
              <ChevronLeftIcon className="w-12 h-12" />
            </button>

            <div
              className="relative max-w-5xl max-h-[75vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedPost.mediaType === "image" ? (
                <img
                  src={selectedPost.thumbnails[thumbIndex]?.asset.url}
                  className="max-w-full max-h-[75vh] object-contain shadow-2xl"
                  alt={selectedPost.title}
                />
              ) : (
                <video
                  src={selectedPost.videoFile?.asset?.url}
                  controls
                  className="max-w-full max-h-[75vh] shadow-2xl bg-black"
                />
              )}

              {selectedPost.mediaType === "image" &&
                selectedPost.thumbnails?.length > 1 && (
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                    <button
                      onClick={() =>
                        setThumbIndex((p) =>
                          p === 0 ? selectedPost.thumbnails.length - 1 : p - 1,
                        )
                      }
                      className="p-2 bg-black/50 text-white pointer-events-auto hover:bg-amber-400 hover:text-black transition-all"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() =>
                        setThumbIndex((p) =>
                          p === selectedPost.thumbnails.length - 1 ? 0 : p + 1,
                        )
                      }
                      className="p-2 bg-black/50 text-white pointer-events-auto hover:bg-amber-400 hover:text-black transition-all"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </div>
                )}
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) =>
                  prev < featuredPosts.length - 1 ? prev + 1 : 0,
                );
              }}
              className="absolute right-6 text-white/20 hover:text-amber-400 transition-colors hidden md:block z-50"
            >
              <ChevronRightIcon className="w-12 h-12" />
            </button>
          </div>

          <div className=" text-center bg-slate-950 mb-10">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase italic tracking-tight">
                {selectedPost.title}
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-amber-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">
                  {selectedPost.mediaType === "image"
                    ? `Frame ${thumbIndex + 1} / ${selectedPost.thumbnails.length}`
                    : "Motion Archive"}
                </span>
                <div className="h-px w-8 bg-amber-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
