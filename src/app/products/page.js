import { fetchProducts } from "@/app/lib/storyblok";
import ProductList from "@/components/nestable/ProductList";

export default async function ProductListPage() {
  const products = await fetchProducts();

  return <ProductList blok={{ columns: products }} />;
}

export const fetchCache = 'no-store';