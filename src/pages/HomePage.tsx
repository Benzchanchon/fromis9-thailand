import { MemberCard } from "../components/cards/MemberCard";
import { NewsCard } from "../components/cards/NewsCard";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { LatestReleasePanel } from "../components/release/LatestReleasePanel";
import { Seo } from "../components/seo/Seo";
import { PillButton } from "../components/ui/PillButton";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  homeHero,
  homeMemberOrder,
  homeSections,
  latestRelease,
} from "../data/home";
import { members } from "../data/members";
import { getNewsDetailPath, homeLatestNewsItems } from "../data/news";
import styles from "./HomePage.module.css";

const homeMembers = homeMemberOrder.flatMap((slug) => {
  const member = members.find((item) => item.slug === slug);
  return member ? [member] : [];
});

export function HomePage() {
  return (
    <>
      <Seo
        title="fromis_9 Thailand | แฟนไซต์และข้อมูล fromis_9"
        description={homeHero.description}
        image={homeHero.imageSrc}
      />
      <Navbar mobileHome />
      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <picture className={styles.heroPicture}>
            <source
              type="image/avif"
              srcSet={homeHero.imageAvifSrcSet}
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet={homeHero.imageWebpSrcSet}
              sizes="100vw"
            />
            <img
              className={styles.heroImage}
              src={homeHero.imageSrc}
              alt={homeHero.imageAlt}
              width={homeHero.imageWidth}
              height={homeHero.imageHeight}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className={styles.heroOverlay} aria-hidden="true" />
          <ContentRail className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{homeHero.eyebrow}</span>
            <h1 id="hero-title">{homeHero.title}</h1>
            <p>{homeHero.description}</p>
            <div className={styles.heroActions}>
              <PillButton href={homeHero.buttonLink} showArrow>
                {homeHero.buttonText}
              </PillButton>
              <div className={styles.mobileHeroAction}>
                <PillButton
                  href="#latest-news"
                  variant="heroSecondary"
                >
                  {homeSections.newsTitle}
                </PillButton>
              </div>
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
                className={styles.homeSectionHeading}
              />
            </div>
            <div className={styles.newsGrid}>
              {homeLatestNewsItems.map((item) => (
                <NewsCard
                  item={item}
                  href={getNewsDetailPath(item.slug)}
                  presentation="home"
                  key={item.slug}
                />
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
                className={styles.homeSectionHeading}
              />
            </div>
            <div className={styles.membersGrid}>
              {homeMembers.map((member) => (
                <MemberCard
                  member={member}
                  mobileSecondaryText={member.koreanName}
                  key={member.slug}
                />
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
                className={styles.homeSectionHeading}
              />
            </div>
            <LatestReleasePanel release={latestRelease} />
          </ContentRail>
        </section>
      </main>
      <RainbowVitaminStrip mobileHome />
      <Footer mobileHome />
    </>
  );
}
