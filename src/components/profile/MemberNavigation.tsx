import { Link } from "react-router-dom";
import type { MemberSummary } from "../../types/content";
import styles from "./MemberNavigation.module.css";

export function MemberNavigation({ previous, next }: { previous: MemberSummary; next: MemberSummary }) {
  return (
    <nav className={styles.navigation} aria-label="Member profiles">
      <Link to={`/members/${previous.slug}`} className={styles.item}>
        <img className={styles.avatar} src={previous.imageSrc} alt="" />
        <span><small>PREVIOUS MEMBER</small><strong>← {previous.stageName}</strong></span>
      </Link>
      <Link to={`/members/${next.slug}`} className={`${styles.item} ${styles.next}`}>
        <span><small>NEXT MEMBER</small><strong>{next.stageName} →</strong></span>
        <img className={styles.avatar} src={next.imageSrc} alt="" />
      </Link>
    </nav>
  );
}
