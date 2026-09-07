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
} from "../data/news";
import styles from "./NewsPage.module.css";

export function NewsPage() {
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
            />
          </ContentRail>
        </section>

        <section className={styles.filterSection} aria-label="Filters">
          <ContentRail className={styles.centeredRail}>
            <PillFilterBar options={newsFilters} ariaLabel="News filters" />
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
              {newsItems.map((item) => (
                <NewsCard
                  item={item}
                  href={item.slug ? getNewsDetailPath(item.slug) : undefined}
                  key={item.id}
                />
              ))}
            </div>
          </ContentRail>
        </section>

        <section className={styles.loadMoreSection} aria-label="More news">
          <LoadMoreButton label={loadMoreNewsLabel} disabled />
        </section>
      </main>
      <RainbowVitaminStrip />
      <Footer />
    </>
  );
}
