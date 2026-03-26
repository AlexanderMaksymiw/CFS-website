import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <section className="relative flex px-30 h-100 ">
      <div className="absolute inset-0  ">
        <img
          src="/images/hero/supra.jpg"
          className="w-full h-full px-30 object-cover "
          alt=""
        />
      </div>

      <div
        className="relative z-10 bg-amber-700 text-white w-[60%] px-12 flex items-center "
        style={{
          clipPath: "polygon(0 0, 50% 0, 90% 100%, 0% 100%)",
        }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Example heading</h2>

          <p>Example description text</p>
        </div>
      </div>
    </section>
  );
}
