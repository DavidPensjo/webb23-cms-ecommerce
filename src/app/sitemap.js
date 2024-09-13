import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { siteUrl } from "@/app/settings";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});
export default async function sitemap() {
  const pages = await StoryblokCMS.getStaticPaths();

  const sitemap = pages.map((page) => {
    const slugPath = page.slug.join("/");
    return {
      url: `${siteUrl}/${slugPath}`,
    };
  });
  return sitemap;
}
