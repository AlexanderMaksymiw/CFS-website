"use client"; // needed for useState
import { useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import RoadCard from "./RoadCard";
import { ROADTRIPS_QUERY } from "@/sanity/queries/roadTrips";
import { useEffect } from "react";

export default function RoadCardWrapper() {
  const [roadTrips, setRoadTrips] = useState([]);
  const [page, setPage] = useState(0);
  const postsPerPage = 6;

  // Fetch data client-side (could also use server component + pass in as prop)
  useEffect(() => {
    async function fetchTrips() {
      const trips = await client.fetch(ROADTRIPS_QUERY);
      setRoadTrips(trips || []);
    }
    fetchTrips();
  }, []);

  if (!roadTrips || roadTrips.length === 0) {
    return <p className="text-center text-slate-500">No posts found.</p>;
  }

  const totalPages = Math.ceil(roadTrips.length / postsPerPage);
  const paginatedTrips = roadTrips.slice(
    page * postsPerPage,
    page * postsPerPage + postsPerPage,
  );

  return (
    <>
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

      {/* Pagination buttons */}
      <div className="flex justify-center gap-2 mt-8 mb-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              i === page
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-900 hover:bg-slate-300"
            }`}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
