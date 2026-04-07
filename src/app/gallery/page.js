import Image from "next/image";
import SubPageHero from "../components/SubPageHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import ImageCard from "../components/ImageCard";
import Featured from "../components/Featured";
import { SocialIcon } from "react-social-icons";

export default function Gallery() {
  return (
    <div>
      <Header />
      <SubPageHero title="CAR GALLERY" images={["/images/bmw-m2-drive.jpg"]} />

      <section>
        <div className="relative flex flex-col md:flex-row  md:items-start mt-20 gap-10">
          <div className="space-y-4  w-full md:w-200 md:h-170">
            <h1 className="text-4xl max-w-90 lg:max-w-110 mx-auto mt-25 sm:text-5xl lg:text-5xl font-bold  text-slate-900 text-center md:text-left">
              SHARE YOUR PHOTOS{" "}
            </h1>
            <p className="text-lg  leading-7 sm:text-xl lg:text-2xl mx-auto text-slate-900 max-w-110 font-semibold text-center md:text-left tracking-tight">
              Come see classic cars, supercars, JDM, VAG cars, passion projects
              and get inspired by their owners.
            </p>

            <p className="text-xl sm:text-xl leading-7   text-slate-900 mx-auto tracking-tight max-w-110 text-center md:text-left">
              We feel incredibly lucky to have so many talented photographers
              supporting Car Farm Social not just the professionals, but also
              the passionate amateurs, and that includes you. We love seeing the
              shots you capture at our events, and many of them get featured
              across our social channels.
            </p>
            <div className="space-x-3 mt-10 pl-30 ">
              <SocialIcon
                bgColor="#ffffff"
                fgColor="#0f172a"
                url="https://www.facebook.com/groups/3764447677206661"
              />
              <SocialIcon
                bgColor="#ffffff"
                fgColor="#0f172a"
                url="https://www.instagram.com/carfarmsocial/"
              />
            </div>
          </div>

          <div className="relative w-full md:w-240 h-100 sm:h-87.5 md:h-200 overflow-hidden rounded-xl">
            <Image
              src="/images/datsun-240z.jpg"
              alt="datsun"
              fill
              className="object-cover object-[75%] scale-110"
            />
          </div>
        </div>
      </section>

      <section className="w-full justify-center mx-auto px-4 sm:px-6 md:px-30 py-10">
        <Featured />
      </section>
      <Footer />
    </div>
  );
}
