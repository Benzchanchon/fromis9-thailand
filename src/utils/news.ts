import type { NewsItem } from "../types/content";

export function sortNewsByDateDesc(items: readonly NewsItem[]) {
  return [...items].sort((left, right) =>
    right.date.localeCompare(left.date),
  );
}
export function getNewsDetailPath(slug: string) {
  return `/news/${slug}`;
}

export function getRelatedNews(newsItems: readonly NewsItem[], currentItem: NewsItem, limit = 3) {
  const sortedCandidates = sortNewsByDateDesc(
    newsItems.filter((item) => item.slug !== currentItem.slug),
  );
  const sameCategory = sortedCandidates.filter(
    (item) => item.category === currentItem.category,
  );
  const otherCategories = sortedCandidates.filter(
    (item) => item.category !== currentItem.category,
  );

  return [...sameCategory, ...otherCategories].slice(0, limit);
}

export function getNewsNavigation(newsItems: readonly NewsItem[], slug: string) {
  const sortedNews = sortNewsByDateDesc(newsItems);
  const currentIndex = sortedNews.findIndex((item) => item.slug === slug);

  if (currentIndex < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: currentIndex > 0 ? sortedNews[currentIndex - 1] : undefined,
    next:
      currentIndex < sortedNews.length - 1
        ? sortedNews[currentIndex + 1]
        : undefined,
  };
}


export function getFeaturedNews(items: readonly NewsItem[]) {
  const item = sortNewsByDateDesc(items.filter((news) => news.featured))[0];
  return item ? {
    eyebrow: item.category,
    date: item.date,
    title: item.title,
    summary: item.summary,
    imageLabel: item.imageAlt,
    imageSrc: item.image,
    imageAlt: item.imageAlt,
    actionText: "Read More",
    actionHref: getNewsDetailPath(item.slug),
  } : undefined;
}
