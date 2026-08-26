import { MemberCard } from "../components/cards/MemberCard";
import { NewsCard } from "../components/cards/NewsCard";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { LatestReleasePanel } from "../components/release/LatestReleasePanel";
import { AssetPlaceholder } from "../components/ui/AssetPlaceholder";
import { PillButton } from "../components/ui/PillButton";
import { SectionHeading } from "../components/ui/SectionHeading";
import { latestRelease, newsItems } from "../data/home";
import { members } from "../data/members";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <AssetPlaceholder
            className={styles.heroImage}
            label="Home hero photography"
            tone="dark"
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <ContentRail className={styles.heroContent}>
            <span className={styles.heroEyebrow}>FROMIS_9 THAILAND</span>
            <h1 id="hero-title">fromis_9 Thailand</h1>
            <p>Hero description pending approved Figma content export.</p>
            <div className={styles.heroActions}>
              <PillButton href="#members" showArrow>
                Meet the Members
              </PillButton>
              <PillButton href="#latest-news" variant="heroSecondary">
                Latest Updates
              </PillButton>
            </div>
          </ContentRail>
        </section>

        <section
          className={`${styles.section} ${styles.newsSection}`}
          id="latest-news"
          aria-labelledby="news-heading"
        >
          <ContentRail>
            <div id="news-heading">
              <SectionHeading
                title="Latest News & Updates"
                align="left"
                showRule
              />
            </div>
            <div className={styles.newsGrid}>
              {newsItems.map((item) => (
                <NewsCard item={item} key={item.id} />
              ))}
            </div>
          </ContentRail>
        </section>

        <section
          className={`${styles.section} ${styles.membersSection}`}
          id="members"
          aria-labelledby="members-heading"
        >
          <ContentRail>
            <div id="members-heading">
              <SectionHeading title="Meet fromis_9" align="left" showRule />
            </div>
            <div className={styles.membersGrid}>
              {members.map((member) => (
                <MemberCard member={member} key={member.slug} />
              ))}
            </div>
          </ContentRail>
        </section>

        <section
          className={`${styles.section} ${styles.releaseSection}`}
          data-asset-status="release-gradient-stops-pending"
          aria-labelledby="release-heading"
        >
          <ContentRail>
            <div id="release-heading">
              <SectionHeading title="Latest Release" align="left" showRule />
            </div>
            <LatestReleasePanel release={latestRelease} />
          </ContentRail>
        </section>
      </main>
      <RainbowVitaminStrip />
      <Footer />
    </>
  );
}
