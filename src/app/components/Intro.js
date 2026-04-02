"use client";

export default function Intro({ eyebrow, title, content }) {
  return (
    <div className="rounded-2xl max-w-7xl h-170 absolute top-[95%] left-1/2 -translate-x-1/2  px-6 w-full  z-10">
      <video
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        src="/videos/cfs-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
