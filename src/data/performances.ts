import type { PerformanceSummary } from "../types/content";

export const performancesPageContent = {
  eyebrow: "PERFORMANCES",
  title: "Performances",
  subtitle: "Performance page introduction pending approved content.",
  archiveEyebrow: "PERFORMANCE ARCHIVE",
  archiveTitle: "All Performances",
} as const;

export const performanceFilters = [
  { id: "all", label: "All" },
  { id: "filter-placeholder-01", label: "Filter pending 01" },
  { id: "filter-placeholder-02", label: "Filter pending 02" },
  { id: "filter-placeholder-03", label: "Filter pending 03" },
] as const;

export const featuredPerformance = {
  eyebrow: "FEATURED PERFORMANCE",
  date: "DATE PENDING",
  title: "Featured performance content pending",
  summary:
    "Verified featured performance details are not available yet. This neutral placeholder preserves the approved editorial layout without inventing production content.",
  imageLabel: "Featured performance media",
  actionText: "Watch Performance",
  actionHref: null,
} as const;

export const performanceItems: PerformanceSummary[] = Array.from(
  { length: 9 },
  (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      id: `performance-placeholder-${number}`,
      date: "DATE PENDING",
      title: `Performance title placeholder ${number}`,
      imageLabel: `Performance thumbnail ${number}`,
    };
  },
);

export const loadMoreLabel = "Load More Performances";
