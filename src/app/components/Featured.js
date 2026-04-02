import { FEATURED_QUERY } from "@/sanity/queries/featuredContent";
import { client } from "@/sanity/lib/client";

export default async function Featured() {
  const featuredPosts = await client.fetch(FEATURED_QUERY);

  return (
    <section className="grid md:grid-cols-3 gap-6 pt-10">
      {featuredPosts.map((featured) => (
        <div
          key={featured._id}
          className="cursor-pointer rounded-xl   overflow-hidden"
        >
          <div className="absolute flex bottom-10 pl-10">
            <h3 className="text-2xl font-bold text-tight">{featured.title}</h3>
          </div>
          {featured.thumbnails?.length > 0 ? (
            <img
              src={featured.thumbnails[0].asset.url}
              alt={featured.title}
              className="w-full h-100 object-cover"
            />
          ) : (
            <div className="h-48 flex items-center justify-center">
              No image yet
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
