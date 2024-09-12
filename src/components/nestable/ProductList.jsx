"use client";

import { useEffect, useState } from 'react';
import ImageWithText from "./ImageWithText";
import { fetchProducts } from "@/app/lib/storyblok";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        }
        loadProducts();
    }, []);


    return (
        <section className="flex w-default">
            <div className="sm:flex sm:flex-wrap sm:gap-5 sm:max-w-screen-xl sm:mx-auto sm:justify-center">
                {products.map((product, index) => (
                    <ImageWithText key={index} blok={product.content} />
                ))}
            </div>
        </section>
    );
}
