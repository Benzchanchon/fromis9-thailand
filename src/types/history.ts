export interface HistoricalImage {
  src: string;
  alt: string;
  sourceUrl: string;
  credit: string;
  kind?: "photo" | "artwork" | "poster";
  objectPosition?: string;
}

export interface HistoryEntry {
  id: string;
  year: number;
  /** ISO date of the milestone/grouped era; YYYY-MM when only the month is confirmed. */
  date: string;
  dateLabel: string;
  title: string;
  summaryTh: readonly string[];
  category: string;
  image: HistoricalImage;
  sourceUrls: readonly string[];
}

export interface FormerMember {
  id: string;
  slug: string;
  name: string;
  koreanName: string;
  yearsActive: string;
  role: string;
  biographyTh: string;
  image: HistoricalImage;
  sourceUrl: string;
}
