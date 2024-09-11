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
import About from "@/components/content-types/About";
import Info from "@/components/nestable/Info";
import DynamicImage from "@/components/nestable/DynamicImage";
import ArrivalsImageGrid from "@/components/nestable/ArrivalsImageGrid";
import Hero from "@/components/nestable/Hero";
import ImageHandler from "@/components/nestable/ImageHandler";
import Product from "@/components/content-types/Product";

const components = {
  page: Page,
  about: About,
  teaser: Teaser,
  richtext: RichTextDefault,
  button: Button,
  dropdown: Dropdown,
  image_with_text: ImageWithText,
  product_list: ProductList,
  categories_nav: CategoriesNav,
  dynamic_image: DynamicImage,
  arrivals_image_grid: ArrivalsImageGrid,
  info: Info,
  hero: Hero,
  image_handler: ImageHandler,
  Product,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
