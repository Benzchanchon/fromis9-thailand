import type { MemberSummary } from "../../types/content";
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
        <img
          className={styles.portrait}
          src={member.imageSrc}
          alt={member.imageAlt}
        />
        <span
          className={styles.fruitPlaceholder}
          title="Representative emoji"
          aria-label={`${member.stageName} representative emoji`}
        >
          {member.representativeEmoji}
        </span>
        <div className={styles.overlay}>
          <PillButton href={profileHref} variant="overlay">
            View Profile
          </PillButton>
        </div>
      </div>
      <div className={styles.identity}>
        <h3>{member.stageName}</h3>
        <p>{member.fullName}</p>
        {isMembersPage ? (
          <div className={styles.profileLink}>
            <InlineArrowLink href={profileHref}>View Profile</InlineArrowLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}
