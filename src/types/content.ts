export type ContentStatus = "published" | "placeholder";

export interface NewsItem {
  id: string;
  status: ContentStatus;
  slug?: string;
  date: string;
  title: string;
  summary: string;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  category?: string;
  sourceUrl?: string;
}

export interface MemberSummary {
  slug: string;
  name: string;
  secondary: string;
  imageLabel: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export interface PerformanceSummary {
  id: string;
  date: string;
  title: string;
  imageLabel: string;
}

export interface MemberProfile extends MemberSummary {
  biography: string;
  heroStatLabel: string;
  heroStatValue: string;
  profileFacts: ProfileFact[];
  performances: PerformanceSummary[];
}

export interface ReleaseSummary {
  releaseType: string;
  title: string;
  releaseDate: string;
  description: string;
  artworkSrc: string;
  artworkAlt: string;
  spotifyUrl: string;
  youtubeUrl: string;
  spotifyButtonText: string;
  youtubeButtonText: string;
}
