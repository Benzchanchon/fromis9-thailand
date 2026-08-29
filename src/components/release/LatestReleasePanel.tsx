import type { ReleaseSummary } from "../../types/content";
import { PillButton } from "../ui/PillButton";
import styles from "./LatestReleasePanel.module.css";

interface LatestReleasePanelProps {
  release: ReleaseSummary;
}

export function LatestReleasePanel({ release }: LatestReleasePanelProps) {
  return (
    <article className={styles.panel}>
      <img
        className={styles.artwork}
        src={release.artworkSrc}
        alt={release.artworkAlt}
      />
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          {release.releaseType} · <time dateTime={release.releaseDate}>{release.releaseDate}</time>
        </span>
        <h3>{release.title}</h3>
        <p>{release.description}</p>
        <div className={styles.actions}>
          <PillButton href={release.spotifyUrl} variant="spotify">
            {release.spotifyButtonText}
          </PillButton>
          <PillButton href={release.youtubeUrl} variant="youtube">
            {release.youtubeButtonText}
          </PillButton>
        </div>
      </div>
    </article>
  );
}

