import type { ReleaseSummary } from "../../types/content";
import { PillButton } from "../ui/PillButton";
import styles from "./LatestReleasePanel.module.css";

interface LatestReleasePanelProps {
  release: ReleaseSummary;
}

function SpotifyIcon() {
  return (
    <svg
      className={styles.actionIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.42a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.58-1.04 8.5-.59 11.66 1.34.35.22.46.68.25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.23-1.98-8.15-2.55-11.96-1.4a.94.94 0 1 1-.54-1.8c4.36-1.32 9.79-.68 13.48 1.58.44.27.58.86.31 1.31Zm.13-3.4C14.32 7.45 7.93 7.24 4.24 8.35a1.13 1.13 0 0 1-.65-2.16c4.24-1.28 11.3-1.03 15.75 1.61a1.13 1.13 0 0 1-1.15 1.95Z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      className={styles.actionIcon}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.017 3.017 0 0 0 2.121 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.376-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"
      />
    </svg>
  );
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
            <span className={styles.actionLabel}>
              <SpotifyIcon />
              <span>{release.spotifyButtonText}</span>
            </span>
          </PillButton>
          <PillButton href={release.youtubeUrl} variant="youtube">
            <span className={styles.actionLabel}>
              <YouTubeIcon />
              <span>{release.youtubeButtonText}</span>
            </span>
          </PillButton>
        </div>
      </div>
    </article>
  );
}

