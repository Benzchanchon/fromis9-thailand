import { EditorialPageHeader } from "../components/editorial/EditorialPageHeader";
import { HistoryTimeline, TimelineRoots } from "../components/history/HistoryTimeline";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { Seo } from "../components/seo/Seo";
import { SectionHeading } from "../components/ui/SectionHeading";
import { historyEntries, historyPageContent, getCurrentHistoryEntry } from "../data/history";
import styles from "./HistoryPage.module.css";

export function HistoryPage() {
  const currentEntry = getCurrentHistoryEntry();
  return (
    <>
      <Seo title="History | fromis_9 Thailand" description={historyPageContent.introduction} image={currentEntry?.image?.src} />
      <Navbar activeRoute="history" mobileHome />
      <main>
        <section className={styles.pageHeader} aria-labelledby="history-page-heading">
          <ContentRail className={styles.centeredRail}>
            <EditorialPageHeader eyebrow={historyPageContent.eyebrow} title={historyPageContent.title} subtitle={historyPageContent.introduction} headingId="history-page-heading" decorationVariant="history" />
          </ContentRail>
        </section>
        <section className={styles.timelineSection} aria-labelledby="history-timeline-heading">
          <ContentRail>
            <SectionHeading title={historyPageContent.timelineTitle} subtitle={historyPageContent.timelineIntroduction} align="center" headingId="history-timeline-heading" />
            <TimelineRoots />
            <HistoryTimeline entries={historyEntries} />
          </ContentRail>
        </section>
      </main>
      <RainbowVitaminStrip mobileHome />
      <Footer mobileHome />
    </>
  );
}
