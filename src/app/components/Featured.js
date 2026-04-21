import { FEATURED_QUERY } from "../../sanity/queries/featuredContent";
import { client } from "../../sanity/lib/sanityClient";
import FeaturedModal from "./FeaturedModal";

export default async function Featured({}) {
  const featuredPosts = await client.fetch(FEATURED_QUERY);

  return <FeaturedModal featuredPosts={featuredPosts} />;
}
