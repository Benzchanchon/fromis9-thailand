import styles from "./RainbowVitaminStrip.module.css";

interface RainbowVitaminStripProps {
  mobileHome?: boolean;
}

export function RainbowVitaminStrip({
  mobileHome = false,
}: RainbowVitaminStripProps) {
  return (
    <div
      className={`${styles.strip} ${mobileHome ? styles.mobileHome : ""}`.trim()}
      data-asset-status="gradient-stops-pending-figma-export"
      role="img"
      aria-label="Rainbow Vitamin strip; exact Figma gradient stops pending"
    />
  );
}

