import { StoryblokComponent } from "@storyblok/react/rsc";
import { CategoryProvider } from "../../context/CategoryContext";

//Content-type component (acts as template for all pages)
export default function Page({ blok }) {
  return (
    <CategoryProvider>
      <main className="flex flex-col items-center justify-center min-h-[80vh] w-full">
        <div className="sm:flex flex-col items-center sm:max-w-[1400px] sm:p-4 w-full mx-auto">
          {blok?.body?.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
        </div>
      </main>
    </CategoryProvider>
  );
}
