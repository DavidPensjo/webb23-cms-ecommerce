export default function ImageWithText({ blok }) {
    return (
        <section className="w-[265px]">
            <img 
                src={blok?.image?.filename} 
                alt={blok?.image?.alt || 'Teaser Image'} 
                className="w-[265px] h-[265px] object-cover mx-auto"
            />
            <div className="p-1">
                <div className="flex justify-between">
                <h3 className="text-xl font-bold mb-2">{blok?.title}</h3>
                <p>{blok?.size}</p>
                </div>
                <p className="text-gray-700">{blok?.price}</p>
            </div>
        </section>
    );
}
