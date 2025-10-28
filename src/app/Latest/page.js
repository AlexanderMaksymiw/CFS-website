import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import ArticleCardWrapper from "../components/ArticleCardWrapper";
import SubPageHero from "../components/SubPageHero";

export default function Latest() {
  return (
    <main>
      <SubPageHero title="Latest News" images={["/images/skoda-drive.jpg"]} />


      <div className="lg:px-56 px-4 pt-20 pb-20">
      <ArticleCardWrapper />
      </div>
      <Footer />
    </main>
  );
}
