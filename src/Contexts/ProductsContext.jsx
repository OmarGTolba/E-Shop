import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, [currentPage]);

  async function getProducts() {
    try {
      let response = await fetch(
        `https://assessment.nexus-ecosystem.com/api/products?page=${currentPage}`
      );
      response = await response.json();
    

      setProducts(response.data);
    } catch (error) {
      toast.error("error fetching products");
    }
  }

  return (
    <ProductsContext.Provider value={{ products, setCurrentPage, currentPage }}>
      {children}
    </ProductsContext.Provider>
  );
};
