"use client"

import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}

export default CategoryContext;
