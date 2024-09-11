"use client";
import { useEffect, useState } from 'react';
import ArrivalsImage from "./ArrivalsImage";
import { fetchProducts } from "@/app/lib/storyblok";

export default function ArrivalsImageGrid({ blok }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const fetchedProducts = await fetchProducts();

            const latestProducts = fetchedProducts
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .slice(0, 3);

            setProducts(latestProducts);
        }
        loadProducts();
    }, []);

    return (
<section className="flex flex-col items-center w-full max-w-default">
  <div className="grid grid-cols-1 gap-4 mt-40 sm:grid-cols-2 lg:grid-cols-3">
    {products.map((product, index) => (
      <div
        key={index}
        className={`relative ${index === 1 ? 'lg:translate-y-[-20%]' : ''}`}
      >
        <ArrivalsImage blok={product.content} />
      </div>
    ))}
  </div>
</section>

    );
}
