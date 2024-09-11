"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Button from "@/components/nestable/Button";
import Dropdown from "@/components/nestable/Dropdown";
import ImageWithText from "@/components/nestable/ImageWithText";
import ProductList from "@/components/nestable/ProductList";
import CategoriesNav from "@/components/nestable/CategoriesNav";
import ProductDetail from "@/components/nestable/ProductDetail";
import DynamicImage from "@/components/nestable/DynamicImage";
import ArrivalsImageGrid from "@/components/nestable/ArrivalsImageGrid";
import Hero from "@/components/nestable/Hero";
import ImageHandler from "@/components/nestable/ImageHandler";

const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  button: Button,
  dropdown: Dropdown,
  image_with_text: ImageWithText,
  product_list: ProductList,
  categories_nav: CategoriesNav,
  product_detail: ProductDetail,
  dynamic_image: DynamicImage,
  arrivals_image_grid: ArrivalsImageGrid,
  hero: Hero,
  image_handler: ImageHandler,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
