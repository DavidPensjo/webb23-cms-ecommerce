import { siteUrl } from "./settings";

export default function Robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${siteUrl}`,
  };
}
