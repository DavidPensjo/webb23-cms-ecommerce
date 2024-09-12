import { StoryblokComponent } from "@storyblok/react/rsc";

//Content-type component (acts as template for all pages)
export default function Page({ blok }) {
    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] w-full">
             <div className="flex flex-col items-center max-w-[1400px] sm:p-4 w-full mx-auto">
            {blok?.body?.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
            </div>
        </main>
    )
}