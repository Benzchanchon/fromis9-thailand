import {
  PageHeaderDecoration,
  type PageHeaderDecorationVariant,
} from "./PageHeaderDecoration";
import styles from "./EditorialPageHeader.module.css";

interface EditorialPageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  headingId: string;
  decorationVariant: PageHeaderDecorationVariant;
}

export function EditorialPageHeader({
  eyebrow,
  title,
  subtitle,
  headingId,
  decorationVariant,
}: EditorialPageHeaderProps) {
  return (
    <div className={styles.header}>
      <PageHeaderDecoration variant={decorationVariant} side="left" />
      <div className={styles.eyebrowRow}>
        <span className={styles.rule} aria-hidden="true" />
        <span className={styles.eyebrow}>{eyebrow}</span>
        <span className={styles.rule} aria-hidden="true" />
      </div>
      <h1 id={headingId}>{title}</h1>
      <p>{subtitle}</p>
      <PageHeaderDecoration variant={decorationVariant} side="right" />
    </div>
  );
}
