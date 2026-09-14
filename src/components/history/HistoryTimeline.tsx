import type { HistoryEntry } from "../../types/history";
import { getCurrentHistoryEntry, getHistoryTimeline } from "../../data/history";
import styles from "./HistoryTimeline.module.css";

interface HistoryTimelineProps {
  entries: readonly HistoryEntry[];
}

export function TimelineRoots() {
  return (
    <svg className={styles.roots} viewBox="0 0 240 130" aria-hidden="true" focusable="false">
      <g fill="none" strokeLinecap="round" strokeWidth="2.5">
        <path d="M120 103V90C120 53 64 91 44 41" stroke="var(--color-brand)" />
        <path d="M120 103V90C120 49 179 87 195 36" stroke="var(--color-cyan)" />
        <path d="M120 103C120 67 85 62 85 18" stroke="var(--color-orange)" />
        <path d="M120 103C120 67 147 58 147 20" stroke="var(--color-brand)" />
        <path className={styles.desktopRootStem} d="M120 103V130" stroke="var(--color-brand)" />
        <path className={styles.tabletRootStem} d="M120 103C120 126 33 100 33 130" stroke="var(--color-brand)" />
        <path className={styles.mobileRootStem} d="M120 103C120 126 14 100 14 130" stroke="var(--color-brand)" />
      </g>
      <rect x="27" y="23" width="31" height="14" rx="7" fill="var(--color-pale-yellow)" stroke="var(--color-orange)" transform="rotate(28 42 30)" />
      <rect x="183" y="19" width="27" height="13" rx="6.5" fill="#eafaff" stroke="var(--color-cyan)" transform="rotate(-30 196 25)" />
      <circle cx="85" cy="14" r="5" fill="var(--color-orange)" opacity="0.7" />
      <circle cx="147" cy="16" r="5" fill="var(--color-brand)" opacity="0.65" />
      <path d="M119 26v12M113 32h12" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="211" cy="72" r="3" fill="var(--color-orange)" />
      <circle cx="27" cy="76" r="3" fill="var(--color-cyan)" />
    </svg>
  );
}

export function HistoryTimeline({ entries }: HistoryTimelineProps) {
  const timeline = getHistoryTimeline(entries);
  const currentEntry = getCurrentHistoryEntry(entries);

  return (
    <ol className={styles.timeline} aria-label="ลำดับเหตุการณ์สำคัญของ fromis_9">
      {timeline.map((entry) => {
        const isCurrent = entry.id === currentEntry?.id;
        return (
          <li
            className={`${styles.row} ${isCurrent ? styles.current : ""}`.trim()}
            data-history-date={entry.date}
            data-current-chapter={isCurrent}
            key={entry.id}
          >
            <div className={styles.anchor} aria-hidden="true">
              <span className={styles.year}>{entry.year}</span>
              <span className={styles.node} />
            </div>
            <svg className={styles.branch} viewBox="0 0 60 52" aria-hidden="true" focusable="false">
              <path d="M60 20C38 20 37 36 16 36H0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <article className={styles.card} aria-labelledby={`${entry.id}-heading`}>
              {isCurrent ? <span className={styles.currentLabel}><span aria-hidden="true">✦</span> Current Chapter</span> : null}
              <div className={styles.metadata}>
                <span>{entry.category}</span>
                <span>{entry.dateLabel}</span>
              </div>
              <h3 id={`${entry.id}-heading`}>{entry.title}</h3>
              <div className={styles.summary}>
                {entry.summaryTh.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
              <figure className={styles.media}>
                <img src={entry.image.src} alt={entry.image.alt} style={{ objectPosition: entry.image.objectPosition ?? "50% 50%" }} loading="lazy" decoding="async" />
              </figure>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
