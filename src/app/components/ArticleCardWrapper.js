"use client";
import { useState, useEffect } from "react";
import { urlFor } from "../../sanity/lib/image";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

export default function ArticleCardWrapper({ initialPosts = [] }) {
  const [posts] = useState(initialPosts);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  const totalItems = posts.length;
  const currentPosts = posts.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {currentPosts.map((post) => {
          const imageUrl = post.heroImage
            ? urlFor(post.heroImage).width(800).height(600).url()
            : "/images/i8-open.jpg";

          return (
            <ArticleCard
              key={post.slug}
              title={post.title}
              description={post.intro}
              image={imageUrl}
              link={`/latest/${post.slug}`}
            />
          );
        })}
      </div>

      {totalItems > itemsPerPage && (
        <div className="border-t border-slate-100 pt-12">
          <Pagination
            page={page}
            setPage={setPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )}
    </div>
  );
}
