import { fetchProductBySlug } from "@/app/lib/storyblok";
import ProductDetail from "@/components/nestable/ProductDetail";

export default async function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = await fetchProductBySlug(slug);

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-default">
        <ProductDetail blok={product.content} />
      </div>
    </div>
  );
}

export const fetchCache = "no-store";
