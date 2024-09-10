import ImageWithText from "./ImageWithText";

export default function ProductList({ blok }) {

    return (
        <section className="flex w-default">
            <div className="flex flex-wrap gap-5 max-w-screen-xl mx-auto justify-center">
                {blok.columns.map((product, index) => (
                    <ImageWithText key={index} blok={product} />
                ))}
            </div>
        </section>
    );
}
