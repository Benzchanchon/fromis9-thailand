import { MemberCard } from "../components/cards/MemberCard";
import { NewsCard } from "../components/cards/NewsCard";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { LatestReleasePanel } from "../components/release/LatestReleasePanel";
import { PillButton } from "../components/ui/PillButton";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  homeHero,
  homeMemberOrder,
  homeSections,
  latestRelease,
  newsItems,
} from "../data/home";
import { members } from "../data/members";
import styles from "./HomePage.module.css";

const homeMembers = homeMemberOrder.flatMap((slug) => {
  const member = members.find((item) => item.slug === slug);
  return member ? [member] : [];
});

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <img
            className={styles.heroImage}
            src={homeHero.imageSrc}
            alt={homeHero.imageAlt}
          />
          <div className={styles.heroOverlay} aria-hidden="true" />
          <ContentRail className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{homeHero.eyebrow}</span>
            <h1 id="hero-title">{homeHero.title}</h1>
            <p>{homeHero.description}</p>
            <div className={styles.heroActions}>
              <PillButton href={homeHero.buttonLink} showArrow>
                {homeHero.buttonText}
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
                title={homeSections.newsTitle}
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
              <SectionHeading
                title={homeSections.membersTitle}
                subtitle={homeSections.membersDescription ?? undefined}
                align="left"
                showRule
              />
            </div>
            <div className={styles.membersGrid}>
              {homeMembers.map((member) => (
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
              <SectionHeading
                title={homeSections.releaseTitle}
                align="left"
                showRule
              />
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
