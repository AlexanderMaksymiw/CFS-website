import { client } from "@/sanity/lib/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { WEEKLY_WINNERS_QUERY } from "@/sanity/queries/weeklyWinners"; // Ensure this matches your query filename
import WeeklyWinners from "./WeeklyWinners"; // The UI component

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default async function WeeklyWinnersContent() {
  const winners = await client.fetch(WEEKLY_WINNERS_QUERY);

  if (!winners || winners.length === 0) return null;

  // Pass the data and the urlFor function to the UI
  return <WeeklyWinners winners={winners} urlFor={urlFor} />;
}
