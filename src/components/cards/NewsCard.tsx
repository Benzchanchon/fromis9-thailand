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
      {item.imageSrc && item.imageAlt ? (
        <img className={styles.image} src={item.imageSrc} alt={item.imageAlt} />
      ) : (
        <AssetPlaceholder className={styles.image} label={item.imageLabel} />
      )}
      <div className={styles.content}>
        <div className={styles.date}>
          {item.status === "published" ? (
            <time dateTime={item.date}>{item.date}</time>
          ) : (
            <span>{item.date}</span>
          )}
          {item.category ? <span> · {item.category}</span> : null}
        </div>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <InlineArrowLink href={item.sourceUrl}>Read More</InlineArrowLink>
      </div>
    </article>
  );
}

