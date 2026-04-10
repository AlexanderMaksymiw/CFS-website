"use client";
import { useState, useEffect, useRef } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import RoadCard from "./RoadCard";
import { ROADTRIPS_QUERY } from "@/sanity/queries/roadTrips";

export default function RoadCardWrapper({ initialTrips = [] }) {
  const [roadTrips] = useState(initialTrips);
  const [page, setPage] = useState(0);
  const postsPerPage = 6;
  const sectionRef = useRef(null);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!roadTrips || roadTrips.length === 0) {
    return <p className="text-center text-slate-500">No posts found.</p>;
  }

  const totalPages = Math.ceil(roadTrips.length / postsPerPage);
  const paginatedTrips = roadTrips.slice(
    page * postsPerPage,
    page * postsPerPage + postsPerPage,
  );

  return (
    <div ref={sectionRef} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedTrips.map((trip) => {
          const imageUrl = trip.heroImage
            ? urlFor(trip.heroImage).width(800).height(600).url()
            : "/images/i8-open.jpg";

          return (
            <RoadCard
              key={trip.slug}
              title={trip.title}
              description={trip.intro}
              image={imageUrl}
              link={`/road-trips/${trip.slug}`}
            />
          );
        })}
      </div>

      {totalPages >= 1 && (
        <div className="flex items-center justify-center gap-6 mt-16 border-t border-slate-200 pt-10">
          <button
            disabled={page === 0}
            onClick={() => handlePageChange(page - 1)}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
              page === 0
                ? "text-slate-300"
                : "text-slate-900 hover:text-amber-500 cursor-pointer"
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
                      className="text-slate-300 font-black text-xs px-1"
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
                      : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>

          <button
            disabled={page === totalPages - 1}
            onClick={() => handlePageChange(page + 1)}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
              page === totalPages - 1
                ? "text-slate-300"
                : "text-slate-900 hover:text-amber-500 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
