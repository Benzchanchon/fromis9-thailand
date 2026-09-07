import { Link } from "react-router-dom";
import styles from "./ArticleNavigation.module.css";

interface ArticleNavigationItem {
  title: string;
  href: string;
}

interface ArticleNavigationProps {
  previous?: ArticleNavigationItem;
  next?: ArticleNavigationItem;
}

function NavigationItem({
  item,
  direction,
}: {
  item?: ArticleNavigationItem;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";
  const label = isNext ? "Next News" : "Previous News";

  return (
    <div className={`${styles.item} ${isNext ? styles.next : ""}`.trim()}>
      <span className={styles.label}>{label}</span>
      {item ? (
        <Link to={item.href} className={styles.title}>
          <span aria-hidden="true">{isNext ? "" : "←"}</span>
          <span>{item.title}</span>
          <span aria-hidden="true">{isNext ? "→" : ""}</span>
        </Link>
      ) : (
        <span className={`${styles.title} ${styles.disabled}`} aria-disabled="true">
          {isNext ? "No next article available" : "No previous article available"}
        </span>
      )}
    </div>
  );
}

export function ArticleNavigation({
  previous,
  next,
}: ArticleNavigationProps) {
  return (
    <nav className={styles.navigation} aria-label="News article navigation">
      <NavigationItem item={previous} direction="previous" />
      <NavigationItem item={next} direction="next" />
    </nav>
  );
}
