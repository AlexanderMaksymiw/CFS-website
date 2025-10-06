"use client";
import { useState } from "react";
import { Article } from "../components/article";
import LatestHero from "../components/LatestHero";
import ArticleCard from "../components/ArticleCard";

export default function Latest() {
  return (
    <main>
      <LatestHero
        articleTitle="Pre-90s Classic Car Night"
        articleIntro="A night to celebrate everything pre-1990 with a trophy for the best car of the night."
        image={["/images/911-drive.jpg"]}
      />

      <h2 className="text-4xl font-semibold text-slate-800 text-center pt-20">
        Latest Events & News
      </h2>
      <div className="grid grid-cols-3 gap-8 py-15 max-w-7xl mx-auto">
        <ArticleCard
          title="German CFS Night: A Social Celebration of German Cars"
          image="/images/epic-golf.jpg"
          description="“German Night” brings car enthusiasts together to celebrate German engineering, showcase stunning rides, and compete for the coveted Best Car trophy."
          link="/"
        />
        <ArticleCard
          title="Explore the Elan Valley: Group Drive Out"
          image="/images/hero/volvo_drive.jpg"
          description="Join fellow drivers for an unforgettable group drive through the scenic Elan Valley a journey of winding roads, breathtaking views, and shared passion for the open road."
          link="/"
        />
        <ArticleCard
          title="JDM Battle: Trophy for the Top Japanese Car"
          image="/images/evo_back.jpg"
          description="Celebrate Japan’s finest automotive icons at the JDM Battle a high-energy showcase where enthusiasts compete for glory and the Top Japanese Car trophy."
          link="/"
        />
        <ArticleCard
          title="Red Kite Café Drive-Out Adventure"
          image="/images/red-kite-event/red-fords.jpg"
          description="et out on a scenic drive to the Red Kite Café — a relaxed adventure combining great roads, stunning countryside views, and good company over coffee and conversation."
          link="/"
        />
      </div>
    </main>
  );
}
