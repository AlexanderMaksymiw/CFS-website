"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Carousel({ posts = [] }) {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 340;
  const GAP = 24;
  const slideAmount = CARD_WIDTH + GAP;
  const maxIndex = posts.length ? Math.max(posts.length - 3, 0) : 0;

  if (!posts.length) return <div>Loading posts...</div>;

  return (
    <div className="lg:px-30 px-4  pt-20">
      <h2 className="text-5xl font-bold text-slate-800 tracking-tight text-left mb-5">
        LATEST EVENTS{" "}
      </h2>

      <div className="relative">
        {/* Carousel viewport */}
        <div className="overflow-hidden pr-20">
          <motion.div
            animate={{ x: -(index * slideAmount) }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className="flex gap-6"
          >
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/latest/${post.slug}`}
                className="min-w-95 max-w-95 cursor-pointer"
              >
                <div className="border border-gray-200 shadow bg-black flex flex-col h-full rounded-xl overflow-hidden">
                  <div className="relative h-125 overflow-hidden w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="320px"
                      className="object-cover hover:scale-102 transition-transform duration-300 opacity-50"
                    />

                    <div className="absolute space-y-2 bottom-5  pl-10 max-w-70 border-white">
                      <h3 className="text-3xl text-white font-bold">
                        {post.title}
                      </h3>
                      <h3 className="font-semibold text-white">
                        {post.date
                          ? new Date(post.date).toLocaleDateString()
                          : "No date"}
                      </h3>
                      <button className=" border-white border-2 p-2 rounded-lg  text-white font-semibold cursor-pointer hover:border-gray-400 hover:text-gray-400">
                        Read more
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex  pt-12">
        {/* Left Arrow */}
        <button
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          className=" left-0 top-1/2 -translate-y-1/2 z-10  px-4 py-2 rounded-full text-4xl font-black cursor-pointer hover:text-gray-800"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setIndex((prev) => Math.min(prev + 1, maxIndex))}
          className=" right-0 top-1/2 -translate-y-1/2 z-10 px-4 py-2 rounded-full text-4xl font-black cursor-pointer  hover:text-gray-800"
        >
          →
        </button>
      </div>
    </div>
  );
}
