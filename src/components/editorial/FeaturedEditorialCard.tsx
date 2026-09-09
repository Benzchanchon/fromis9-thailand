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
  imageFallbackSrc?: string;
  imageAlt?: string;
  actionText: string;
  actionHref: string | null;
  actionExternal?: boolean;
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
          onError={
            item.imageFallbackSrc
              ? (event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = item.imageFallbackSrc!;
                }
              : undefined
          }
        />
      ) : (
        <AssetPlaceholder className={styles.media} label={item.imageLabel} />
      )}
      <div className={styles.content}>
        <span className={styles.eyebrow}>{item.eyebrow}</span>
        <span className={styles.date}>{item.date}</span>
        <h2>{item.title}</h2>
        <p>{item.summary}</p>
        <PillButton
          href={item.actionHref ?? undefined}
          disabled={!item.actionHref}
          openInNewTab={item.actionExternal}
        >
          {item.actionText}
        </PillButton>
      </div>
    </article>
  );
}
