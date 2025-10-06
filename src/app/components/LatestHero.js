"use client";
import Image from "next/image";
import Header from "../components/Header";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function SubPageHero({
  title,
  image,
  articleTitle,
  articleIntro,
}) {
  //default images if none are passed as props
  const defaultImages = ["/images/Ferrari Hero 2.jpg", "/images/M3.jpg"];

  //use props if provided, otherwise fallback to defaults
  const hero = image && image.length > 0 ? image : defaultImages;

  return (
    <div>
      <Header />
      <div className=" h-[600px] flex ">
        <div className="flex-3 relative bg-slate-800">
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-46">
            <h3 className="text-white text-md pb-4">Latest</h3>
            <h2 className="text-white text-5xl pb-4">{articleTitle}</h2>
            <h3 className="text-white text-md text-md max-w-lg">
              {articleIntro}
            </h3>
            <div className="pt-5">
              <button className=" bg-amber-300 text-slate-800 hover:bg-amber-400 cursor-pointer p-2 font-semibold text-sm">
               Find out more
              </button>
            </div>
          </div>
        </div>
        <div className="flex-4 relative">
          <Image
            src={hero[0]}
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
