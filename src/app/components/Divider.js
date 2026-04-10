export default function Divider({ image, content, className, scrollRef }) {
  return (
    <div
      className={`w-full relative pt-10 sm:py-40 md:py-52 text-white flex flex-col bg-center bg-cover md:bg-fixed bg-amber-500 ${className}`}
      style={{
        clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 90%)",
      }}
    >
      <div className={`absolute inset-0 z-0  ${className}`} />

      <div className="relative z-10 px-30">{content}</div>
    </div>
  );
}
