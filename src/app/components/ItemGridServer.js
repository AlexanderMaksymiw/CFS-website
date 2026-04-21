import { client } from "../../sanity/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import Carousel from "./Carousel";

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(date desc)[0...5] {
  _id,
  title,
"slug": slug.current,
date,
  "imageUrl": heroImage.asset->url
}`;

const options = { next: { revalidate: 30 } };

export default async function ItemGridServer() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  console.log("Fetched posts:", posts);

  return <Carousel posts={posts} />;
}
