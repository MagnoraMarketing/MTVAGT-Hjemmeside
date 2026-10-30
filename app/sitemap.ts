import type { MetadataRoute } from "next";
import { ydelser } from "@/content/ydelser";
import { alleIndlaeg } from "@/content/blog";
import { byer } from "@/content/byer";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date();
  const statiske = [
    "",
    "/om-mtvagt",
    "/vi-tilbyder",
    "/byggepladssikring",
    "/vagtfirma",
    "/referencer",
    "/blog",
    "/kontakt",
    "/ledige-stillinger",
    "/privatlivs-politik",
  ].map((sti) => ({
    url: `${SITE.url}${sti}`,
    lastModified: nu,
    changeFrequency: "monthly" as const,
    priority: sti === "" ? 1 : 0.7,
  }));

  const ydelseSider = ydelser.map((y) => ({
    url: `${SITE.url}/vi-tilbyder/${y.slug}`,
    lastModified: nu,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const bySider = byer.map((b) => ({
    url: `${SITE.url}/vagtfirma/${b.slug}`,
    lastModified: nu,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogSider = alleIndlaeg().map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.dato),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...statiske, ...ydelseSider, ...bySider, ...blogSider];
}
