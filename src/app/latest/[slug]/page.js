import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/sanityClient";

import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const builder = imageUrlBuilder(client);
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

// Helper to safely build Sanity image URLs
function urlFor(source) {
  return source ? builder.image(source) : null;
}

export default async function PostPage({ params }) {
  const { slug } = params;

  // Fetch the post
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post) {
    return <p>Post not found</p>;
  }

  // Hero and first image URLs
  const heroImageUrl = post.heroImage ? urlFor(post.heroImage)?.width(1200).height(600).url() : null;
  const firstImageUrl = post.image ? urlFor(post.image)?.width(1200).height(600).url() : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero image */}
      {heroImageUrl && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[21/9]">
          <Image
            src={heroImageUrl}
            alt={post.title || "Post hero image"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-10 sm:pb-16 md:pb-24 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent">
            <h1 className="text-2xl md:text-3xl lg:text-7xl font-black text-white drop-shadow-2xl text-center md:text-left max-w-4xl mx-auto ">
              {post.title}
            </h1>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center pt-10 sm:px-6 md:px-0 w-full pb-20">
        <h3 className="text-lg md:text-3xl font-medium text-center md:text-left max-w-4xl text-slate-800">
          {post.intro}
        </h3>

        <div className="max-w-4xl w-full mt-4 text-center md:text-left text-slate-600 text-sm sm:text-base">
          <p>Written by {post.author}</p>
          <p>Event Date: {post.date}</p>
        </div>

        {/* First image */}
        {firstImageUrl && (
          <div className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden mt-8 mb-5">
            <Image
              src={firstImageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Main content using PortableText */}
        <div className="max-w-4xl w-full space-y-8 text-left text-slate-700 px-2 sm:px-4 md:px-0">
          {Array.isArray(post.content) && (
            <PortableText
              value={post.content}
              components={{
                types: {
                  image: ({ value }) => {
                    const src = urlFor(value)?.width(800).height(450).url();
                    return src ? (
                      <div className="relative w-full aspect-[16/9] my-8">
                        <Image
                          src={src}
                          alt={value.alt || ""}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null;
                  },
                },
                block: {
                  normal: ({ children }) => (
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
