import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import ArticleCard from "./ArticleCard";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[1...21] {
  title,
  intro,
  heroImage,
  "slug": slug.current
}`;

export default async function ArticleCardWrapper() {
  // Fetch posts server-side
  const posts = await client.fetch(POSTS_QUERY);

  if (!posts || posts.length === 0) {
    return <p className="text-center text-slate-500">No posts found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {posts.map((post) => {
        const imageUrl = post.heroImage
          ? urlFor(post.heroImage).width(800).height(600).url()
          : "/images/Ferrari Hero 2.jpg";

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
  );
}
