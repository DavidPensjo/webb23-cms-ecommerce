"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import ButtonPrimary from "@/components/nestable/ButtonPrimary";
import ButtonSecondary from "@/components/nestable/ButtonSecondary";
import ButtonOutlined from "@/components/nestable/ButtonOutlined";
import ButtonRectangle from "@/components/nestable/ButtonRectangle";
import Button from "@/components/nestable/Button";
import Dropdown from "@/components/nestable/Dropdown";
import ImageWithText from "@/components/nestable/ImageWithText";
import ProductList from "@/components/nestable/ProductList";
import CategoryNav from "@/components/nestable/CategoryNav";
import ProductDetail from "@/components/nestable/ProductDetail";
import HomePageImage from "@/components/nestable/HomePageImage";
import ArrivalsImageGrid from "@/components/nestable/ArrivalsImageGrid";
import Hero from "@/components/nestable/Hero";

const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  button_primary: ButtonPrimary,
  button_secondary: ButtonSecondary,
  button_outlined: ButtonOutlined,
  button_rectangle: ButtonRectangle,
  button: Button,
  dropdown: Dropdown,
  image_with_text: ImageWithText,
  product_list: ProductList,
  category_nav: CategoryNav,
  product_detail: ProductDetail,
  homepage_image: HomePageImage,
  arrivals_image_grid: ArrivalsImageGrid,
  hero: Hero,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
