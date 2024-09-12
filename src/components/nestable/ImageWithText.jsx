import Image from "next/image";
import Link from "next/link";

export default function ImageWithText({ blok }) {
  const productUrl = `/products/${blok.slug}`;

  const sizeRange =
    blok.sizes.length > 1
      ? `${blok.sizes[0]}-${blok.sizes[blok.sizes.length - 1]}`
      : blok.sizes[0];
  const image = blok?.image?.filename ? `${blok.image.filename}` : null;

  return (
    <Link href={productUrl} className="">
      <section className="relative group w-full transition duration-300 ease-in-out sm:transform sm:hover:scale-105">
        <div className="relative">
          <Image
            className="bg-[#f6f6f6] sm:w-[265px] w-full h-[265px] object-contain mx-auto border-t-2 border-gray-400 sm:border-t-0"
            src={image}
            alt={blok?.image?.alt || "Product Image"}
            width={300}
            height={300}
          />
          <div className="absolute inset-0 bg-black opacity-0 sm:group-hover:opacity-40 transition-opacity duration-200"></div>
        </div>

        <div className="p-1 w-full h-full sm:h-[130px] sm:pt-0 pt-2 relative z-10">
          <div className="flex justify-between sm:w-[265px]">
            <h3 className="text-xl font-bold mb-2">
              {blok?.title?.length > 10
                ? `${blok.title.substring(0, 17)}`
                : blok.title}
            </h3>
            <div className="bg-gray-100 px-1 inline-block h-6 mt-1">
              <p className="font-semibold text-black opacity-60 w-full">
                {sizeRange}
              </p>
            </div>
          </div>
          <p className="sm:font-normal text-black font-semibold pb-2">
            ${blok?.price}
          </p>
        </div>
      </section>
    </Link>
  );
}
