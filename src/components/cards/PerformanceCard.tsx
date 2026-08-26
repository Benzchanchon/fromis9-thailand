import type { PerformanceSummary } from "../../types/content";
import { AssetPlaceholder } from "../ui/AssetPlaceholder";
import { InlineArrowLink } from "../ui/InlineArrowLink";
import styles from "./PerformanceCard.module.css";

export function PerformanceCard({ item }: { item: PerformanceSummary }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <AssetPlaceholder className={styles.thumbnail} label={item.imageLabel} />
        <span className={styles.play} aria-hidden="true">▶</span>
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{item.date}</span>
        <h3>{item.title}</h3>
        <InlineArrowLink>Watch Performance</InlineArrowLink>
      </div>
    </article>
  );
}
