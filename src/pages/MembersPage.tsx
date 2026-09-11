import { MemberCard } from "../components/cards/MemberCard";
import { PageHeaderDecoration } from "../components/editorial/PageHeaderDecoration";
import { ContentRail } from "../components/layout/ContentRail";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { RainbowVitaminStrip } from "../components/layout/RainbowVitaminStrip";
import { SectionHeading } from "../components/ui/SectionHeading";
import { members } from "../data/members";
import styles from "./MembersPage.module.css";

export function MembersPage() {
  return (
    <>
      <Navbar activeRoute="members" />
      <main>
        <section className={styles.header} aria-labelledby="members-page-heading">
          <ContentRail className={styles.headerRail}>
            <div className={styles.headerHeading}>
              <PageHeaderDecoration variant="members" side="left" />
              <SectionHeading
                title="Members"
                subtitle="ทำความรู้จักสมาชิกทั้ง 5 คนของ fromis_9 พร้อมประวัติและข้อมูลต่างๆ"
                align="center"
                level={1}
                headingId="members-page-heading"
              />
              <PageHeaderDecoration variant="members" side="right" />
            </div>
          </ContentRail>
        </section>

        <section className={styles.membersSection} aria-label="Member profiles">
          <ContentRail>
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
      </main>
      <RainbowVitaminStrip />
      <Footer />
    </>
  );
}
