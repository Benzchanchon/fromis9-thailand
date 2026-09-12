import type { NewsItem } from "../../types/content";
import { InlineArrowLink } from "../ui/InlineArrowLink";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  item: NewsItem;
  href?: string;
  presentation?: "default" | "home";
}

export function NewsCard({
  item,
  href,
  presentation = "default",
}: NewsCardProps) {
  return (
    <article
      className={`${styles.card} ${
        presentation === "home" ? styles.home : ""
      }`.trim()}
    >
      <img
        className={styles.image}
        src={item.image}
        alt={item.imageAlt}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.content}>
        <div className={styles.date}>
          <time dateTime={item.date}>{item.date}</time>
          <span> · {item.category}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <InlineArrowLink href={href}>Read More</InlineArrowLink>
      </div>
    </article>
  );
}

