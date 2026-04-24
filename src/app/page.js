import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";
import Header from "./components/Header";
import HeroOverlay from "./components/heroOverlay";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Map from "./components/Map";
import Info from "./components/Info";
import FullBackground from "./components/Full Background";
import SectionBG from "./components/SectionBG";
import ItemGridServer from "./components/ItemGridServer";
import Info2 from "./components/Info2";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="header">
      <Header />

      <FullBackground>
        <HeroOverlay />
      </FullBackground>
      <Info />
      <ItemGridServer />
      <Info2 />
      <Map />
      <Footer />
    </div>
  );
}
