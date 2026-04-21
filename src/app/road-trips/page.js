import Footer from "../components/Footer";
import RoadCardWrapper from "../components/RoadCardWrapper";
import SubPageHeroNews from "../components/SubPageHeroNews";
import { client } from "../../sanity/lib/client";
import { ROADTRIPS_QUERY } from "../../sanity/queries/roadTrips";

export const revalidate = 60;

export default async function RoadTripsPage() {
  const roadTrips = await client.fetch(ROADTRIPS_QUERY);
  return (
    <main>
      <SubPageHeroNews
        title="ROAD TRIPS"
        category="Road Trips"
        images={["/images/elan-valley-convoy-bridge.jpg"]}
      />

      <div className="pt-10 px-6 md:px-20 lg:px-30 pb-15">
        <RoadCardWrapper initialTrips={roadTrips} />
      </div>

      <Footer />
    </main>
  );
}
