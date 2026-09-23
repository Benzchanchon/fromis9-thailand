import type { NewsItem } from "../types/content";
import { newsCategories } from "../data/newsPresentation";

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL?.trim() || "http://localhost:8001").replace(/\/+$/, "");

export class NewsApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = "NewsApiError";
  }
}

function isNewsItem(value: unknown): value is NewsItem {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  const strings = ["slug", "title", "date", "category", "image", "imageAlt", "summary", "sourceName", "sourceUrl"];
  return strings.every((key) => typeof item[key] === "string")
    && typeof item.featured === "boolean"
    && newsCategories.some((category) => category === item.category)
    && Array.isArray(item.article)
    && item.article.every((paragraph) => typeof paragraph === "string");
}

async function request(path: string, signal?: AbortSignal): Promise<unknown> {
  const controller = new AbortController();
  const abort = () => controller.abort();
  signal?.addEventListener("abort", abort, { once: true });
  if (signal?.aborted) controller.abort();
  const timeout = window.setTimeout(abort, 15000);
  try {
    const response = await fetch(apiBaseUrl + path, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new NewsApiError(`News API returned HTTP ${response.status}`, response.status);
    }
    try {
      return await response.json();
    } catch {
      throw new NewsApiError("News API returned invalid JSON");
    }
  } catch (error) {
    if (signal?.aborted || error instanceof NewsApiError) throw error;
    throw new NewsApiError(controller.signal.aborted
      ? "News API request timed out"
      : "Cannot connect to the News API");
  } finally {
    window.clearTimeout(timeout);
    signal?.removeEventListener("abort", abort);
  }
}

export async function getNews(signal?: AbortSignal): Promise<NewsItem[]> {
  const data = await request("/api/news", signal);
  if (!Array.isArray(data) || !data.every(isNewsItem)) {
    throw new NewsApiError("News API returned an invalid news list");
  }
  return data;
}

export async function getNewsBySlug(slug: string, signal?: AbortSignal): Promise<NewsItem> {
  const data = await request(`/api/news/${encodeURIComponent(slug)}`, signal);
  if (!isNewsItem(data) || data.slug !== slug) {
    throw new NewsApiError("News API returned an invalid article");
  }
  return data;
}

// Start independent requests together. Only the detail endpoint's 404 means
// the article is missing; a broken list endpoint must stay a retryable error.
export async function getNewsDetail(slug: string, signal?: AbortSignal) {
  const [article, items] = await Promise.all([
    getNewsBySlug(slug, signal).catch((error: unknown) => {
      if (error instanceof NewsApiError && error.status === 404) return null;
      throw error;
    }),
    getNews(signal).catch((error: unknown) => {
      throw new NewsApiError(error instanceof Error ? error.message : "Cannot load news navigation");
    }),
  ]);
  return { article, items };
}
