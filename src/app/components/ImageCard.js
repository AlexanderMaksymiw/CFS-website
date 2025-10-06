import Image from "next/image";

export default function ImageCard({ image }) {
  return (
    <div className="px-32">
      <div className=" pb-20">

        <div className="relative h-[1000px]">
          <Image
            src={image}
            alt="Card image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
