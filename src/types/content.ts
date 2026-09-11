export type NewsCategory =
  | "Releases"
  | "Updates"
  | "Tour"
  | "Events"
  | "Other";

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  featured: boolean;
  image: string;
  imageAlt: string;
  summary: string;
  article: readonly string[];
  sourceName: string;
  sourceUrl: string;
}

export interface MemberSummary {
  slug: string;
  stageName: string;
  fullName: string;
  representativeEmoji: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ProfileFact {
  label: string;
  value: string;
  href?: string;
}

export type PerformanceCategory =
  | "MV"
  | "Special Stage"
  | "Cover"
  | "Behind the Scenes"
  | "Other";

export interface PerformanceItem {
  id: string;
  title: string;
  date: string;
  category: PerformanceCategory;
  videoUrl: string;
  youtubeVideoId: string;
  thumbnailAlt: string;
  featured: boolean;
  members: readonly string[];
  summary: string;
  description: string;
  tags: readonly string[];
}

export interface MemberProfile extends MemberSummary {
  koreanName: string;
  dateOfBirth: string;
  position: string;
  height: string;
  weight: string;
  bloodType: string;
  mbtiType: string;
  instagramUrl: string;
  biography: string;
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
