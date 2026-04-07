"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";

export default function FeaturedModal({ featuredPosts }) {
  // Pagination
  const postsPerPage = 6;
  const [page, setPage] = useState(0);
  const sectionRef = useRef(null);
  const totalPages = Math.ceil(featuredPosts.length / postsPerPage);

  const MAX_BUTTONS = 3;

  // Calculate start and end index of visible buttons
  let startPage = Math.max(0, page - 1); // center current page
  let endPage = startPage + MAX_BUTTONS;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(0, endPage - MAX_BUTTONS);
  }

  const visiblePages = Array.from(
    { length: endPage - startPage },
    (_, i) => startPage + i,
  );

  // Modal
  const [selectedIndex, setSelectedIndex] = useState(null); // index in featuredPosts
  const [thumbIndex, setThumbIndex] = useState(0); // index of thumbnail in selected post

  // Current post in modal
  const selectedPost =
    selectedIndex !== null ? featuredPosts[selectedIndex] : null;

  // Reset thumbnail index when switching posts
  useEffect(() => {
    setThumbIndex(0);
  }, [selectedIndex]);

  const handlePageChange = (i) => {
    setPage(i);

    setTimeout(() => {
      if (sectionRef.current) {
        const top =
          sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;

        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 0);
  };

  // Paginated posts for the grid
  const paginatedPosts = featuredPosts.slice(
    page * postsPerPage,
    page * postsPerPage + postsPerPage,
  );

  return (
    <>
      {/* Grid of posts */}
      <section ref={sectionRef} className="grid md:grid-cols-3 gap-6 pt-10">
        {paginatedPosts.map((post, i) => (
          <div
            key={post._id}
            onClick={() => setSelectedIndex(page * postsPerPage + i)}
            className="cursor-pointer rounded-xl overflow-hidden relative"
          >
            <div className="absolute bottom-10 pl-10 z-10">
              <h3 className="text-2xl font-bold text-white">{post.title}</h3>
            </div>

            {post.thumbnails?.length > 0 ? (
              <img
                src={post.thumbnails[0].asset.url}
                alt={post.title}
                className="w-full h-125 object-cover"
              />
            ) : (
              <div className="h-48 flex items-center justify-center">
                No image yet
              </div>
            )}
          </div>
        ))}
      </section>
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {/* First page */}
        {page !== 0 && (
          <button
            onClick={() => handlePageChange(0)}
            className="px-3 py-1 bg-slate-100 hover:bg-slate-300 rounded text-slate-900 "
          >
            <ChevronDoubleLeftIcon className="w-4 h-4" />
          </button>
        )}

        {/* Prev */}
        {page > 0 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-3 py-1 bg-slate-100 hover:bg-slate-300 rounded text-slate-900 hover:cursor-pointer"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
        )}

        {/* Visible page numbers */}
        {visiblePages.map((i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-3 py-1 rounded ${
              page === i
                ? "bg-slate-900 text-slate text-sm font-semibold"
                : "bg-slate-100 hover:bg-slate-300 text-slate-900 font-semibold hover:cursor-pointer"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        {page < totalPages - 1 && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-3 py-1 bg-slate-100 hover:bg-slate-300 rounded text-slate-900 hover:cursor-pointer"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        )}

        {/* Last page */}
        {page !== totalPages - 1 && (
          <button
            onClick={() => handlePageChange(totalPages - 1)}
            className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-300 text-slate-900 hover:cursor-pointer"
          >
            <ChevronDoubleRightIcon className="w-4 h-4" />
          </button>
        )}
      </div>
      {/* Modal */}
      {selectedPost && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 pt-15"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-xl h-175 w-175 overflow-hidden relative"
          >
            {/* Post arrows (cycle posts) */}
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === 0 ? featuredPosts.length - 1 : prev - 1,
                )
              }
              className="fixed left-4 top-1/2 -translate-y-1/2 z-50 text-white text-4xl font-black cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === featuredPosts.length - 1 ? 0 : prev + 1,
                )
              }
              className="fixed right-4 top-1/2 -translate-y-1/2 z-50 text-white text-4xl font-black cursor-pointer"
            >
              →
            </button>

            {/* Thumbnail arrows and image */}
            {selectedPost?.thumbnails?.length > 0 &&
              selectedPost.thumbnails[thumbIndex] && (
                <>
                  <button
                    onClick={() =>
                      setThumbIndex((prev) =>
                        prev === 0
                          ? selectedPost.thumbnails.length - 1
                          : prev - 1,
                      )
                    }
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-4 py-2 rounded-full text-4xl font-black cursor-pointer hover:text-gray-800"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setThumbIndex((prev) =>
                        prev === selectedPost.thumbnails.length - 1
                          ? 0
                          : prev + 1,
                      )
                    }
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-4 py-2 rounded-full text-4xl font-black cursor-pointer hover:text-gray-800"
                  >
                    →
                  </button>

                  {/* IMAGE POSTS */}
                  {selectedPost.mediaType === "image" &&
                    selectedPost?.thumbnails?.length > 0 &&
                    selectedPost.thumbnails[thumbIndex] && (
                      <>
                        <button
                          onClick={() =>
                            setThumbIndex((prev) =>
                              prev === 0
                                ? selectedPost.thumbnails.length - 1
                                : prev - 1,
                            )
                          }
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 px-4 py-2 text-4xl font-black cursor-pointer"
                        >
                          ←
                        </button>

                        <button
                          onClick={() =>
                            setThumbIndex((prev) =>
                              prev === selectedPost.thumbnails.length - 1
                                ? 0
                                : prev + 1,
                            )
                          }
                          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 px-4 py-2 text-4xl font-black cursor-pointer"
                        >
                          →
                        </button>

                        <img
                          src={selectedPost.thumbnails[thumbIndex].asset.url}
                          alt={selectedPost.title}
                          className="w-full h-full object-bottom object-cover rounded-xl"
                        />
                      </>
                    )}
                  {/* VIDEO POSTS */}
                  {selectedPost.mediaType === "video" &&
                    selectedPost.videoFile?.asset?.url && (
                      <video
                        src={selectedPost.videoFile.asset.url}
                        controls
                        autoPlay
                        loop
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                  {/* EMBED POSTS */}
                  {selectedPost.mediaType === "embed" &&
                    selectedPost.embedUrl && (
                      <iframe
                        src={selectedPost.embedUrl}
                        className="w-full h-full rounded-xl"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    )}
                </>
              )}
          </div>
        </div>
      )}
    </>
  );
}
