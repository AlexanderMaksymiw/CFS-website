"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Card from "./Card";

export default function Highlights({ heading, text, cards = [] }) {
  return (
    <div>
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="grid grid-cols-3 gap-4  p-6">
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
  );
}
