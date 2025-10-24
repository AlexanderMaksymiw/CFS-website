import { client } from "@/sanity/lib/sanityClient";
import ItemGrid from "./ItemGridClient";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...5] {
  _id,
  title,
  slug,
  publishedAt,
  "imageUrl": image.asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function ItemGridServer() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return <ItemGrid posts={posts} />;
}
