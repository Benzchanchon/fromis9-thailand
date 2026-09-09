import { Navigate, useParams } from "react-router-dom";
import { PerformanceCard } from "../components/cards/PerformanceCard";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { MemberNavigation } from "../components/profile/MemberNavigation";
import { ProfileInfoGrid } from "../components/profile/ProfileInfoGrid";
import { SectionHeading } from "../components/ui/SectionHeading";
import {
  getMemberBySlug,
  getMemberProfileFacts,
  members,
} from "../data/members";
import { getFeaturedPerformancesByMember } from "../data/performances";
import styles from "./MemberProfilePage.module.css";

export function MemberProfilePage() {
  const { slug } = useParams();
  const member = getMemberBySlug(slug);
  if (!member) return <Navigate to="/members" replace />;

  const index = members.indexOf(member);
  const previous = members[(index - 1 + members.length) % members.length];
  const next = members[(index + 1) % members.length];
  const profileFacts = getMemberProfileFacts(member);
  const featuredPerformances = getFeaturedPerformancesByMember(member.slug);

  return <>
    <Navbar activeRoute="members" />
    <main>
      <section className={styles.hero} aria-labelledby="member-title">
        <ContentRail className={styles.heroGrid}>
          <div className={styles.portraitWrap}>
            <img
              className={styles.portrait}
              src={member.imageSrc}
              alt={member.imageAlt}
            />
            <span
              className={styles.fruit}
              aria-label={`${member.stageName} representative emoji`}
            >
              {member.representativeEmoji}
            </span>
          </div>
          <div className={styles.bio}>
            <span className={styles.eyebrow}>MEMBER PROFILE</span>
            <h1 id="member-title">{member.stageName}</h1>
            <p>{member.biography}</p>
            <div className={styles.stat}>
              <span>POSITION</span>
              <strong>{member.position}</strong>
            </div>
          </div>
        </ContentRail>
      </section>
      <section className={styles.profile} aria-labelledby="profile-heading">
        <ContentRail>
          <SectionHeading title="Profile" align="center" headingId="profile-heading" />
          <div className={styles.profileGrid}>
            <ProfileInfoGrid facts={profileFacts} />
          </div>
        </ContentRail>
      </section>
      <section className={styles.performances} aria-labelledby="performance-heading">
        <ContentRail>
          <SectionHeading title="Featured Performances" align="left" showRule headingId="performance-heading" />
          <div className={styles.performanceGrid}>{featuredPerformances.map((item) => <PerformanceCard item={item} key={item.id} />)}</div>
        </ContentRail>
      </section>
      <ContentRail><MemberNavigation previous={previous} next={next} /></ContentRail>
    </main>
    <RainbowVitaminStrip /><Footer />
  </>;
}
