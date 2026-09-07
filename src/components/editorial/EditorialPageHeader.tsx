import styles from "./EditorialPageHeader.module.css";

interface EditorialPageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  headingId: string;
}

export function EditorialPageHeader({
  eyebrow,
  title,
  subtitle,
  headingId,
}: EditorialPageHeaderProps) {
  return (
    <div className={styles.header}>
      <span
        className={`${styles.decoration} ${styles.decorationLeft}`}
        data-asset-status="figma-export-pending"
        aria-label="Left page-header decoration asset pending"
      >
        asset
      </span>
      <div className={styles.eyebrowRow}>
        <span className={styles.rule} aria-hidden="true" />
        <span className={styles.eyebrow}>{eyebrow}</span>
        <span className={styles.rule} aria-hidden="true" />
      </div>
      <h1 id={headingId}>{title}</h1>
      <p>{subtitle}</p>
      <span
        className={`${styles.decoration} ${styles.decorationRight}`}
        data-asset-status="figma-export-pending"
        aria-label="Right page-header decoration asset pending"
      >
        asset
      </span>
    </div>
  );
}
