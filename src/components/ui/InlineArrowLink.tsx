import type { ReactNode } from "react";
import styles from "./InlineArrowLink.module.css";

interface InlineArrowLinkProps {
  children: ReactNode;
  href?: string;
}

export function InlineArrowLink({ children, href }: InlineArrowLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a className={styles.link} href={href}>
        {content}
      </a>
    );
  }

  return (
    <span className={`${styles.link} ${styles.disabled}`} aria-disabled="true">
      {content}
    </span>
  );
}

