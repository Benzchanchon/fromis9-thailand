import styles from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  label: string;
  disabled?: boolean;
}

export function LoadMoreButton({
  label,
  disabled = false,
}: LoadMoreButtonProps) {
  return (
    <button className={styles.button} type="button" disabled={disabled}>
      <span>{label}</span>
      <span className={styles.arrow} aria-hidden="true">
        ↓
      </span>
    </button>
  );
}
