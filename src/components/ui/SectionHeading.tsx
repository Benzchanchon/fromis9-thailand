import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  showRule?: boolean;
  level?: 1 | 2;
  headingId?: string;
}

export function SectionHeading({
  title,
  eyebrow,
  subtitle,
  align = "left",
  showRule = false,
  level = 2,
  headingId,
}: SectionHeadingProps) {
  const Heading = level === 1 ? "h1" : "h2";

  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {showRule && !eyebrow ? (
        <span className={styles.standaloneRule} aria-hidden="true" />
      ) : null}
      {eyebrow ? (
        <div className={styles.eyebrowRow}>
          {showRule ? <span className={styles.rule} aria-hidden="true" /> : null}
          <span className={styles.eyebrow}>{eyebrow}</span>
        </div>
      ) : null}
      <Heading id={headingId}>{title}</Heading>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
