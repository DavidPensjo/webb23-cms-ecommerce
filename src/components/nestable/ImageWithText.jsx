import Link from "next/link";

export default function ImageWithText({ blok }) {
  const productUrl = `/products/${blok.slug}`;
  return (
    <Link href={productUrl}>
      <section className="lg:w-[265px] lg:block flex ">
        <img
          src={blok?.image?.filename}
          alt={blok?.image?.alt || "Teaser Image"}
          className="lg:w-[265px] lg:h-[265px] lg:object-cover lg:mx-auto w-[130px] h-[130px] object-cover mx-auto"
        />
        <div className="lg:p-1">
          <div className="lg:flex lg:justify-between">
            <h3 className="text-xl font-bold lg:mb-2">{blok?.title}</h3>
            <p>{blok?.size}</p>
          </div>
          <p className="text-gray-700">{blok?.price}</p>
        </div>
      </section>
    </Link>
  );
}
