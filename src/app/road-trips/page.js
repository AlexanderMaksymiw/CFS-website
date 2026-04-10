"use client";

import Footer from "../components/Footer";
import RoadCardWrapper from "../components/RoadCardWrapper";
import SubPageHeroNews from "../components/SubPageHeroNews";
export default function RoadTripsPage() {
  return (
    <main>
      <SubPageHeroNews
        title="ROAD TRIPS"
        category="Road Trips"
        images={["/images/elan-valley-convoy-bridge.jpg"]}
      />

      <div className="pt-10 px-6 md:px-20 lg:px-30 pb-15">
        {" "}
        <RoadCardWrapper />
      </div>

      <Footer />
    </main>
  );
}
