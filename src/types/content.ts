export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  imageLabel: string;
}

export interface MemberSummary {
  slug: string;
  name: string;
  secondary: string;
  imageLabel: string;
}

export interface ReleaseSummary {
  title: string;
  eyebrow: string;
  description: string;
  imageLabel: string;
}

