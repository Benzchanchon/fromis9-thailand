import { Navigate, useParams } from "react-router-dom";
import { PerformanceCard } from "../components/cards/PerformanceCard";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { MemberNavigation } from "../components/profile/MemberNavigation";
import { ProfileInfoGrid } from "../components/profile/ProfileInfoGrid";
import { AssetPlaceholder } from "../components/ui/AssetPlaceholder";
import { SectionHeading } from "../components/ui/SectionHeading";
import { getMemberBySlug, members } from "../data/members";
import styles from "./MemberProfilePage.module.css";

export function MemberProfilePage() {
  const { slug } = useParams();
  const member = getMemberBySlug(slug);
  if (!member) return <Navigate to="/members" replace />;

  const index = members.indexOf(member);
  const previous = members[(index - 1 + members.length) % members.length];
  const next = members[(index + 1) % members.length];

  return <>
    <Navbar activeRoute="members" />
    <main>
      <section className={styles.hero} aria-labelledby="member-title">
        <ContentRail className={styles.heroGrid}>
          <div className={styles.portraitWrap}>
            <AssetPlaceholder className={styles.portrait} label={`${member.name} profile portrait`} />
            <span className={styles.fruit}>asset</span>
          </div>
          <div className={styles.bio}>
            <span className={styles.eyebrow}>MEMBER PROFILE</span>
            <h1 id="member-title">{member.name}</h1>
            <p>{member.biography}</p>
            <div className={styles.stat}><span>{member.heroStatLabel}</span><strong>{member.heroStatValue}</strong></div>
          </div>
        </ContentRail>
      </section>
      <section className={styles.profile} aria-labelledby="profile-heading">
        <ContentRail>
          <SectionHeading title="Profile" align="center" headingId="profile-heading" />
          <div className={styles.profileGrid}>
            <ProfileInfoGrid facts={member.profileFacts} />
          </div>
        </ContentRail>
      </section>
      <section className={styles.performances} aria-labelledby="performance-heading">
        <ContentRail>
          <SectionHeading title="Featured Performances" align="left" showRule headingId="performance-heading" />
          <div className={styles.performanceGrid}>{member.performances.map((item) => <PerformanceCard item={item} key={item.id} />)}</div>
        </ContentRail>
      </section>
      <ContentRail><MemberNavigation previous={previous} next={next} /></ContentRail>
    </main>
    <RainbowVitaminStrip /><Footer />
  </>;
}
