"use client";

import { useEffect, useState } from "react";
import ImageWithText from "./ImageWithText";
import { fetchProductsByCategory, fetchProducts } from "@/app/lib/storyblok";
import { useCategory } from "../../context/CategoryContext";

export default function ProductList() {
  const { selectedCategory } = useCategory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const fetchedProducts = selectedCategory
        ? await fetchProductsByCategory(selectedCategory)
        : await fetchProducts();
      setProducts(fetchedProducts);
    }
    loadProducts();
  }, [selectedCategory]);
  console.log(products);

  return (
    <section className="flex">
      <div className="sm:flex sm:flex-wrap sm:gap-5 max-w-screen-xl mx-auto justify-center w-full">
        {products.map((product, index) => (
          <>
            <ImageWithText key={index} blok={product.content} />
          </>
        ))}
      </div>
    </section>
  );
}
