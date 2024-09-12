"use client";

import React from 'react';
import Button from './Button';
import { useCategory } from '../../context/CategoryContext'; 

export default function CategoriesNav({ blok }) {
  const { setSelectedCategory, selectedCategory } = useCategory(); 

  const categories = blok?.rectangles || [];
  
  const handleClick = (slug) => {
    if (slug === selectedCategory) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(slug);
    }
  };

  return (
    <section>
      <nav>
        {categories.length > 0 ? (
          categories.map((rectangle, index) => {
            const buttonStyle = rectangle.slug === selectedCategory ? "black" : rectangle.button_style;

            return (
              <Button
                key={index}
                blok={{ ...rectangle, button_style: buttonStyle }} 
                onClick={() => handleClick(rectangle.slug)} 
              />
            );
          })
        ) : (
          <p>No categories available.</p> 
        )}
      </nav>
    </section>
  );
}
