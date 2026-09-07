import { PerformanceCard } from "../components/cards/PerformanceCard";
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
  featuredPerformance,
  loadMoreLabel,
  performanceFilters,
  performanceItems,
  performancesPageContent,
} from "../data/performances";
import styles from "./PerformancesPage.module.css";

export function PerformancesPage() {
  return (
    <>
      <Navbar activeRoute="performances" />
      <main>
        <section
          className={styles.pageHeader}
          aria-labelledby="performances-page-heading"
        >
          <ContentRail className={styles.centeredRail}>
            <EditorialPageHeader
              eyebrow={performancesPageContent.eyebrow}
              title={performancesPageContent.title}
              subtitle={performancesPageContent.subtitle}
              headingId="performances-page-heading"
            />
          </ContentRail>
        </section>

        <section className={styles.filterSection} aria-label="Filters">
          <ContentRail className={styles.centeredRail}>
            <PillFilterBar
              options={performanceFilters}
              ariaLabel="Performance filters"
            />
          </ContentRail>
        </section>

        <section
          className={styles.featuredSection}
          aria-label="Featured performance"
        >
          <ContentRail>
            <FeaturedEditorialCard item={featuredPerformance} />
          </ContentRail>
        </section>

        <section
          className={styles.archiveHeading}
          aria-labelledby="all-performances-heading"
        >
          <ContentRail className={styles.centeredRail}>
            <SectionHeading
              eyebrow={performancesPageContent.archiveEyebrow}
              title={performancesPageContent.archiveTitle}
              align="center"
              showRule
              headingId="all-performances-heading"
            />
          </ContentRail>
        </section>

        <section className={styles.gridSection} aria-label="Performance archive">
          <ContentRail>
            <div className={styles.performanceGrid}>
              {performanceItems.map((item) => (
                <PerformanceCard item={item} key={item.id} />
              ))}
            </div>
          </ContentRail>
        </section>

        <section className={styles.loadMoreSection} aria-label="More performances">
          <LoadMoreButton label={loadMoreLabel} disabled />
        </section>
      </main>
      <RainbowVitaminStrip />
      <Footer />
    </>
  );
}
