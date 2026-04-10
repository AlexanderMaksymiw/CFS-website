import Image from "next/image";
import Link from "next/link";

export default function ArticleBannerClient({ post }) {
  if (!post) return null;

  return (
    <section className="relative w-full h-100 md:h-150 bg-slate-900 overflow-hidden">
      {/* 1. TEXT / SLATE BLADE */}
      <div
        className="absolute inset-y-0 left-0 h-full w-full bg-slate-900 text-white z-20"
        style={{
          /* Angles perfectly to meet the image cut */
          clipPath:
            "polygon(0 0, calc(50% + 5vw) 0%, calc(50% - 5vw) 100%, 0% 100%)",
        }}
      >
        <div className="flex flex-col justify-center h-full px-6 md:px-30">
          <div className="max-w-2xl space-y-4">
            {/* Category / Eyebrow */}
            <span className="text-amber-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
              Featured Story
            </span>

            {/* Title with that tight/italic look */}
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight italic leading-[0.9] text-white">
              {post.title}
            </h2>

            {/* Intro text */}
            <p className="text-slate-300 text-base md:text-lg font-medium max-w-lg line-clamp-3 tracking-tight leading-relaxed">
              {post.intro}
            </p>

            {/* CFS Action Button (No line this time, keep it clean like the grid) */}
            <div className="pt-8 flex">
              <Link
                href={`/latest/${post.slug}`}
                className="inline-flex items-center gap-4 bg-amber-400 text-slate-900 px-10 py-4 rounded-sm font-black uppercase tracking-widest text-xs transition-transform hover:scale-105"
              >
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. IMAGE / BLADE */}
      <div
        className="absolute inset-y-0 right-0 h-full w-full bg-slate-800 z-10"
        style={{
          /* Opposite cut to create the seam */
          clipPath:
            "polygon(calc(50% + 5vw) 0%, 100% 0%, 100% 100%, calc(50% - 5vw) 100%)",
        }}
      >
        <Image
          src={post.imageUrl || "/images/placeholder.jpg"}
          className="object-cover"
          alt={post.title}
          fill
          priority
        />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-transparent to-slate-950/20" />
      </div>
    </section>
  );
}
