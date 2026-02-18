import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // New Categories Added
  const [products] = useState([
    { id: 1, name: "TMT Steel Bars", category: "Construction" },
    { id: 2, name: "MS Plates", category: "Industrial" },
    { id: 3, name: "GI Pipes", category: "Plumbing" },
    { id: 4, name: "Steel Sheets", category: "Fabrication" },
    { id: 5, name: "Beams & Columns", category: "Construction" },
    { id: 6, name: "Stainless Steel Coils", category: "Industrial" }
  ]);

  const categories = ["Construction", "Industrial", "Plumbing", "Fabrication"];

  return (
    <ProductContext.Provider value={{ products, categories, searchTerm, setSearchTerm }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
