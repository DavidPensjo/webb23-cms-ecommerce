import { StoryblokComponent } from "@storyblok/react";

export default function Grid({ blok }) {
  return (
    <div className="max-w-[1120px] w-full">
      <div className="w-[full] flex sm:items-center sm:justify-between sm:flex-row flex-col mb-10 sm:px-0 px-4">
        {blok.columns.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
}
