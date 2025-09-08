"use client";
import SubPageHero from "../components/SubPageHero";
import Image from "next/image";
import Video from "../components/Video";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main>
      <SubPageHero title="Our Story" />

      {/* Parent flex container for text and image */}
      <div className="flex flex-col md:flex-row items-start gap-8 px-55 py-20">
        {/* Text block */}
        <div className="md:w-2/3">
          <h2 className="text-slate-700 font-semibold text-4xl mb-8 ">
            The First CFS Meet (August 2021)
          </h2>
          <p className="text-xl leading-8 text-slate-700 mb-8">
            We’re a team of unapologetic car nuts. If it’s got wheels, we’re
            into it. Most days you’ll find us getting our fix—either online,
            under the bonnet, or out on the road. The idea for Car Farm Social
            (CFS) started simple: a small, midweek gathering for local
            enthusiasts.
          </p>
          <p className="text-xl leading-8 text-slate-700 mb-8">
            Luckily, Lynda and Richard at Llynclys Hall Farm, near Oswestry,
            England, offered us the perfect venue, and so the first CFS social
            event was ready to begin.
          </p>
          <p className="text-xl leading-8 text-slate-700">
            It all began on a damp Thursday evening. A single classic Mini
            rolled up—its passengers quietly hoping they wouldn’t be the only
            ones. As the clock ticked toward 6 pm, things looked uncertain.
            Then… A handful of classics appeared. They stayed, and they returned the
            following week, and then again. Without those early supporters, CFS
            would never have grown into what it is today.
          </p>
          <p className="text-xl leading-8 text-slate-700 mt-8">
            Along with a handful of classics these friends showed up and
            returned almost every week! Without them CFS would never have gained
            the massive following it has today.
          </p>
          <h2 className="text-slate-700 font-semibold text-4xl mt-8 ">
            Then this happened..
          </h2>
        </div>

        {/* Image block */}
        <div className="md:w-1/3 flex justify-end">
          <Image
            src="/images/First_Mini.jpg"
            alt="First car at CFS"
            width={360}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
      <div className="px-55 text-xl text-slate-700 ">
        <p>
          Adam only started the event, but it snowballed so fast CFS almost
          crashed. Thankfully Paul and Darren stepped up to save the event and
          it’s now in the hands of an enthusiastic team. We think of CFS as a
          social club first, with cars attached. We’re not primarily driven by
          profit, more by creating community and social value.
        </p>
      </div>
      <Footer />
    </main>
  );
}
