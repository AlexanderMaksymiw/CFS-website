import { MERCH_QUERY } from "@/sanity/queries/merchandise";
import { client } from "@/sanity/lib/client";
import MerchCarousel from "./MerchCarousel";

export default async function MerchContainer() {
  const merchItems = await client.fetch(MERCH_QUERY);

  return <MerchCarousel merchItems={merchItems} />;
}
