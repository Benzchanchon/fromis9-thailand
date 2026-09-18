import type { MemberSummary } from "../../types/content";
import type { FormerMemberProfile } from "../../types/formerMember";
import { InlineArrowLink } from "../ui/InlineArrowLink";
import { PillButton } from "../ui/PillButton";
import styles from "./MemberCard.module.css";

type MemberCardProps = {
  presentation?: "home" | "members";
  mobileSecondaryText?: string;
} & (
  | { member: MemberSummary; variant?: "profile" }
  | { member: FormerMemberProfile; variant: "former" }
);

export function MemberCard(props: MemberCardProps) {
  const { member, presentation = "home", mobileSecondaryText } = props;
  const formerMember = props.variant === "former" ? props.member : null;
  const isMembersPage = presentation === "members";
  const profileHref = `/members/${member.slug}`;
  const presentationClass = isMembersPage ? styles.members : styles.home;

  return (
    <article
      className={`${styles.card} ${presentationClass}`.trim()}
      data-former-member={formerMember?.slug}
    >
      <div className={styles.portraitWrap}>
        <img
          className={styles.portrait}
          src={member.imageSrc}
          alt={member.imageAlt}
          style={
            formerMember
              ? { objectPosition: formerMember.imagePosition }
              : undefined
          }
          loading="lazy"
          decoding="async"
        />
        <span
          className={styles.fruitPlaceholder}
          title="Representative emoji"
          aria-label={`${member.stageName} representative emoji`}
        >
          {member.representativeEmoji}
        </span>
        {!formerMember ? (
          <div className={styles.overlay}>
            <PillButton href={profileHref} variant="overlay">
              View Profile
            </PillButton>
          </div>
        ) : null}
      </div>
      <div className={styles.identity}>
        <h3>
          {member.stageName}
          <span className={styles.inlineEmoji} aria-hidden="true">
            {member.representativeEmoji}
          </span>
        </h3>
        <p className={styles.desktopSecondary}>{member.fullName}</p>
        {formerMember ? (
          <>
            <span className={styles.formerStatus}>Former Member</span>
            <p className={styles.formerBiography} lang="th">
              {formerMember.biographyTh}
            </p>
          </>
        ) : null}
        {mobileSecondaryText ? (
          <p className={styles.mobileSecondary}>{mobileSecondaryText}</p>
        ) : null}
        {isMembersPage && !formerMember ? (
          <div className={styles.profileLink}>
            <InlineArrowLink href={profileHref}>View Profile</InlineArrowLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}
