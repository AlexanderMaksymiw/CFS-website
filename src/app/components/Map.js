"use client";
import Image from "next/image";

export default function Location() {
  return (
    <section className="flex flex-col px-4 sm:px-8 lg:px-30 gap-8 pb-10  bg-amber-400">
      <div>
        <h3 className="text-5xl sm:text-4xl md:text-5xl font-bold mt-20 tracking-tight">
          WE'LL SEE YOU HERE ;)
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="relative w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-3xl font-bold tracking-tight pb-5">ADDRESS:</p>

          <p className="text-lg font-semibold">
            Llynclys Hall Farm (Pumpkin Farm)
            <br />
            Llynclys
            <br />
            Oswestry
            <br />
            SY10 8AD
          </p>

          <p className="text-3xl font-bold pt-6 tracking-tight">WHAT3WORDS:</p>

          <p className="text-lg font-semibold font-mono">hoops.tramps.movies</p>
        </div>

        <div className="relative w-full md:w-4/5 h-100 overflow-hidden shadow-lg rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.7722663358454!2d-3.0629201877035204!3d52.81510861422269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487aafeb1b7a353f%3A0xc61f56e9c4351229!2sLlynclys%20Hall%20Farm%20Shop!5e1!3m2!1sen!2suk!4v1757073250337!5m2!1sen!2suk"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
