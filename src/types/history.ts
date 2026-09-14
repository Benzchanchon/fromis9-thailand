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
  /** Date of the milestone, or the last event in a grouped era (YYYY-MM-DD). */
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
