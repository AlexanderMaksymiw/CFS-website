import Footer from "../components/Footer";
import ArticleCardWrapper from "../components/ArticleCardWrapper";
import SubPageHeroNews from "../components/SubPageHeroNews";
import ArticleBannerServer from "@/app/components/ArticleBannerServer";
import { client } from "@/sanity/lib/client";
export default async function Latest() {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    title,
    intro,
    heroImage,
    "slug": slug.current
  }`;
  const posts = await client.fetch(query);
  return (
    <main>
      <SubPageHeroNews
        title="LATEST NEWS"
        category="News"
        images={["/images/skoda-drive.jpg"]}
      />

      <div className="lg:px-30 px-4 pt-10 pb-20">
        <ArticleCardWrapper initialPosts={posts} />
      </div>
      <Footer />
    </main>
  );
}
