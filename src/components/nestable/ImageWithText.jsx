import Link from 'next/link';

export default function ImageWithText({ blok }) {
    console.log(blok);

    const cardContent = (
        <>
            <img 
                src={blok?.image?.filename} 
                alt={blok?.image?.alt || 'Teaser Image'} 
                className="w-[265px] h-[265px] object-cover mx-auto"
            />
            <div className="py-2">
                <div className="flex justify-between">
                    <h3 className="text-lg font-bold">{blok?.title}</h3>
                    <p>{blok?.size}</p>
                </div>
                <p className="text-gray-700">{blok?.price}</p>
            </div>
        </>
    );

    return (
        <section className="w-[265px]">
            {blok?.card_link ? (
                <Link href={blok.card_link}>
                    {cardContent}
                </Link>
            ) : (
                cardContent
            )}
        </section>
    );
}
