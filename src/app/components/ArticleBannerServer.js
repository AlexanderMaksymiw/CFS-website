import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import ArticleBannerClient from "./ArticleBannerClient";

const POST_QUERY = `*[_type == "post" && defined(slug.current)] | order(date desc)[0] {
title,
  intro,
  "imageUrl": heroImage.asset->url,
  "slug": slug.current
}`;

export default async function ArticleBannerServer() {
  const post = await client.fetch(POST_QUERY);
  console.log("Fetched posts:", post);

  return <ArticleBannerClient post={post} />;
}
