import Button from "./Button";
import Link from "next/link";

const sectionPaddings = {
    none: 'p-0',
    small: 'p-2',
    medium: 'p-5',
    large: 'p-10',
};

const headingSizes = {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
};

const headingColors = {
    text_primary: 'text-text_primary',
    text_secondary: 'text-text_secondary',
};

const paragraphSizes = {
    p1: 'text-p1',
    p2: 'text-p2',
    p3: 'text-p3',
    p4: 'text-p4',
};

const paragraphColors = {
    text_primary: 'text-text_primary',
    text_secondary: 'text-text_secondary',
};

export default function Hero({ blok }) {
    console.log(blok);

    const heroAlignment = blok.hero_alignment || 'center';

    const alignmentClasses = {
        left: {
            section: 'flex flex-col items-center text-center lg:justify-start lg:text-left lg:items-start xl:flex-row w-full max-w-default gap-5 mt-5',
            content: 'flex flex-col items-center text-center lg:justify-start lg:text-left lg:items-start md:w-1/2 pr-0 mb-8 md:mb-0'
        },

        center: {
            section: 'flex flex-col items-center w-full max-w-default gap-5 mt-5',
            content: 'flex flex-col items-center justify-center text-center mb-8 md:mb-0'
        }
    };

    const { section: sectionAlignmentClass, content: contentAlignmentClass } = alignmentClasses[heroAlignment] || alignmentClasses.center;

    const sectionPaddingClass = sectionPaddings[blok.hero_padding] || sectionPaddings;
    const titleSizeClass = headingSizes[blok.title_size] || headingSizes.h2;
    const titleColorClass = headingColors[blok.title_color] || headingColors.text_primary;
    const textSizeClass = paragraphSizes[blok.text_size] || paragraphSizes.p1;
    const textColorClass = paragraphColors[blok.text_color] || paragraphColors.text_secondary;
    const backgroundColor = blok.background_color?.value || '#fff';
    const buttonArray = Array.isArray(blok.buttons) ? blok.buttons : [];

    const textFieldWidth = blok.text_field_width ? `${blok.text_field_width}px` : '';

    return (
        <section className={`${sectionAlignmentClass} ${sectionPaddingClass}`}
            style={{ backgroundColor }}>
            <div className={contentAlignmentClass}>

                <h2 className={`${titleSizeClass} ${titleColorClass} ${blok.title_font_weight || ''} py-2 sm:m-0 m-2`}>
                    {blok.title}
                </h2>


                <p
                    className={`${textSizeClass} ${textColorClass} ${blok.text_font_weight || ''} py-2 sm:m-0 m-2`}
                    style={{ maxWidth: textFieldWidth }}
                >
                    {blok.text}
                </p>



                {buttonArray.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                        {buttonArray.map((button, index) => {
                            const buttonUrl = button.button_link?.cached_url || '#';
                            return (
                                <Link key={index} href={buttonUrl}>
                                    <Button blok={button} />
                                </Link>
                            );
                        })}
                    </div>
                )}

            </div>

            {blok.image?.filename && (
                <img
                    src={blok.image.filename}
                    alt={blok.image.alt || ''}
                    className="w-full h-[521px] object-cover"
                />
            )}

        </section>
    );
}
