import Link from "next/link";

export default function ArrivalsImage({ blok }) {
  const productUrl = `/products/${blok.slug}`;
  return (
    <Link href={productUrl}>
      <section>
        <img
          src={blok?.image?.filename}
          alt={blok?.image?.alt || "Teaser Image"}
          className="w-[368px] h-[521px] object-cover mx-auto"
        />
      </section>
    </Link>
  );
}
