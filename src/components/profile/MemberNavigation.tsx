import { Link } from "react-router-dom";
import type { MemberSummary } from "../../types/content";
import styles from "./MemberNavigation.module.css";

export function MemberNavigation({
  previous,
  next,
}: {
  previous: MemberSummary;
  next: MemberSummary;
}) {
  return (
    <nav className={styles.navigation} aria-label="Member profiles">
      <Link
        to={`/members/${previous.slug}`}
        className={`${styles.item} ${styles.previous}`}
      >
        <img className={styles.avatar} src={previous.imageSrc} alt="" />
        <span className={styles.copy}>
          <small>PREVIOUS MEMBER</small>
          <strong>
            <span className={styles.arrow} aria-hidden="true">←</span>{" "}
            <span className={styles.name}>{previous.stageName}</span>
          </strong>
        </span>
      </Link>
      <Link
        to={`/members/${next.slug}`}
        className={`${styles.item} ${styles.next}`}
      >
        <span className={styles.copy}>
          <small>NEXT MEMBER</small>
          <strong>
            <span className={styles.name}>{next.stageName}</span>{" "}
            <span className={styles.arrow} aria-hidden="true">→</span>
          </strong>
        </span>
        <img className={styles.avatar} src={next.imageSrc} alt="" />
      </Link>
    </nav>
  );
}
