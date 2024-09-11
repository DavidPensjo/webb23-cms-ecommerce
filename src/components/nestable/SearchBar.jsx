"use client";

import React, { useState, useEffect, useRef } from "react";
import { fetchProducts } from "@/app/lib/storyblok";
import { Search } from "lucide-react";
import Link from "next/link";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const inputRef = useRef(null);
  const searchIconRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    let noResultsTimeout;

    if (searchQuery === "") {
      setFilteredProducts([]);
      setFadeIn(false);
      setShowNoResults(false);
      setTimeout(() => setIsDropdownVisible(false), 300);
    } else {
      const results = products.filter((product) =>
        product.content.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
      setIsDropdownVisible(true);

      
      setTimeout(() => {
        setFadeIn(true);
      }, 100);

      
      if (results.length === 0) {
        noResultsTimeout = setTimeout(() => {
          setShowNoResults(true);
        }, 200);
      } else {
        setShowNoResults(false);
      }
    }

    return () => {
      clearTimeout(noResultsTimeout);
    };
  }, [searchQuery, products]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        searchIconRef.current &&
        !searchIconRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {    
        setTimeout(() => {
          setIsSearchVisible(false);
          setIsDropdownVisible(false);
        }, 300);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearchBar = () => {
    setIsSearchVisible(true);
    setFadeIn(true);
    setIsDropdownVisible(true);
    inputRef.current.focus();
  };

  const handleItemClick = () => {
    setFadeIn(false);
    setTimeout(() => {
      setIsSearchVisible(false);
      setIsDropdownVisible(false);
    }, 300);
  };

  return (
    <div className="relative flex items-center">
      <Search
        onClick={toggleSearchBar}
        className="cursor-pointer text-gray-500"
        size={24}
        ref={searchIconRef}
      />

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden pl-3 ${
          isSearchVisible ? "w-[212px] opacity-100" : "w-0 opacity-0"
        }`}
        style={{
          transitionProperty: "width, opacity",
        }}
      >
        <input
          type="text"
          ref={inputRef}
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 w-full h-[44px] border-l-2 border-r-2 border-transparent focus:border-black focus:outline-none transition-opacity duration-300 ease-in-out"
        />
      </div>

      {isDropdownVisible && searchQuery !== "" && (
        <ul
          ref={dropdownRef}
          className={`absolute left-9 right-0 bg-white drop-shadow-lg z-10 border-t w-[200px] transition-opacity duration-300 ease-in-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: "100%", marginTop: "1px" }}
        >
          {isLoading ? (
            <li>Loading products...</li>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link
                href={`/products/${product.content.slug}`}
                key={product.id}
                passHref
                onClick={handleItemClick}
              >
                <li
                  className={`border-x-2 p-1 text-p3 font-semibold pl-2 hover:underline cursor-pointer transition-opacity duration-700 ease-in-out`}
                  style={{
                    opacity: fadeIn ? 1 : 0,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {product.content.title}
                </li>
              </Link>
            ))
          ) : showNoResults ? (
            <li className="p-1 text-p3 font-semibold pl-2 text-text_secondary">No results found.</li>
          ) : null}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
