import { MemberCard } from "../components/cards/MemberCard";
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
            <div
              className={styles.headerHeading}
              data-asset-status="members-header-decoration-pending"
            >
              <span
                className={`${styles.decorationPlaceholder} ${styles.decorationLeft}`}
                data-asset-status="figma-export-pending"
                aria-label="Left Members header decoration asset pending"
              >
                asset
              </span>
              <SectionHeading
                title="Members"
                subtitle="Members introduction pending approved Figma content export."
                align="center"
                level={1}
                headingId="members-page-heading"
              />
              <span
                className={`${styles.decorationPlaceholder} ${styles.decorationRight}`}
                data-asset-status="figma-export-pending"
                aria-label="Right Members header decoration asset pending"
              >
                asset
              </span>
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
