import { caseStudies } from "@/lib/caseStudies";
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.shaytechsolutions.com";

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]["changeFrequency"]
>;

// Redesign (2026-09): /services/* and /aboutme are 301-redirected to /plans, /project, /about
// (see public/.htaccess) — a sitemap should list canonical destinations, not redirect sources.
const servicePaths: {
  path: string;
  priority: number;
  changeFrequency?: ChangeFrequency;
}[] = [
  { path: "/plans", priority: 0.9, changeFrequency: "weekly" },
  { path: "/project", priority: 0.8 },
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
      url: `${SITE_URL}/about`,
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
