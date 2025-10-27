import LatestHeroServer from "../components/LatestHeroServer";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import ArticleCardWrapper from "../components/ArticleCardWrapper";

export default function Latest() {
  return (
    <main>
      <LatestHeroServer />


      <div className="px-56 pt-20 pb-20">
      <ArticleCardWrapper />
      </div>
      <Footer />
    </main>
  );
}
