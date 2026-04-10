import React from "react";

const WeeklyWinners = ({ winners, urlFor }) => {
  const first = winners?.find((w) => w.position?.toLowerCase().includes("1"));
  const second = winners?.find((w) => w.position?.toLowerCase().includes("2"));
  const third = winners?.find((w) => w.position?.toLowerCase().includes("3"));

  const podium = [second, first, third].filter(Boolean);

  if (podium.length === 0) return null;

  return (
    <section className="bg-slate-950 py-24 overflow-hidden">
      <div className="max-w-full mx-auto px-6 md:px-20 lg:px-30 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter italic uppercase">
            Weekly <br />
            <span className="not-italic text-amber-500">Show Winners</span>
          </h2>
          <div className="h-1 w-32 bg-slate-800 mt-8 relative">
            <div className="absolute inset-0 w-1/3 bg-amber-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-end">
          {podium.map((winner) => {
            const isFirst = winner.position?.toLowerCase().includes("1");

            return (
              <div
                key={winner._id}
                className={`group relative flex flex-col ${
                  isFirst ? "order-first md:order-0 z-10" : "order-0"
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-slate-900 border-b-4 transition-all duration-500 shadow-2xl ${
                    isFirst
                      ? "border-amber-500 scale-100 md:scale-105"
                      : "border-slate-800 hover:border-slate-600"
                  }`}
                >
                  <div className="relative w-full aspect-4/5">
                    <img
                      src={urlFor(winner.thumbnails[0]).width(1000).url()}
                      alt={winner.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-2 right-4 pointer-events-none">
                      <span
                        className={`text-7xl font-black italic tracking-tighter opacity-10 ${
                          isFirst ? "text-amber-500" : "text-white"
                        }`}
                      >
                        {winner.position?.toLowerCase().includes("1")
                          ? "01"
                          : winner.position?.toLowerCase().includes("2")
                            ? "02"
                            : "03"}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 bg-slate-900">
                    <p
                      className={`font-black italic uppercase tracking-tighter mb-2 ${
                        isFirst
                          ? "text-amber-500 text-lg"
                          : "text-slate-500 text-xs"
                      }`}
                    >
                      {winner.position} Place
                    </p>
                    <h3
                      className={`font-black uppercase tracking-tighter leading-none text-white wrap-break-word ${
                        isFirst ? "text-3xl" : "text-xl"
                      }`}
                    >
                      {winner.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="h-px w-4 bg-slate-700"></span>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                        CFS Paddock Winners
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeeklyWinners;
