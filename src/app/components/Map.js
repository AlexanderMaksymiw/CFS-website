"use client";
import Image from "next/image";

export default function Location() {
  return (
    <section className="flex flex-col gap-4 pb-20 px-6 md:px-30 bg-amber-400">
      {/* Title Block */}
      <div>
        <h3 className="text-6xl md:text-8xl font-black mt-20 tracking-tighter uppercase leading-[0.8] text-black">
          WE'LL SEE <br />
          YOU HERE <span className="text-black/30">;)</span>
        </h3>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start mt-8">
        {/* Left: Text Block */}
        <div className="relative w-full md:w-[40%] flex flex-col pt-2">
          {/* ADDRESS BLOCK */}
          <div className="group">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-black/20"></span>
              Address
            </p>
            <p className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none text-black">
              Llynclys Hall Farm <br />
              <span className="text-xl md:text-2xl font-bold opacity-80">
                Llynclys, Oswestry <br />
                SY10 8AD
              </span>
            </p>
          </div>

          {/* WHAT3WORDS BLOCK */}
          <div className="mt-16">
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/40 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-black/20"></span>
              Navigation
            </p>
            <div className="flex flex-col">
              <p className="text-xl md:text-2xl font-mono font-black tracking-tighter text-black">
                <span className="text-red-600 mr-1">///</span>
                hoops.tramps.movies
              </p>
              <p className="text-[10px] font-bold uppercase mt-1 opacity-50 tracking-widest">
                What3Words
              </p>
            </div>

            {/* Added a Directions Button to tie in the Red accent */}
            <div className="mt-8">
              <button className="bg-slate-900 hover:bg-red-600 text-white font-black py-3 px-6 rounded-xl transition-all cursor-pointer uppercase text-[10px] tracking-[0.2em]">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Scaled Map: Reduced height to 450px and width to 60% */}
        <div className="relative w-full md:w-[60%] h-87.5 md:h-112.5 md:-mt-10 overflow-hidden shadow-2xl rounded-[2.5rem] border-10 border-black/5 transition-transform duration-500 hover:scale-[1.01]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.7722663358454!2d-3.0629201877035204!3d52.81510861422269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487aafeb1b7a353f%3A0xc61f56e9c4351229!2sLlynclys%20Hall%20Farm%20Shop!5e1!3m2!1sen!2suk!4v1757073250337!5m2!1sen!2suk"
            className="absolute top-0 left-0 w-full h-full border-0 grayscale-[0.2] contrast-[1.1] brightness-[1.05]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
