import { fetchProductBySlug } from "@/app/lib/storyblok";
import Product from "@/components/content-types/Product";


export default async function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = await fetchProductBySlug(slug);

  return (
      <div className="w-full flex justify-center">
        <Product blok={product.content} />
      </div>
  );
}

export const fetchCache = "no-store";
