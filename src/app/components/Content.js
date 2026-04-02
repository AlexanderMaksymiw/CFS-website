"use client";

export default function Content() {
  return (
    <div className="h-125 rounded-xl relative bg-black">
      <img
        src="/images/llynclys-hall-farm-shop-dog-furiendly.jpg"
        className="rounded-xl w-full h-full opacity-70"
        alt=""
      />
      <div className="absolute top-20 left-20 text-white max-w-lg space-y-5">
        <h2 className=" text-white text-6xl font-bold tracking-tight">
          LLYNCLYS HALL FARM
        </h2>
        <p className="  text-white max-w-xl font-bold text-lg ">
          Llynclys Hall Farm grows literally thousands of pumpkins every year,
          so many in fact that it's renowned as the largest pumpkin producers in
          Shropshire. Locals from Oswestry call them the pumpkin farm.
        </p>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          Discover Llynclys Hall Farm
        </button>
      </div>
    </div>
  );
}
