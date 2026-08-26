import type { NewsItem } from "../../types/content";
import { AssetPlaceholder } from "../ui/AssetPlaceholder";
import { InlineArrowLink } from "../ui/InlineArrowLink";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  item: NewsItem;
}

export function NewsCard({ item }: NewsCardProps) {
  return (
    <article className={styles.card}>
      <AssetPlaceholder className={styles.image} label={item.imageLabel} />
      <div className={styles.content}>
        <time className={styles.date}>{item.date}</time>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <InlineArrowLink>Read More</InlineArrowLink>
      </div>
    </article>
  );
}

