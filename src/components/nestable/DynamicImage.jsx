export default function DynamicImage({ blok }) {
    const { image, image_width, image_height } = blok;

    // Convert decimal values to percentages
    const widthPercentage = image_width?.value ? `${image_width.value * 100}%` : '100%';
    const heightPercentage = image_height?.value ? `${image_height.value * 100}%` : '100%';

    return (
        <section className="flex flex-col items-center w-full py-14">
            <div 
                className="relative w-full"
                style={{
                    maxWidth: widthPercentage,
                    aspectRatio: image_width?.value / image_height?.value || 1,
                    overflow: 'hidden'
                }}
            >
                <img 
                    src={image?.filename} 
                    alt={image?.alt || 'Teaser Image'} 
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
        </section>
    );
}
