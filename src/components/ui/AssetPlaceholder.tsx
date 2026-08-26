import styles from "./AssetPlaceholder.module.css";

type PlaceholderTone = "light" | "dark";

interface AssetPlaceholderProps {
  label: string;
  className?: string;
  tone?: PlaceholderTone;
}

export function AssetPlaceholder({
  label,
  className = "",
  tone = "light",
}: AssetPlaceholderProps) {
  return (
    <div
      className={`${styles.placeholder} ${styles[tone]} ${className}`.trim()}
      data-asset-status="figma-export-pending"
      role="img"
      aria-label={`${label}: Figma asset unavailable`}
    >
      <span className={styles.status}>FIGMA ASSET PENDING</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

