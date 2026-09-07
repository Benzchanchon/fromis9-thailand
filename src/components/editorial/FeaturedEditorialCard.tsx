import { AssetPlaceholder } from "../ui/AssetPlaceholder";
import { PillButton } from "../ui/PillButton";
import styles from "./FeaturedEditorialCard.module.css";

interface FeaturedEditorialItem {
  eyebrow: string;
  date: string;
  title: string;
  summary: string;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  actionText: string;
  actionHref: string | null;
}

interface FeaturedEditorialCardProps {
  item: FeaturedEditorialItem;
}

export function FeaturedEditorialCard({ item }: FeaturedEditorialCardProps) {
  return (
    <article className={styles.card}>
      {item.imageSrc && item.imageAlt ? (
        <img
          className={styles.media}
          src={item.imageSrc}
          alt={item.imageAlt}
        />
      ) : (
        <AssetPlaceholder className={styles.media} label={item.imageLabel} />
      )}
      <div className={styles.content}>
        <span className={styles.eyebrow}>{item.eyebrow}</span>
        <span className={styles.date}>{item.date}</span>
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
        <PillButton href={item.actionHref ?? undefined} disabled={!item.actionHref}>
          {item.actionText}
        </PillButton>
      </div>
    </article>
  );
}
