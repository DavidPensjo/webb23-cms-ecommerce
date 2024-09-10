import Link from "next/link";

export default function ImageWithText({ blok }) {
  const productUrl = `/products/${blok.slug}`;
    console.log(blok)
  return (
    <Link href={productUrl}>
      <section className="w-[265px]">
        <img
          src={blok?.content?.image?.filename}
          alt={blok?.content?.image?.alt || "Teaser Image"}
          className="w-[265px] h-[265px] object-cover mx-auto"
        />
        <div className="p-1">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold mb-2">{blok?.content.title}</h3>
            <p>{blok?.content?.size}</p>
          </div>
          <p className="text-gray-700">{blok?.content?.price}</p>
        </div>
      </section>
    </Link>
  );
}
