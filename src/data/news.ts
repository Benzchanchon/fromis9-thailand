import newsReleaseImage from "../assets/images/Homepage/news-release-01.jpg";
import newsReleaseImage02 from "../assets/images/Homepage/news-release-02.jpg";
import newsReleaseImage03 from "../assets/images/Homepage/news-release-03.jpg";
import type { NewsArticleBlock, NewsItem } from "../types/content";

export const placeholderArticleBlocks: readonly NewsArticleBlock[] = [
  {
    id: "article-introduction-pending",
    type: "paragraph",
    text: "Full article copy has not been supplied yet. This space is reserved for the approved introductory article content.",
  },
  {
    id: "article-section-heading-pending",
    type: "heading",
    text: "Article section pending",
  },
  {
    id: "article-section-copy-pending-01",
    type: "paragraph",
    text: "Approved copy for this article section is pending. Replace this neutral placeholder when verified editorial content becomes available.",
  },
  {
    id: "article-section-copy-pending-02",
    type: "paragraph",
    text: "No additional factual details have been added. This paragraph exists only to preserve the designed reading flow.",
  },
  {
    id: "article-callout-pending",
    type: "callout",
    text: "Editorial callout content pending approved copy.",
  },
  {
    id: "article-media-pending",
    type: "media",
    imageLabel: "In-article editorial media",
    caption: "Caption pending approved content.",
  },
  {
    id: "article-additional-heading-pending",
    type: "heading",
    text: "Additional article section pending",
  },
  {
    id: "article-additional-copy-pending",
    type: "paragraph",
    text: "Additional verified article content has not been supplied. This final placeholder remains intentionally neutral.",
  },
];

const publishedNewsItem: NewsItem = {
  id: "fromis9-announces-2026-asia-tour-tomorrow-glow",
  status: "published",
  slug: "fromis9-announces-2026-asia-tour-tomorrow-glow",
  date: "2026-07-29",
  title: "fromis_9 Announces 2026 Asia Tour “TOMORROW GLOW.”",
  summary:
    "fromis_9 will kick off their 2026 Asia tour “TOMORROW GLOW.” with three concerts in Seoul from September 4–6 at Korea University’s Hwajung Tiger Dome. Additional cities across Asia will be announced later.",
  imageLabel: "fromis_9 TOMORROW GLOW. 2026 Asia Tour Seoul announcement",
  imageSrc: newsReleaseImage,
  imageAlt: "fromis_9 TOMORROW GLOW. 2026 Asia Tour Seoul announcement",
  category: "Tour",
  sourceUrl:
    "https://www.allkpop.com/article/2026/07/fromis-9-to-open-2026-asia-tour-tomorrow-glow-in-seoul-on-september-4",
  articleBlocks: placeholderArticleBlocks,
};

const publishedNewsItems: NewsItem[] = [
  publishedNewsItem,
  {
    id: "fromis9-wins-show-champion-vitamin-me",
    status: "published",
    slug: "fromis9-wins-show-champion-vitamin-me",
    date: "2026-07-29",
    title: "fromis_9 win on 'Show Champion' with 'Vitamin ME'",
    summary:
      "fromis_9 took first place on MBC M's “Show Champion” with “Vitamin ME,” the title track from their second full album “Glow ME.”",
    imageLabel: "fromis_9 win on 'Show Champion' with 'Vitamin ME'",
    imageSrc: newsReleaseImage02,
    imageAlt: "fromis_9 win on 'Show Champion' with 'Vitamin ME'",
    category: "Updates",
    sourceUrl:
      "https://www.allkpop.com/article/2026/07/fromis-9-win-on-show-champion-with-vitamin-me",
    articleBlocks: placeholderArticleBlocks,
  },
  {
    id: "fromis9-drops-vitamin-me-mv",
    status: "published",
    slug: "fromis9-drops-vitamin-me-mv",
    date: "2026-07-21",
    title: 'fromis_9 drops energizing MV for "Vitamin ME"',
    summary: 'fromis_9 is back with an energizing MV for their newest track "Vitamin ME."',
    imageLabel: 'fromis_9 drops energizing MV for "Vitamin ME"',
    imageSrc: newsReleaseImage03,
    imageAlt: 'fromis_9 drops energizing MV for "Vitamin ME"',
    category: "Releases",
    sourceUrl:
      "https://www.allkpop.com/video/2026/07/fromis-9-drops-energizing-mv-for-vitamin-me",
    articleBlocks: placeholderArticleBlocks,
  },
];

const archivePlaceholderNewsItems: NewsItem[] = Array.from(
  { length: 6 },
  (_, index) => {
    const number = String(index + 4).padStart(2, "0");

    return {
      id: `news-placeholder-${number}`,
      status: "placeholder",
      date: "DATE PENDING",
      title: `News headline placeholder ${number}`,
      summary:
        "Editorial summary pending approved content. No factual news has been supplied for this layout item.",
      imageLabel: `Latest news image ${number}`,
    };
  },
);

export const newsItems: NewsItem[] = [
  ...publishedNewsItems,
  ...archivePlaceholderNewsItems,
];

export const homeLatestNewsItems = publishedNewsItems.slice(0, 3);

export const newsPageContent = {
  eyebrow: "NEWS",
  title: "News",
  subtitle: "News page introduction pending approved content.",
  archiveEyebrow: "NEWS ARCHIVE",
  archiveTitle: "Latest News",
} as const;

const publishedCategories = Array.from(
  new Set(
    publishedNewsItems.flatMap((item) =>
      item.category ? [item.category] : [],
    ),
  ),
);

export const newsFilters = [
  { id: "all", label: "All" },
  ...publishedCategories.map((category) => ({
    id: category,
    label: category,
  })),
];

export function getNewsBySlug(slug?: string) {
  return newsItems.find((item) => item.slug === slug);
}

export function getNewsDetailPath(slug: string) {
  return `/news/${slug}`;
}

export function getRelatedNews(itemId: string, limit = 3) {
  return newsItems.filter((item) => item.id !== itemId).slice(0, limit);
}

export function getNewsNavigation(slug: string) {
  const routableItems = newsItems.filter(
    (item): item is NewsItem & { slug: string } =>
      item.status === "published" && Boolean(item.slug),
  );
  const currentIndex = routableItems.findIndex((item) => item.slug === slug);

  if (currentIndex < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous:
      currentIndex > 0 ? routableItems[currentIndex - 1] : undefined,
    next:
      currentIndex < routableItems.length - 1
        ? routableItems[currentIndex + 1]
        : undefined,
  };
}

export const featuredNews = {
  eyebrow: publishedNewsItem.category ?? "NEWS",
  date: publishedNewsItem.date,
  title: publishedNewsItem.title,
  summary: publishedNewsItem.summary,
  imageLabel: publishedNewsItem.imageLabel,
  imageSrc: publishedNewsItem.imageSrc,
  imageAlt: publishedNewsItem.imageAlt,
  actionText: "Read More",
  actionHref: publishedNewsItem.slug
    ? getNewsDetailPath(publishedNewsItem.slug)
    : null,
} as const;

export const loadMoreNewsLabel = "Load More News";
