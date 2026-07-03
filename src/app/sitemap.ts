import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/timeline",
    "/skills",
    "/experience",
    "/resume",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjects().map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
