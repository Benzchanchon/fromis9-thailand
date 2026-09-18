import { MemberCard } from "../components/cards/MemberCard";
import { PageHeaderDecoration } from "../components/editorial/PageHeaderDecoration";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Seo } from "../components/seo/Seo";
import { homeHero } from "../data/home";
import { members } from "../data/members";
import { formerMembers, formerMembersSection } from "../data/formerMembers";
import styles from "./MembersPage.module.css";

const membersPageDescription =
  "ทำความรู้จักสมาชิกทั้ง 5 คนของ fromis_9 พร้อมประวัติและข้อมูลต่างๆ";

export function MembersPage() {
  return (
    <>
      <Seo
        title="Members | fromis_9 Thailand"
        description={membersPageDescription}
        image={homeHero.imageSrc}
      />
      <Navbar activeRoute="members" mobileHome />
      <main>
        <section className={styles.header} aria-labelledby="members-page-heading">
          <ContentRail className={styles.headerRail}>
            <div className={styles.headerHeading}>
              <PageHeaderDecoration variant="members" side="left" />
              <SectionHeading
                title="Members"
                subtitle={membersPageDescription}
                align="center"
                level={1}
                headingId="members-page-heading"
              />
              <PageHeaderDecoration variant="members" side="right" />
            </div>
          </ContentRail>
        </section>

        <section className={styles.membersSection} aria-labelledby="current-members-heading">
          <ContentRail>
            <SectionHeading
              title="Current Members"
              align="center"
              headingId="current-members-heading"
              className={styles.sectionHeading}
            />
            <div className={styles.membersGrid}>
              {members.map((member) => (
                <MemberCard
                  member={member}
                  presentation="members"
                  key={member.slug}
                />
              ))}
            </div>
          </ContentRail>
        </section>

        <section className={styles.formerSection} aria-labelledby="former-members-heading">
          <ContentRail>
            <SectionHeading
              title={formerMembersSection.title}
              eyebrow={formerMembersSection.eyebrow}
              subtitle={formerMembersSection.introduction}
              align="center"
              headingId="former-members-heading"
              className={styles.sectionHeading}
            />
            <div className={styles.membersGrid}>
              {formerMembers.map((member) => (
                <MemberCard
                  member={member}
                  variant="former"
                  presentation="members"
                  key={member.slug}
                />
              ))}
            </div>
          </ContentRail>
        </section>
      </main>
      <RainbowVitaminStrip mobileHome />
      <Footer mobileHome />
    </>
  );
}
