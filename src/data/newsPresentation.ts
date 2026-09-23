import type { NewsCategory } from "../types/content";

export const newsCategories: readonly NewsCategory[] = [
  "Releases",
  "Updates",
  "Tour",
  "Events",
  "Other",
];

export const newsFilters = [
  { id: "all", label: "All" },
  ...newsCategories.map((category) => ({
    id: category,
    label: category,
  })),
];

export const newsPageContent = {
  eyebrow: "NEWS",
  title: "News",
  subtitle: "ติดตามข่าวสาร กิจกรรมและความเคลื่อนไหวล่าสุดของ fromis_9",
  archiveEyebrow: "NEWS ARCHIVE",
  archiveTitle: "Latest News",
} as const;

export const loadMoreNewsLabel = "Load More News";
