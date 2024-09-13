import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function sitemap() {
  const pages = await StoryblokCMS.getStaticPaths();
  console.log(pages);

  const sitemap = pages.map((page) => {
    const slugPath = page.slug.join("/");
    return {
      url: `https://webb23-cms-ecommerce.vercel.app/${slugPath}`,
    };
  });
  return sitemap;
}
