import styles from "./LoadMoreButton.module.css";

interface LoadMoreButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export function LoadMoreButton({
  label,
  disabled = false,
  onClick,
}: LoadMoreButtonProps) {
  return (
    <button
      className={styles.button}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className={styles.arrow} aria-hidden="true">
        ↓
      </span>
    </button>
  );
}
