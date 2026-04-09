"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"; // Switched to outline for a lighter touch

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
      {/* 1. THE GRID: Clean & Direct */}
      <section
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10"
      >
        {paginatedPosts.map((post, i) => (
          <div
            key={post._id}
            onClick={() => setSelectedIndex(page * postsPerPage + i)}
            className="group relative cursor-pointer aspect-[4/5] bg-slate-100 overflow-hidden"
          >
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                {post.title}
              </h3>
            </div>

            {post.thumbnails?.length > 0 ? (
              <img
                src={post.thumbnails[0].asset.url}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                No Image
              </div>
            )}
          </div>
        ))}
      </section>

      {/* 2. THE PAGINATION: Minimal Bars */}
      <div className="flex justify-center items-center mt-12 gap-8">
        <button
          disabled={page === 0}
          onClick={() => handlePageChange(page - 1)}
          className="text-slate-400 hover:text-slate-900 disabled:opacity-20 transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                page === i ? "bg-slate-900 w-8" : "bg-slate-200 w-4"
              }`}
            />
          ))}
        </div>

        <button
          disabled={page === totalPages - 1}
          onClick={() => handlePageChange(page + 1)}
          className="text-slate-400 hover:text-slate-900 disabled:opacity-20 transition-colors"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>

      {/* 3. THE MODAL: Modern Viewport */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedIndex(null)}
        >
          <button className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors z-[110]">
            <XMarkIcon className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-6xl h-full flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery Navigation */}
            {selectedPost.mediaType === "image" &&
              selectedPost.thumbnails.length > 1 && (
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-30 pointer-events-none">
                  <button
                    onClick={() =>
                      setThumbIndex((p) =>
                        p === 0 ? selectedPost.thumbnails.length - 1 : p - 1,
                      )
                    }
                    className="p-3 bg-white/90 shadow-sm border border-slate-100 text-slate-900 pointer-events-auto hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <ChevronLeftIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setThumbIndex((p) =>
                        p === selectedPost.thumbnails.length - 1 ? 0 : p + 1,
                      )
                    }
                    className="p-3 bg-white/90 shadow-sm border border-slate-100 text-slate-900 pointer-events-auto hover:bg-slate-900 hover:text-white transition-all"
                  >
                    <ChevronRightIcon className="w-5 h-5" />
                  </button>
                </div>
              )}

            <div className="relative flex-grow max-h-[80vh] bg-slate-50">
              {selectedPost.mediaType === "image" && (
                <img
                  src={selectedPost.thumbnails[thumbIndex].asset.url}
                  className="w-full h-full object-contain"
                  alt=""
                />
              )}
              {selectedPost.mediaType === "video" && (
                <video
                  src={selectedPost.videoFile?.asset?.url}
                  controls
                  className="w-full h-full object-contain bg-black"
                />
              )}
            </div>

            {/* Modal Info Footer - Grounded & Clean */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-0.5 bg-amber-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {thumbIndex + 1} / {selectedPost.thumbnails?.length || 1}
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase italic">
                {selectedPost.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
