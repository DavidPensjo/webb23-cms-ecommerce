import Button from './Button';

export default function CategoriesNav({ blok }) {
    return (
        <section className="flex w-full lg:justify-start justify-center max-w-default mx-auto">
        <nav className="flex flex-wrap sm:gap-5 py-8 sm:py-14 max-w-screen-xl lg:justify-start justify-center sm:m-0 m-1">
            {blok.rectangles.map((rectangle, index) => (
                <Button key={index} blok={rectangle} />
            ))}
        </nav>
        </section>
    );
}