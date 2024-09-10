import Link from 'next/link';

export default function HomepageHero({ blok }) {
    console.log(blok);
    return (
        <section className="flex flex-col items-center w-full max-w-default">
            <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-0">
                <h2 className="p-4">
                    {blok?.title}
                </h2>
                <p className="text-p1 text-text_secondary max-w-[620px] p-2">
                    {blok?.text}
                </p>
                {/* Add button here if needed */}
            </div>
            <img 
                src={blok?.image?.filename} 
                alt={blok?.image?.alt || 'Teaser Image'} 
                className="w-full h-[521px] object-cover py-5"
            />
        </section>
    );
}
