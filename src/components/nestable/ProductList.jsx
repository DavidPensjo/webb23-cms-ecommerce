"use client";

import { useEffect, useState } from 'react';
import ImageWithText from "./ImageWithText";
import { fetchProductsByCategory, fetchProducts } from "@/app/lib/storyblok";
import { useCategory } from '../../context/CategoryContext'; // Import the context hook

export default function ProductList() {
    const { selectedCategory } = useCategory();
    const [products, setProducts] = useState([]);

console.log(products);

    useEffect(() => {
        async function loadProducts() {
            const fetchedProducts = selectedCategory
                ? await fetchProductsByCategory(selectedCategory)
                : await fetchProducts(); // Default fetch all products
            setProducts(fetchedProducts);
        }
        loadProducts();
    }, [selectedCategory]); // Re-fetch when selectedCategory changes

    return (
        <section className="flex w-default min-h-[80vh]">
            <div className="sm:flex sm:flex-wrap sm:gap-5 sm:max-w-screen-xl sm:mx-auto sm:justify-center">
                {products.map((product, index) => (
                    <ImageWithText key={index} blok={product.content} />
                ))}
            </div>
        </section>
    );
}
