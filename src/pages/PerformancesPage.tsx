import { useState } from "react";
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
import { Seo } from "../components/seo/Seo";
import {
  featuredPerformance,
  loadMoreLabel,
  performanceFilters,
  performanceItems,
  performancesPageContent,
  sortPerformancesByDateDesc,
} from "../data/performances";
import styles from "./PerformancesPage.module.css";

const initialVisiblePerformanceCount = 6;
const loadMorePerformanceBatchSize = 6;

export function PerformancesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(
    initialVisiblePerformanceCount,
  );
  const filteredPerformances =
    activeFilter === "all"
      ? performanceItems
      : performanceItems.filter(
          (performance) => performance.category === activeFilter,
        );
  const sortedPerformances = sortPerformancesByDateDesc(filteredPerformances);
  const visiblePerformances = sortedPerformances.slice(0, visibleCount);
  const hasMorePerformances = visibleCount < filteredPerformances.length;

  return (
    <>
      <Seo
        title="Performances | fromis_9 Thailand"
        description={performancesPageContent.subtitle}
        image={featuredPerformance.imageSrc}
      />
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
              decorationVariant="performances"
            />
          </ContentRail>
        </section>

        <section className={styles.filterSection} aria-label="Filters">
          <ContentRail className={styles.centeredRail}>
            <PillFilterBar
              options={performanceFilters}
              ariaLabel="Performance filters"
              onChange={(filterId) => {
                setActiveFilter(filterId);
                setVisibleCount(initialVisiblePerformanceCount);
              }}
            />
          </ContentRail>
        </section>

        {activeFilter === "all" ? (
          <section
            className={styles.featuredSection}
            aria-label="Featured performance"
          >
            <ContentRail>
              <FeaturedEditorialCard item={featuredPerformance} />
            </ContentRail>
          </section>
        ) : null}

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
              {visiblePerformances.map((item) => (
                <PerformanceCard item={item} key={item.id} />
              ))}
            </div>
          </ContentRail>
        </section>

        {hasMorePerformances ? (
          <section
            className={styles.loadMoreSection}
            aria-label="More performances"
          >
            <LoadMoreButton
              label={loadMoreLabel}
              onClick={() => {
                setVisibleCount((currentCount) =>
                  Math.min(
                    currentCount + loadMorePerformanceBatchSize,
                    filteredPerformances.length,
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
