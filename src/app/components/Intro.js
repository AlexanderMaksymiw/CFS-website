"use client";

export default function Intro({ eyebrow, title, content }) {
  return (
    /* Changed bg-black to bg-slate-900 */
    <div className="relative z-40 w-full bg-slate-900 overflow-hidden">
      {/* Container with a subtle slate border top/bottom */}
      <div className="relative h-[60vh] md:h-[80vh] w-full border-y border-white/5">
        <video
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
          src="/videos/cfs-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-slate-900/60" />
        <div className="absolute inset-0 bg-slate-900/30" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-30 text-white">
          <div className="max-w-4xl space-y-6">
            {/* Tag: Swapped Red for Amber/Slate combo */}
            <div className="flex">
              <span className="bg-amber-400 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] px-4 py-2 rounded-sm transform -rotate-1 shadow-2xl">
                {eyebrow}
              </span>
            </div>

            {/* Title: Using the tracking-tighter/font-black combo from your Hero */}
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.8] italic antialiased">
              {title}
            </h2>

            {/* Content: Slightly brighter text for readability against the video */}
            <p className="text-lg md:text-2xl text-slate-200 font-bold max-w-2xl leading-tight opacity-95 tracking-tight uppercase">
              {content}
            </p>

            {/* Added a subtle line accent to lead the eye down */}
            <div className="w-20 h-1 bg-amber-400 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
