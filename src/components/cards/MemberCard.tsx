import type { MemberSummary } from "../../types/content";
import { AssetPlaceholder } from "../ui/AssetPlaceholder";
import { InlineArrowLink } from "../ui/InlineArrowLink";
import { PillButton } from "../ui/PillButton";
import styles from "./MemberCard.module.css";

interface MemberCardProps {
  member: MemberSummary;
  presentation?: "home" | "members";
}

export function MemberCard({
  member,
  presentation = "home",
}: MemberCardProps) {
  const isMembersPage = presentation === "members";
  const profileHref = `/members/${member.slug}`;
  const presentationClass = isMembersPage ? styles.members : "";

  return (
    <article className={`${styles.card} ${presentationClass}`.trim()}>
      <div className={styles.portraitWrap}>
        <AssetPlaceholder className={styles.portrait} label={member.imageLabel} />
        <span
          className={styles.fruitPlaceholder}
          data-asset-status="figma-export-pending"
          title="Fruit badge asset pending"
          aria-label="Fruit badge asset pending"
        >
          asset
        </span>
        <div className={styles.overlay}>
          <PillButton
            href={isMembersPage ? profileHref : undefined}
            variant="overlay"
          >
            View Profile
          </PillButton>
        </div>
      </div>
      <div className={styles.identity}>
        <h3>{member.name}</h3>
        <p>{member.secondary}</p>
        {isMembersPage ? (
          <div className={styles.profileLink}>
            <InlineArrowLink href={profileHref}>View Profile</InlineArrowLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}
