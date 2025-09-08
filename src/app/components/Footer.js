"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-700 min-h-[12rem] text-white flex">
      <div className="w-full flex flex-col items-stretch p-3 px-55 flex-1 text-center">
        <div className="border border-white p-4 flex-1">
          Left Side (logo/info)
        </div>
        <div className="border border-white p-4 flex-1">Middle Links</div>
        <div className="border border-white p-4 flex-1">Right Side</div>
      </div>
    </footer>
  );
}
