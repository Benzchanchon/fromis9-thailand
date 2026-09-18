import { HistoryTimeline } from "../components/history/HistoryTimeline";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { Seo } from "../components/seo/Seo";
import { historyEntries, historyPageContent, getCurrentHistoryEntry } from "../data/history";
import styles from "./HistoryPage.module.css";

export function HistoryPage() {
  const currentEntry = getCurrentHistoryEntry();
  return (
    <>
      <Seo title="History | fromis_9 Thailand" description={historyPageContent.introduction} image={currentEntry?.image?.src} />
      <Navbar activeRoute="history" mobileHome />
      <main className={styles.historyPage} lang="th">
        <section className={styles.pageHeader} aria-labelledby="history-page-heading">
          <ContentRail className={styles.heroRail}>
            <div>
              <p className={styles.eyebrow}>{historyPageContent.eyebrow}</p>
              <h1 id="history-page-heading">{historyPageContent.title}<span className={styles.sparkles} aria-hidden="true"><svg viewBox="0 0 64 70"><path d="M40 0Q43 20 60 24Q43 28 40 48Q36 28 20 24Q36 20 40 0" fill="#ffe17c"/><path d="M12 39Q14 51 24 54Q14 57 12 69Q10 57 0 54Q10 51 12 39" fill="#78ced9"/></svg></span></h1>
            </div>
            <p className={styles.introduction}>{historyPageContent.introduction}</p>
          </ContentRail>
          <svg className={styles.flow} viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M-20 80C240-50 470 12 680 44S1070 80 1100 33C1130-10 1030 3 1082 51S1360 95 1460 25" /></svg>
        </section>
        <section className={styles.timelineSection} aria-labelledby="history-timeline-heading">
          <ContentRail>
            <div className={styles.timelineHeading}>
              <h2 id="history-timeline-heading">{historyPageContent.timelineTitle}</h2>
              <span className={styles.headingRule} aria-hidden="true" />
              <span className={styles.dots} aria-hidden="true"><i /><i /><i /></span>
            </div>
            <HistoryTimeline entries={historyEntries} />
          </ContentRail>
        </section>
      </main>
      <RainbowVitaminStrip mobileHome />
      <Footer mobileHome />
    </>
  );
}
