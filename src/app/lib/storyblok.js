import StoryblokClient from "storyblok-js-client";

const accessToken =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_STORYBLOK_TOKEN
    : process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN;

const Storyblok = new StoryblokClient({
  accessToken,
});

export async function fetchProducts() {
  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  const res = await Storyblok.get("cdn/stories", {
    starts_with: "products/",
    version,
    cv: new Date().getTime(),
  });

  return res.data.stories;
}

export async function fetchProductBySlug(slug) {
  const version = process.env.NODE_ENV === "production" ? "published" : "draft";

  const res = await Storyblok.get(`cdn/stories/products/${slug}`, {
    version,
    cv: new Date().getTime(),
  });

  return res.data.story;
}
