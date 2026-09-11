import { PillButton } from "../ui/PillButton";
import styles from "./ArticleBody.module.css";

interface ArticleBodyProps {
  paragraphs: readonly string[];
  sourceName: string;
  sourceUrl: string;
}

export function ArticleBody({
  paragraphs,
  sourceName,
  sourceUrl,
}: ArticleBodyProps) {
  return (
    <div className={styles.body}>
      {paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph}`}>{paragraph}</p>
      ))}

      <section className={styles.source} aria-labelledby="article-source-heading">
        <h2 id="article-source-heading">Original Source</h2>
        <p className={styles.sourceName}>{sourceName}</p>
        <PillButton href={sourceUrl} showArrow openInNewTab>
          View Original Source
        </PillButton>
      </section>
    </div>
  );
}
