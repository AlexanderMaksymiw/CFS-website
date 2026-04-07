"use client"; // only needed if you want client features on the page itself

import Footer from "../components/Footer";
import RoadCardWrapper from "../components/RoadCardWrapper";
import SubPageHeroNews from "../components/SubPageHeroNews";

export default function RoadTripsPage() {
  return (
    <main>
      <SubPageHeroNews
        title="ROAD TRIPS"
        images={["/images/elan-valley-convoy-bridge.jpg"]}
      />

      <div className="pt-10 px-30">
        <RoadCardWrapper />
      </div>

      <Footer />
    </main>
  );
}
