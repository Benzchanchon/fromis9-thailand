import type { PerformanceItem } from "../../types/content";
import { getYouTubeThumbnail } from "../../data/performances";
import { InlineArrowLink } from "../ui/InlineArrowLink";
import styles from "./PerformanceCard.module.css";

export function PerformanceCard({ item }: { item: PerformanceItem }) {
  const fallbackThumbnail = getYouTubeThumbnail(
    item.youtubeVideoId,
    "hqdefault",
  );

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          className={styles.thumbnail}
          src={getYouTubeThumbnail(item.youtubeVideoId)}
          alt={item.thumbnailAlt}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackThumbnail;
          }}
        />
        <a
          className={styles.play}
          href={item.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Watch ${item.title} on YouTube`}
        >
          <span className={styles.playIcon} aria-hidden="true">
            ▶
          </span>
        </a>
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{item.date}</span>
        <h3>{item.title}</h3>
        <InlineArrowLink href={item.videoUrl} openInNewTab>
          Watch Performance
        </InlineArrowLink>
      </div>
    </article>
  );
}
