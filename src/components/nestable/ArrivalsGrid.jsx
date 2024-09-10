"use client";

import { useEffect, useState } from 'react';
import ArrivalsImage from "./ArrivalsImage";
import { fetchProducts } from "@/app/lib/storyblok";

export default function ArrivalsHero({ blok }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        }
        loadProducts();
    }, []);

console.log(products);

    return (
        <section className="flex flex-col items-center w-full max-w-default">
            <div className="flex flex-row gap-4">
            {products.map((product, index) => (
                    <ArrivalsImage key={index} blok={product.content} />
                ))}
            </div>
        </section>
    );
}