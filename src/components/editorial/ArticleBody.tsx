import type { NewsArticleBlock } from "../../types/content";
import { AssetPlaceholder } from "../ui/AssetPlaceholder";
import { PillButton } from "../ui/PillButton";
import styles from "./ArticleBody.module.css";

interface ArticleBodyProps {
  blocks: readonly NewsArticleBlock[];
  sourceUrl?: string;
}

export function ArticleBody({ blocks, sourceUrl }: ArticleBodyProps) {
  return (
    <div className={styles.body}>
      {blocks.map((block) => {
        if (block.type === "heading") {
          return <h2 key={block.id}>{block.text}</h2>;
        }

        if (block.type === "callout") {
          return (
            <aside className={styles.callout} key={block.id}>
              {block.text}
            </aside>
          );
        }

        if (block.type === "media") {
          return (
            <figure className={styles.media} key={block.id}>
              {block.imageSrc && block.imageAlt ? (
                <img src={block.imageSrc} alt={block.imageAlt} />
              ) : (
                <AssetPlaceholder
                  className={styles.mediaPlaceholder}
                  label={block.imageLabel}
                />
              )}
              {block.caption ? <figcaption>{block.caption}</figcaption> : null}
            </figure>
          );
        }

        return <p key={block.id}>{block.text}</p>;
      })}

      <section className={styles.source} aria-labelledby="article-source-heading">
        <h2 id="article-source-heading">Original Source</h2>
        <PillButton href={sourceUrl} showArrow disabled={!sourceUrl}>
          View Original Source
        </PillButton>
      </section>
    </div>
  );
}
