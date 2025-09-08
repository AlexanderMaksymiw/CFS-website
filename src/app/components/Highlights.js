"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Card from "./Card";

export default function Highlights({ heading, text, cards = [] }) {
  return (
    <div>
      <div className="px-55 pt-15">
        <h2 className="text-slate-800 font-bold text-base md:text-2xl lg:text-6xl">
          {heading}
        </h2>
        <p className="text-slate-800">{text}</p>
      </div>
      <div className="px-8 md:px-16 lg:px-55">
        <div className="grid grid-cols-3 gap-4 pt-10 pb-30">
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
