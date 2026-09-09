export type ContentStatus = "published" | "placeholder";

export type NewsArticleBlock =
  | {
      id: string;
      type: "paragraph";
      text: string;
    }
  | {
      id: string;
      type: "heading";
      text: string;
    }
  | {
      id: string;
      type: "callout";
      text: string;
    }
  | {
      id: string;
      type: "media";
      imageLabel: string;
      imageSrc?: string;
      imageAlt?: string;
      caption?: string;
    };

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
  articleBlocks?: readonly NewsArticleBlock[];
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
  | "Music Show"
  | "Concert"
  | "Special Stage"
  | "Cover"
  | "Behind the Scenes"
  | "Fancam"
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
