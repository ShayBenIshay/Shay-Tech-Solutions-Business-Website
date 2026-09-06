import { caseStudies } from "@/lib/caseStudies";
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.shaytechsolutions.com";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

const servicePaths: {
  path: string;
  priority: number;
  changeFrequency?: ChangeFrequency;
}[] = [
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services/estore", priority: 0.8 },
  { path: "/services/website", priority: 0.8 },
  { path: "/services/hosting", priority: 0.7 },
  { path: "/services/advertising", priority: 0.7 },
  { path: "/services/custom-development", priority: 0.7 },
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = servicePaths.map(
    ({ path, priority = 0.7, changeFrequency = "monthly" }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );

  const portfolioEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${SITE_URL}/portfolio/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...serviceEntries,
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...portfolioEntries,
    {
      url: `${SITE_URL}/aboutme`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
