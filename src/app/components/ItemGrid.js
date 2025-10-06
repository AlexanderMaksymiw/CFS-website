// ItemGrid.jsx
"use client";
import Image from "next/image";

const articles = [
  {
    id: 1,
    image: "/images/golf-orange.jpg",
    title: "German Night: A Social Celebration of German Cars",
    date: "07/08/2025",
  },
  {
    id: 2,
    image: "/images/hero/volvo_drive.jpg",
    title: "Explore the Elan Valley: Group Drive Out",
    date: "03/07/2025",
  },
  {
    id: 3,
    image: "/images/evo_back.jpg",
    title: "JDM Battle: Trophy for the Top Japanese Car",
    date: "10/07/2025",
  },
  {
    id: 4,
    image: "/images/red-kite-event/red-fords.jpg",
    title: "Red Kite Café Drive-Out Adventure",
    date: "03/08/2025",
  },
];

export default function ItemGrid() {
  return (
    <div className="w-full ">
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-slate-800 text-left mb-8">
        Latest Events
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6 w-full">
        {/* Left: featured article */}
        <div className="flex flex-col h-[700px]  cursor-pointer overflow-hidden">
          {/* Image half */}
          <div className="relative overflow-hidden h-[450px] w-full">
            <Image
              src="/images/hero/Escort_green.jpg"
              alt="Featured Article"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Text half */}
          <div className="pt-5 flex flex-col justify-center">
            <h3 className="font-semibold text-slate-400">11/09/2025</h3>
            <h3 className="text-3xl font-bold text-gray-800 mb-2 cursor-pointer">
              Classic Car Night: A night to celebrate everything pre-1990 with a
              trophy for the best car of the night.
            </h3>
          </div>
        </div>
        {/* Right column: small articles */}
        <div className="grid grid-cols-2 grid-rows-2 overflow-hidden gap-5">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col h-[350px] cursor-pointer">
              {/* Image half */}
              <div className="relative h-[250px] cursor-pointer overflow-hidden w-full">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300 "
                />
              </div>
              {/* Text half */}

              <div className="flex-col pt-2 items-center h-[80px] justify-center  ">
                <h3 className="font-semibold text-slate-400 cursor-pointer">
                  {article.date}
                </h3>
                <h3 className="text-xl text-slate-800 font-bold line-clamp-2 cursor-pointer">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <button className="btn">Latest</button>
      </div>
    </div>
  );
}
