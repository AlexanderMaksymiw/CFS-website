import { client } from "../../sanity/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import NextRoadTrip from "./NextRoadTrip";
import { LATEST_ROADTRIP_QUERY } from "../../sanity/queries/latestRoadTrips";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default async function NextRoadTripContent() {
  const roadtrip = await client.fetch(LATEST_ROADTRIP_QUERY);

  return (
    <NextRoadTrip
      img={urlFor(roadtrip.heroImage).url()}
      title={roadtrip.title}
      text={roadtrip.intro}
      button="Explore event"
      href={`/road-trips/${roadtrip.slug.current}`}
    />
  );
}
