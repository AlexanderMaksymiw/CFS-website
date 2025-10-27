import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const LATEST_POST_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0] {
  title,
  intro,
  heroImage,
  "slug": slug.current
}`;

export default async function LatestHeroServer() {
  const post = await client.fetch(LATEST_POST_QUERY);

  if (!post) return null;

  const heroImageUrl = post.heroImage
    ? urlFor(post.heroImage).width(1600).height(900).url()
    : "/images/Ferrari Hero 2.jpg";

  return (
    <div>
      <Header />

      <div className="relative flex flex-col md:flex-row h-auto md:h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0 md:static">
          <Image
            src={heroImageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-slate-800/10 md:hidden"></div>

        {/* Text */}

        <div className="relative z-10 flex-1 flex items-center justify-center px-4  bg-slate-800/70 md:bg-slate-800 md:static">
          <div className="text-left max-w-xl">
            <h2 className="text-white text-4xl md:text-5xl pb-4 font-semibold leading-tight">
              {post.title}
            </h2>
            <h3 className="text-white text-base md:text-lg max-w-md leading-relaxed">
              {post.intro}
            </h3>
            <h3 className="text-white text-base md:text-lg max-w-md leading-relaxed">
              {post.date}
            </h3>
            <div className="pt-5">
              <Link href={`/latest/${post.slug}`}>
                <button className="rounded-xl py-2 text-white cursor-pointer underline">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop duplicate image */}
        <div className="hidden md:block flex-1 relative w-full h-[600px]">
          <Image
            src={heroImageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
