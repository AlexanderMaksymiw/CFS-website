"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

export default function ArticleCardWrapper() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      // Fetch all posts to determine total, or fetch per page
      const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        title,
        intro,
        heroImage,
        "slug": slug.current
      }`;
      const result = await client.fetch(query);
      setPosts(result);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-80 bg-slate-100 rounded-xl" />
        ))}
      </div>
    );

  // Calculate slice for current page
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
