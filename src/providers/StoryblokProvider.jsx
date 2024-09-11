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
import ShopListHero from "@/components/nestable/ShopListHero";
import CategoryNav from "@/components/nestable/CategoryNav";
import ProductDetail from "@/components/nestable/ProductDetail";
import HomePageHero from "@/components/nestable/HomePageHero"; //Was called HomepageHero, Changed name to HomePageHero. Had to add this comment to push change. Might be reason Vercel build failed.
import HomePageImage from "@/components/nestable/HomePageImage";
import ArrivalsHero from "@/components/nestable/ArrivalsHero";
import ArrivalsImageGrid from "@/components/nestable/ArrivalsImageGrid";
import About from "@/components/content-types/About";
import Info from "@/components/nestable/Info";

const components = {
  page: Page,
  about: About,
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
  shop_list_hero: ShopListHero,
  category_nav: CategoryNav,
  product_detail: ProductDetail,
  homepage_hero: HomePageHero,
  homepage_image: HomePageImage,
  arrivals_hero: ArrivalsHero,
  arrivals_image_grid: ArrivalsImageGrid,
  info: Info,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
