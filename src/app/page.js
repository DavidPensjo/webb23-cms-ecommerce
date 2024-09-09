import { StoryblokCMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";
import Dropdown from "@/components/nestable/Dropdown";

export async function generateMetadata() {
  return StoryblokCMS.generateMetaFromStory("home");
}

export default async function StartPage({}) {
  try {
    const currentStory = await StoryblokCMS.getStory({ slug: ["home"] });
    if (!currentStory) throw new Error();

    return (
      <>
        <StoryblokStory story={currentStory} />
        <Dropdown />
      </>
    );
  } catch (error) {
    notFound();
  }
}
export const dynamic = StoryblokCMS.isDevelopment
  ? "force-dynamic"
  : "force-static";
