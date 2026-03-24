import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tinkerhive.com", lastModified: new Date(), priority: 1 },
    { url: "https://tinkerhive.com/privacy", lastModified: new Date(), priority: 0.3 },
    { url: "https://tinkerhive.com/terms", lastModified: new Date(), priority: 0.3 },
  ];
}
