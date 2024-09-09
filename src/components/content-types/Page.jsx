import { StoryblokComponent } from "@storyblok/react/rsc";

//Content-type component (acts as template for all pages)
export default function Page({ blok }) {
    return (
        <main className="flex flex-col items-center justify-center min-h-[80vh] w-full">
             <div className="max-w-[1400px] p-4">
            {blok?.body?.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
            </div>
        </main>
    )
}