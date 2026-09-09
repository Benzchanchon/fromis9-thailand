import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./InlineArrowLink.module.css";

interface InlineArrowLinkProps {
  children: ReactNode;
  href?: string;
  openInNewTab?: boolean;
}

export function InlineArrowLink({
  children,
  href,
  openInNewTab = false,
}: InlineArrowLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link className={styles.link} to={href}>
          {content}
        </Link>
      );
    }
    return (
      <a
        className={styles.link}
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
      >
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
