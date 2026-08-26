import type { ReactNode } from "react";
import styles from "./PillButton.module.css";

type PillButtonVariant =
  | "primary"
  | "heroSecondary"
  | "spotify"
  | "youtube"
  | "overlay";

interface PillButtonProps {
  children: ReactNode;
  href?: string;
  variant?: PillButtonVariant;
  showArrow?: boolean;
  disabled?: boolean;
}

export function PillButton({
  children,
  href,
  variant = "primary",
  showArrow = false,
  disabled = false,
}: PillButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    );
  }

  return (
    <span
      className={`${className} ${disabled ? styles.disabled : ""}`.trim()}
      aria-disabled={disabled || undefined}
    >
      {content}
    </span>
  );
}

