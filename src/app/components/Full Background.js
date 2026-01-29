"use client";

export default function FullBackground({ children }) {
  return (
    <div className="relative h-162.5 md:h-212.5 bg-center bg-fixed overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/cfs-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero/cfs-poster.jpg"

      />

      <div className=" pt-25 flex relative z-20">
        <div className="  h-120 flex-1"></div>
        <div>{children}</div>
      </div>
    </div>
  );
}
