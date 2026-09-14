import type { FormerMember } from "../../types/history";
import styles from "./FormerMemberCard.module.css";

export function FormerMemberCard({ member }: { member: FormerMember }) {
  return (
    <article className={styles.card} data-former-member={member.slug} aria-labelledby={`${member.id}-heading`}>
      <figure className={styles.portrait}>
        <img src={member.image.src} alt={member.image.alt} style={{ objectPosition: member.image.objectPosition }} loading="lazy" decoding="async" />
        <figcaption><a href={member.image.sourceUrl} target="_blank" rel="noopener noreferrer">{member.image.credit}<span aria-hidden="true"> ↗</span></a></figcaption>
      </figure>
      <div className={styles.identity}>
        <span className={styles.years}>{member.yearsActive}</span>
        <h3 id={`${member.id}-heading`}>{member.name}</h3>
        <p className={styles.koreanName} lang="ko">{member.koreanName}</p>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.biography}>{member.biographyTh}</p>
        <a className={styles.source} href={member.sourceUrl} target="_blank" rel="noopener noreferrer">Kpop Wiki<span aria-hidden="true"> ↗</span></a>
      </div>
    </article>
  );
}
