import type { MetadataRoute } from "next";

const baseUrl = "https://livecombatsportsai.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/shows",
    "/past-shows",
    "/watch",
    "/pb",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    "/refund",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-06-08"),
    changeFrequency: route === "" || route === "/shows" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/shows" || route === "/watch" ? 0.9 : 0.7,
  }));
}
