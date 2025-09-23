"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Address from "./Address";

export default function Location() {
  return (
    <div className="flex flex-col px-55 gap-8 pb-20">
      <div className="flex-1">
        <h2 className="text-5xl text-center pt-15 pb-5 text-slate-800 font-bold">Where To Find Us</h2>
      </div>
      <div className="flex gap-4">
        <div className="flex-2 relative" style={{ paddingBottom: "400" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.7722663358454!2d-3.0629201877035204!3d52.81510861422269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487aafeb1b7a353f%3A0xc61f56e9c4351229!2sLlynclys%20Hall%20Farm%20Shop!5e1!3m2!1sen!2suk!4v1757073250337!5m2!1sen!2suk"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" relative flex-2 h-[400px] overflow-hidden ">
          <Image
            src="/images/bmw_and_impreza.jpg"
            alt="Subaru Impreza and BMW"
            fill
            style={{ objectFit: 'cover'}}
          />
        </div>
      </div>
    </div>
  );
}
