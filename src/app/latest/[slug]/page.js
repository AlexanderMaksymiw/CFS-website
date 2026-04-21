import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/sanityClient";

import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const builder = imageUrlBuilder(client);
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

function urlFor(source) {
  return source ? builder.image(source) : null;
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug });

  if (!post)
    return (
      <p className="text-white bg-slate-900 h-screen flex items-center justify-center">
        Post not found
      </p>
    );

  const heroImageUrl = post.heroImage
    ? urlFor(post.heroImage)?.width(1600).url()
    : null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {heroImageUrl && (
        <div className="relative w-full h-[50vh] md:h-[65vh] bg-slate-900 overflow-hidden">
          <Image
            src={heroImageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/10 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-16 px-6 md:px-30 text-white">
            <div className="max-w-4xl space-y-3">
              <div className="w-12 h-1 bg-amber-400" />
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight italic leading-[0.9] drop-shadow-xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                <span>By {post.author}</span>
                <span className="w-6 h-px bg-white/20" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <article className="flex flex-col items-center py-12 px-6 w-full">
        <div className="max-w-4xl w-full mb-12 border-l-4 border-amber-400 pl-6 md:pl-10">
          <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight uppercase italic">
            {post.intro}
          </h2>
        </div>

        <div className="max-w-3xl w-full space-y-8 text-left">
          <PortableText
            value={post.content}
            components={{
              types: {
                image: ({ value }) => {
                  const src = urlFor(value)?.width(1200).url();
                  return src ? (
                    <div className="my-10 mx-0 md:-mx-12 lg:-mx-20 max-w-4xl">
                      <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
                        <Image
                          src={src}
                          alt={value.alt || ""}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {value.caption && (
                        <p className="mt-3 text-[10px] uppercase font-black tracking-widest text-slate-400 text-center">
                          {value.caption}
                        </p>
                      )}
                    </div>
                  ) : null;
                },
              },
              block: {
                normal: ({ children }) => (
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed tracking-tight font-medium mb-6">
                    {children}
                  </p>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight italic mt-12 mb-4">
                    {children}
                  </h2>
                ),
              },
            }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
}
