import { Navigate, useParams } from "react-router-dom";
import { NewsCard } from "../components/cards/NewsCard";
import { ArticleBody } from "../components/editorial/ArticleBody";
import { ArticleHeader } from "../components/editorial/ArticleHeader";
import { ArticleNavigation } from "../components/editorial/ArticleNavigation";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  getNewsBySlug,
  getNewsDetailPath,
  getNewsNavigation,
  getRelatedNews,
} from "../data/news";
import styles from "./NewsDetailPage.module.css";

export function NewsDetailPage() {
  const { slug } = useParams();
  const article = getNewsBySlug(slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const relatedNews = getRelatedNews(article);
  const navigation = getNewsNavigation(article.slug);
  const previous = navigation.previous
    ? {
        title: navigation.previous.title,
        href: getNewsDetailPath(navigation.previous.slug),
      }
    : undefined;
  const next = navigation.next
    ? {
        title: navigation.next.title,
        href: getNewsDetailPath(navigation.next.slug),
      }
    : undefined;

  return (
    <>
      <Navbar activeRoute="news" />
      <main>
        <section
          className={styles.headerSection}
          aria-labelledby="article-heading"
        >
          <ContentRail className={styles.centeredRail}>
            <ArticleHeader article={article} headingId="article-heading" />
          </ContentRail>
        </section>

        <section className={styles.heroSection} aria-label="Article hero image">
          <ContentRail>
            <img
              className={styles.heroImage}
              src={article.image}
              alt={article.imageAlt}
            />
          </ContentRail>
        </section>

        <article className={styles.bodySection}>
          <ContentRail>
            <ArticleBody
              paragraphs={article.article}
              sourceName={article.sourceName}
              sourceUrl={article.sourceUrl}
            />
          </ContentRail>
        </article>

        <section
          className={styles.relatedSection}
          aria-labelledby="related-news-heading"
        >
          <ContentRail>
            <div className={styles.relatedHeading}>
              <SectionHeading
                eyebrow="NEWS ARCHIVE"
                title="Related News"
                align="center"
                showRule
                headingId="related-news-heading"
              />
            </div>
            <div className={styles.relatedGrid}>
              {relatedNews.map((item) => (
                <NewsCard
                  item={item}
                  href={getNewsDetailPath(item.slug)}
                  key={item.slug}
                />
              ))}
            </div>
          </ContentRail>
        </section>

        <section className={styles.navigationSection}>
          <ContentRail>
            <ArticleNavigation previous={previous} next={next} />
          </ContentRail>
        </section>
      </main>
      <RainbowVitaminStrip />
      <Footer />
    </>
  );
}
