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
import ImageWithText from "@/components/nestable/ImageWithText";
import ProductList from "@/components/nestable/ProductList";
import ShopListHero from "@/components/nestable/ShopListHero";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "button_primary": ButtonPrimary,
  "button_secondary": ButtonSecondary,
  "button_outlined": ButtonOutlined,
  "button_rectangle": ButtonRectangle,
  "button": Button,
  "image_with_text": ImageWithText,
  "product_list": ProductList,
  "shop_list_hero": ShopListHero
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}