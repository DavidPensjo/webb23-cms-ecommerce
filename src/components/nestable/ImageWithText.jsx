import Link from "next/link";

export default function ImageWithText({ blok }) {
  const productUrl = `/products/${blok.slug}`;

  const sizeRange =
    blok.sizes.length > 1
      ? `${blok.sizes[0]}-${blok.sizes[blok.sizes.length - 1]}`
      : blok.sizes[0];

  return (
    <Link href={productUrl}>
      <section className="sm:w-[265px] sm:block flex justify-around w-[400px] sm:pb-0 pb-8">
        <img
          src={blok?.image?.filename}
          alt={blok?.image?.alt || "Teaser Image"}
          className="sm:w-[265px] sm:h-[265px] sm:object-cover sm:mx-auto w-[300px] h-[300px] object-cover mx-auto"
        />
        <div className="sm:p-1 w-[130px] h-[130px] pl-3 sm:block flex flex-col justify-between">
          <div className="sm:flex sm:justify-between sm:w-[260px]">
            <h3 className="text-xl font-bold sm:mb-2">
              {blok?.title?.length > 10 ? `${blok.title.substring(0, 17)}` : blok.title}
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
