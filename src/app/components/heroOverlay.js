"use client";
import Link from "next/link";

export default function HeroOverlay() {
  return (
    <div className="flex flex-col justify-center h-full px-6 md:px-30 text-white">
      <div className="max-w-4xl space-y-2">
        {/* Amber accent on top of Slate-800 */}
        <div className="uppercase tracking-[0.4em] text-xs mb-4 font-black text-amber-400 border-l-4 border-amber-400 pl-4">
          Welcome to{" "}
        </div>

        <h1 className="flex flex-col leading-[0.85] uppercase font-black italic antialiased max-w-lg">
          <span className="text-6xl md:text-9xl tracking-tighter text-white">
            Car Farm <br />
            <span className="text-amber-400">Social</span>
          </span>
        </h1>

        <p className="mt-8 text-md md:text-lg font-medium text-slate-300 max-w-md leading-relaxed">
          Oswestry's finest car club, see hundreds of cars and meet their
          owners.
        </p>

        <div className="mt-10 flex flex-wrap gap-5">
          <Link
            href="/latest"
            className="bg-amber-400 text-slate-800 px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white "
          >
            Explore Events
          </Link>

          {/* Secondary Button: Slate/White Border */}
          <Link
            href="/rules"
            className="border-2 border-slate-500 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-800 hover:border-white transition-all"
          >
            The Rules
          </Link>
        </div>
      </div>
    </div>
  );
}
