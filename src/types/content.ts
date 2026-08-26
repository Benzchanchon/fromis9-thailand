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
  title: string;
  eyebrow: string;
  description: string;
  imageLabel: string;
}
