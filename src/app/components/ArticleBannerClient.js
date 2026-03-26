import Image from "next/image";
import Link from "next/link";

export default function ArticleBannerClient({ post }) {
  return (
    <section className="relative flex px-30 h-100 ">
      <div className="absolute inset-0  ">
        {post && (
          <Image
            src={post.imageUrl || "/images/placeholder.jpg"}
            className="w-full h-full px-30 object-cover "
            alt={post.title}
            fill
          />
        )}
      </div>

      <div
        className="relative z-10 bg-amber-700 text-white w-[60%] px-12 flex flex-col justify-center"
        style={{
          clipPath: "polygon(0 0, 50% 0, 70% 100%, 0% 100%)",
        }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4 text-left max-w-sm">
            Example heading {post.title}
          </h2>
          <p className="text-left max-w-sm">{post.intro}</p>
        </div>
        <Link
          href={`/latest/${post.slug}`}
          className="flex flex-col cursor-pointer "
        >
          <button className="pt-10 self-start">Read more</button>
        </Link>
      </div>
    </section>
  );
}
