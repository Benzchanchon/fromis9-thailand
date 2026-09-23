import { Navigate, useParams } from "react-router-dom";
import { useCallback } from "react";
import { useNewsRequest } from "../hooks/useNewsRequest";
import { getNewsDetail } from "../services/newsApi";
import { NewsRequestState } from "../components/editorial/NewsRequestState";
import { NewsCard } from "../components/cards/NewsCard";
import { ArticleBody } from "../components/editorial/ArticleBody";
import { ArticleHeader } from "../components/editorial/ArticleHeader";
import { ArticleNavigation } from "../components/editorial/ArticleNavigation";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Seo } from "../components/seo/Seo";
import {
  getNewsDetailPath,
  getNewsNavigation,
  getRelatedNews,
} from "../utils/news";
import styles from "./NewsDetailPage.module.css";

export function NewsDetailPage() {
  const { slug } = useParams();
  return slug ? (
    <RequestedNewsDetail key={slug} slug={slug} />
  ) : (
    <Navigate to="/news" replace />
  );
}

function RequestedNewsDetail({ slug }: { slug: string }) {
  const load = useCallback(
    (signal: AbortSignal) => getNewsDetail(slug, signal),
    [slug],
  );
  const request = useNewsRequest(load);

  if (request.status !== "success") {
    return <NewsRequestState error={request.status === "error"} retry={request.retry} />;
  }

  const { article, items } = request.data;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const relatedNews = getRelatedNews(items, article);
  const navigation = getNewsNavigation(items, article.slug);
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
      <Seo
        title={`${article.title} | fromis_9 Thailand`}
        description={article.summary}
        type="article"
        image={article.image}
      />
      <Navbar activeRoute="news" mobileHome />
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
              fetchPriority="high"
              decoding="async"
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
      <RainbowVitaminStrip mobileHome />
      <Footer mobileHome />
    </>
  );
}
