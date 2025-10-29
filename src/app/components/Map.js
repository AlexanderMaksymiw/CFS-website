"use client";
import Image from "next/image";

export default function Location() {
  return (
    <section className="flex flex-col px-4 sm:px-8 lg:px-56 gap-8 pb-10 sm:pb-16 md:pb-20">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-slate-800 pb-4 sm:pb-5">
          Where To Find Us
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[300px] md:h-[400px] overflow-hidden shadow shadow-indigo-200">
          <Image
            src="/images/bmw_and_impreza.jpg"
            alt="Subaru Impreza and BMW"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Map */}
        <div className="relative w-full md:w-1/2 h-[300px] sm:h-[300px] md:h-[400px] overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.7722663358454!2d-3.0629201877035204!3d52.81510861422269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487aafeb1b7a353f%3A0xc61f56e9c4351229!2sLlynclys%20Hall%20Farm%20Shop!5e1!3m2!1sen!2suk!4v1757073250337!5m2!1sen!2suk"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
