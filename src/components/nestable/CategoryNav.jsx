import ButtonRectangle from './ButtonRectangle';

export default function CategoryNav({ blok }) {
    return (
        <section className="flex w-full lg:justify-start justify-center max-w-default mx-auto">
        <nav className="flex flex-wrap gap-5 py-8 sm:py-14 max-w-screen-xl lg:justify-start justify-center">
            {blok.rectangles.map((rectangle, index) => (
                <ButtonRectangle key={index} blok={rectangle} />
            ))}
        </nav>
        </section>
    );
}