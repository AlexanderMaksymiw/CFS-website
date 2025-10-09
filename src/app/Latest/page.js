"use client";
import { useState } from "react";
import { Article } from "../components/article";
import LatestHero from "../components/LatestHero";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";

export default function Latest() {
  return (
    <main>
      <LatestHero
        articleTitle="Final 2025 Meet: Pre-90s Classic Car Night"
        articleIntro="A night to celebrate everything pre-1990 with a trophy for the best car of the night."
        image={["/images/911-drive.jpg"]}
        link="/latest/final-2025-meet-pre-90s-classic-car-night"
      />

      <h2 className="text-4xl font-semibold text-slate-800 text-center pt-20">
        Latest Events & News
      </h2>
      <div className="grid grid-cols-3 gap-8 py-15 max-w-7xl mx-auto">
        <ArticleCard
          title="German CFS Night: A Social Celebration of German Cars"
          image="/images/epic-golf.jpg"
          description="“German Night” brings car enthusiasts together to celebrate German engineering, showcase stunning rides, and compete for the coveted Best Car trophy."
          link="/latest/german-cfs-night-a-social-celebration-of-german-cars"
        />
        <ArticleCard
          title="Explore the Elan Valley: Group Drive Out"
          image="/images/hero/volvo_drive.jpg"
          description="CFS hit the Elan Valley for a group drive around mid-Wales with twisty roads, epic scenery, and an unbeatable driving spirit all around."
          link="/latest/explore-the-elan-valley-group-drive-out"
        />
        <ArticleCard
          title="JDM Battle: Trophy for the Top Japanese Car"
          image="/images/evo_back.jpg"
          description="Celebrate Japan’s finest automotive icons at the JDM Battle a high-energy showcase where enthusiasts compete for glory and the Top Japanese Car trophy."
          link="/latest/jdm-battle-trophy-for-the-top-japanese-car"
        />
        <ArticleCard
          title="Red Kite Café Drive-Out Adventure"
          image="/images/red-kite-event/red-fords.jpg"
          description="set out on a scenic drive to the Red Kite Café — a relaxed adventure combining great roads, stunning countryside views, and good company over coffee and conversation."
          link="/latest/red-kite-cafe-drive-out-adventure"
        />
      </div>
      <Footer />
    </main>
  );
}
