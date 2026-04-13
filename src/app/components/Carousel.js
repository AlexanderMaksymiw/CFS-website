"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Carousel({ posts = [] }) {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 380;
  const GAP = 24;
  const slideAmount = CARD_WIDTH + GAP;
  const maxIndex = posts.length ? Math.max(posts.length - 3, 0) : 0;

  if (!posts.length)
    return <div className="p-10 text-center">Loading posts...</div>;

  return (
    <div className="lg:px-30 px-6  pb-20 overflow-hidden">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Latest from the Paddock{" "}
          </span>
          <h2 className="text-5xl font-bold tracking-tight uppercase mt-1">
            Latest Events
          </h2>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
            disabled={index === 0}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
              index === 0
                ? "border-gray-200 text-gray-300"
                : "border-slate-900 text-slate-950 hover:bg-slate-900 hover:text-white cursor-pointer"
            }`}
          >
            ←
          </button>
          <button
            onClick={() => setIndex((prev) => Math.min(prev + 1, maxIndex))}
            disabled={index === maxIndex}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
              index === maxIndex
                ? "border-gray-200 text-gray-300"
                : "border-slate-900 text-slate-950 hover:bg-slate-900 hover:text-white cursor-pointer"
            }`}
          >
            →
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-visible">
          <motion.div
            animate={{ x: -(index * slideAmount) }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex gap-6"
          >
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/latest/${post.slug}`}
                className="min-w-95 group cursor-pointer"
              >
                <div className="relative h-125 rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                        {post.date
                          ? new Date(post.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : "Coming Soon"}
                      </span>
                      <h3 className="text-3xl font-bold leading-none uppercase tracking-tight">
                        {post.title}
                      </h3>
                      <div className="pt-4 overflow-hidden">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transform transition-transform duration-300 group-hover:translate-x-2">
                          Read Full Story <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 h-1 bg-gray-200 w-full rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={false}
            animate={{ width: `${((index + 3) / posts.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
