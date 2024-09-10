export default function HomePageImage({ blok }) {
    return (
        <section className="flex flex-col items-center w-full">
            <img 
                src={blok?.image?.filename} 
                alt={blok?.image?.alt || 'Teaser Image'} 
                className="w-full h-[300px] object-cover py-10"
            />
        </section>
    );
}