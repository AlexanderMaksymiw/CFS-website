"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Summary({ title, content, button, image }) {
  return (
    <div className="flex flex-row w-full bg-slate-300 container mx-auto px-4">
      <div className="flex flex-col gap-4 flex-1 border-1">
        <h1>{title}</h1>
        <p>{content}</p>
        <button className="btn">{button}</button>
      </div>
      <div className="flex-1 border-1">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto "
        />
      </div>
    </div>
  );
}
