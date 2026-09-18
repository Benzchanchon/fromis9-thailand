import type { HistoryEntry } from "../../types/history";
import { getCurrentHistoryEntry, getHistoryTimeline } from "../../data/history";
import styles from "./HistoryTimeline.module.css";

interface HistoryTimelineProps {
  entries: readonly HistoryEntry[];
}

function HistoryTimelineItem({ entry, isCurrent, isFirst }: { entry: HistoryEntry; isCurrent: boolean; isFirst: boolean }) {
  return (
    <li className={`${styles.row} ${isCurrent ? styles.current : ""}`.trim()} data-history-date={entry.date} data-current-chapter={isCurrent}>
      <span className={styles.node} aria-hidden="true" />
      <svg className={styles.branch} viewBox="0 0 64 64" aria-hidden="true" focusable="false"><path d="M0 1C54 1 24 63 64 63" /></svg>
      <article className={styles.entry} aria-labelledby={`${entry.id}-heading`}>
        <figure className={styles.media}>
          <img src={entry.image.src} alt={entry.image.alt} style={{ objectPosition: entry.image.objectPosition ?? "50% 50%" }} loading={isFirst ? "eager" : "lazy"} decoding="async" width="800" height="600" />
        </figure>
        <div className={styles.copy}>
          {isCurrent ? <span className={styles.currentLabel}>บทล่าสุด</span> : null}
          <span className={styles.year} aria-hidden="true">{entry.year}</span>
          <time className={styles.date} dateTime={entry.date}>{entry.dateLabel}</time>
          <h3 id={`${entry.id}-heading`}>{entry.title}</h3>
          <div className={styles.summary}>{entry.summaryTh.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </article>
    </li>
  );
}

export function HistoryTimeline({ entries }: HistoryTimelineProps) {
  const timeline = getHistoryTimeline(entries);
  const currentEntry = getCurrentHistoryEntry(entries);
  return (
    <ol className={styles.timeline} aria-label="ลำดับเหตุการณ์สำคัญของ fromis_9">
      {timeline.map((entry, index) => <HistoryTimelineItem entry={entry} isCurrent={entry.id === currentEntry?.id} isFirst={index === 0} key={entry.id} />)}
    </ol>
  );
}
