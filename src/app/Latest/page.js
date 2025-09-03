"use client";
import { useState } from "react";
import { Article } from "../components/article";

export default function Latest() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Articles</h1>

      <Article
        img="/images/Subaru.jpg"
        imgAlt="Subaru Impreza WRX"
        eyebrow="Rally Superstar"
        title="How the Subaru Impreza WRX Became the Hero Car of the WRC in the 90s"
        intro="It was a cold Monte Carlo rally in 1994 where the story of this hero began to take shape. An oversized, overweight Legacy was not competing against the rapid, nimbler Celica so the lighter Impreza was introduced. Its rallying success was immediate but not in the hands of the man that would make the car famous."
      />
    </main>
  );
}
