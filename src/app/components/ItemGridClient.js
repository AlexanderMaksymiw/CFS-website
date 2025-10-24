import Image from "next/image";
import Link from "next/link";

export default function ItemGrid({ posts }) {
  return (
    <div className="lg:px-56 px-4 bg-white">
      <h2 className="text-5xl font-bold text-slate-800 text-left mb-8">
        Latest Events
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6 w-full">
        {/* Left: featured article */}
        {posts[0] && (
          <Link
            href={`/latest/${posts[0].slug.current}`}
            className="flex flex-col h-[700px] cursor-pointer overflow-hidden"
          >
            <div className="relative overflow-hidden h-[450px] w-full">
              <Image
                src={posts[0].imageUrl || "/images/placeholder.jpg"}
                alt={posts[0].title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="pt-5 flex flex-col justify-center">
              <h3 className="font-semibold text-slate-400">
                {posts[0].publishedAt
                  ? new Date(posts[0].publishedAt).toLocaleDateString()
                  : "No date"}
              </h3>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {posts[0].title}
              </h3>
            </div>
          </Link>
        )}

        {/* Right: remaining articles */}
        <div className="grid grid-cols-2 grid-rows-2 overflow-hidden gap-5">
          {posts.slice(1, 5).map((post) => (
            <Link
              key={post._id}
              href={`/latest/${post.slug.current}`}
              className="flex flex-col h-[350px] cursor-pointer"
            >
              <div className="relative h-[250px] overflow-hidden w-full">
                <Image
                  src={post.imageUrl || "/images/placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-col pt-2">
                <h3 className="font-semibold text-slate-400">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString()
                    : "No date"}
                </h3>
                <h3 className="text-xl text-slate-800 font-bold line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <Link href="/latest" className="btn">
          Latest
        </Link>
      </div>
    </div>
  );
}
