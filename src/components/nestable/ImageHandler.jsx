export default function ImageHandler({ blok }) {
    const { 
        image, 
        width = 'w-full', 
        height = 'h-[300px]', 
        objectFit = 'cover', 
        paddingY = 'py-10' 
    } = blok;

    return (
        <section className={`flex flex-col items-center w-full ${paddingY}`}>
            {image?.filename && (
                <img
                    src={image.filename}
                    alt={image.alt || 'Teaser Image'}
                    className={`${width} ${height} object-${objectFit}`}
                />
            )}
        </section>
    );
}
