import type { ReleaseSummary } from "../../types/content";
import { AssetPlaceholder } from "../ui/AssetPlaceholder";
import { PillButton } from "../ui/PillButton";
import styles from "./LatestReleasePanel.module.css";

interface LatestReleasePanelProps {
  release: ReleaseSummary;
}

export function LatestReleasePanel({ release }: LatestReleasePanelProps) {
  return (
    <article className={styles.panel}>
      <AssetPlaceholder className={styles.artwork} label={release.imageLabel} />
      <div className={styles.content}>
        <span className={styles.eyebrow}>{release.eyebrow}</span>
        <h3>{release.title}</h3>
        <p>{release.description}</p>
        <div className={styles.actions}>
          <PillButton variant="spotify" disabled>
            Spotify
          </PillButton>
          <PillButton variant="youtube" disabled>
            YouTube
          </PillButton>
        </div>
      </div>
    </article>
  );
}

