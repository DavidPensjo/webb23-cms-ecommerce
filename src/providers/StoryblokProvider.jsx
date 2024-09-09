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
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
