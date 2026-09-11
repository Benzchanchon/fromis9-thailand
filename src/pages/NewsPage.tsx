import { useState } from "react";
import { NewsCard } from "../components/cards/NewsCard";
import { EditorialPageHeader } from "../components/editorial/EditorialPageHeader";
import { FeaturedEditorialCard } from "../components/editorial/FeaturedEditorialCard";
import { LoadMoreButton } from "../components/editorial/LoadMoreButton";
import { PillFilterBar } from "../components/editorial/PillFilterBar";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  featuredNews,
  getNewsDetailPath,
  loadMoreNewsLabel,
  newsFilters,
  newsItems,
  newsPageContent,
  sortNewsByDateDesc,
} from "../data/news";
import styles from "./NewsPage.module.css";

const initialVisibleNewsCount = 6;
const loadMoreNewsBatchSize = 6;

export function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(initialVisibleNewsCount);
  const filteredNews =
    activeFilter === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === activeFilter);
  const sortedNews = sortNewsByDateDesc(filteredNews);
  const visibleNews = sortedNews.slice(0, visibleCount);
  const hasMoreNews = visibleCount < filteredNews.length;

  return (
    <>
      <Navbar activeRoute="news" />
      <main>
        <section
          className={styles.pageHeader}
          aria-labelledby="news-page-heading"
        >
          <ContentRail className={styles.centeredRail}>
            <EditorialPageHeader
              eyebrow={newsPageContent.eyebrow}
              title={newsPageContent.title}
              subtitle={newsPageContent.subtitle}
              headingId="news-page-heading"
              decorationVariant="news"
            />
          </ContentRail>
        </section>

        <section className={styles.filterSection} aria-label="Filters">
          <ContentRail className={styles.centeredRail}>
            <PillFilterBar
              options={newsFilters}
              ariaLabel="News filters"
              onChange={(filterId) => {
                setActiveFilter(filterId);
                setVisibleCount(initialVisibleNewsCount);
              }}
            />
          </ContentRail>
        </section>

        <section className={styles.featuredSection} aria-label="Featured news">
          <ContentRail>
            <FeaturedEditorialCard item={featuredNews} />
          </ContentRail>
        </section>

        <section
          className={styles.archiveHeading}
          aria-labelledby="latest-news-heading"
        >
          <ContentRail className={styles.centeredRail}>
            <SectionHeading
              eyebrow={newsPageContent.archiveEyebrow}
              title={newsPageContent.archiveTitle}
              align="center"
              showRule
              headingId="latest-news-heading"
            />
          </ContentRail>
        </section>

        <section className={styles.gridSection} aria-label="Latest news archive">
          <ContentRail>
            <div className={styles.newsGrid}>
              {visibleNews.map((item) => (
                <NewsCard
                  item={item}
                  href={getNewsDetailPath(item.slug)}
                  key={item.slug}
                />
              ))}
            </div>
          </ContentRail>
        </section>

        {hasMoreNews ? (
          <section className={styles.loadMoreSection} aria-label="More news">
            <LoadMoreButton
              label={loadMoreNewsLabel}
              onClick={() => {
                setVisibleCount((currentCount) =>
                  Math.min(
                    currentCount + loadMoreNewsBatchSize,
                    filteredNews.length,
                  ),
                );
              }}
            />
          </section>
        ) : null}
      </main>
      <RainbowVitaminStrip />
      <Footer />
    </>
  );
}
