import type { NewsItem } from "../../types/content";
import styles from "./ArticleHeader.module.css";

interface ArticleHeaderProps {
  article: NewsItem;
  headingId: string;
}

export function ArticleHeader({ article, headingId }: ArticleHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.metadata}>
        {article.category ? <span>{article.category}</span> : null}
        {article.category ? <span aria-hidden="true">•</span> : null}
        <time dateTime={article.date}>{article.date}</time>
      </div>
      <h1 id={headingId}>{article.title}</h1>
      <p>{article.summary}</p>
    </header>
  );
}
