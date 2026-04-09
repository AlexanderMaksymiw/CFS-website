import Footer from "../components/Footer";
import ArticleCardWrapper from "../components/ArticleCardWrapper";
import SubPageHeroNews from "../components/SubPageHeroNews";
import ArticleBannerServer from "@/app/components/ArticleBannerServer";
export default function Latest() {
  return (
    <main>
      <SubPageHeroNews
        title="LATEST NEWS"
        category="News"
        images={["/images/skoda-drive.jpg"]}
      />

      <div className="lg:px-30 px-4 pt-10 pb-20">
        <ArticleCardWrapper />
      </div>
      <Footer />
    </main>
  );
}
