import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPublicSiteOrigin, siteConfig } from "../../data/site";

type OpenGraphType = "website" | "article" | "profile";

interface SeoProps {
  title: string;
  description: string;
  type?: OpenGraphType;
  image?: string;
}

function upsertMeta(attribute: "name" | "property", key: string, value: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.content = value;
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.append(element);
  }

  element.href = href;
}

export function createMetaDescription(value: string, maxLength = 160) {
  const normalizedValue = value.replace(/\s+/g, " ").trim();

  if (normalizedValue.length <= maxLength) {
    return normalizedValue;
  }

  return `${normalizedValue.slice(0, maxLength - 1).trimEnd()}…`;
}

export function Seo({
  title,
  description,
  type = "website",
  image,
}: SeoProps) {
  const { pathname } = useLocation();
  const metaDescription = createMetaDescription(description);

  useEffect(() => {
    const siteOrigin = getPublicSiteOrigin();
    const canonicalUrl = new URL(pathname, `${siteOrigin}/`).toString();
    const openGraphImage = image
      ? new URL(image, `${siteOrigin}/`).toString()
      : undefined;

    document.title = title;
    upsertMeta("name", "description", metaDescription);
    upsertCanonical(canonicalUrl);
    upsertMeta("property", "og:site_name", siteConfig.name);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", metaDescription);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", type);

    if (openGraphImage) {
      upsertMeta("property", "og:image", openGraphImage);
    } else {
      document.head.querySelector('meta[property="og:image"]')?.remove();
    }
  }, [description, image, metaDescription, pathname, title, type]);

  return null;
}
