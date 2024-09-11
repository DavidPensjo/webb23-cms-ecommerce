import ButtonSecondary from "./ButtonSecondary";
export default function HomepageHero({ blok }) {
    return (
        <section className="flex flex-col items-center w-full max-w-default">
            <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-0">
                <h2 className="p-4">
                    {blok?.title}
                </h2>
                <p className="text-p1 text-text_secondary max-w-[620px] p-2">
                    {blok?.text}
                </p>
                

                {blok.button.map((button, index) => (
                    <ButtonSecondary key={index} blok={button} />
                ))}

            </div>
            <img
                src={blok?.image?.filename}
                alt={blok?.image?.alt || 'Teaser Image'}
                className="w-full h-[521px] object-cover pt-7"
            />
        </section>
    );
}
