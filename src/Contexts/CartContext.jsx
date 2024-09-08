import React, { createContext, useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchUserCart();
    }
  }, [localStorage.getItem("token")]);

  const fetchUserCart = async () => {
    if (!localStorage.getItem("token")) return;

    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/user-cart",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setCart(data);
      } else {
        toast.error("error fetching Cart");
      }
    } catch (error) {
      toast.error("error fetching Cart");
    }
  };
  const addToCart = async (productId) => {
   

    if (!user) {
      toast.error("You must login first");
      return;
    }

    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/add-to-cart",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: productId,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        fetchUserCart();
        toast.success("Product added successfully");
      } else {
        toast.error("error adding product to Cart");
      }
    } catch (error) {}
  };

  const removeFromCart = async (productId) => {
    if (!user || !user.token) {
      return;
    }

    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/remove-form-cart",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: productId,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        fetchUserCart();
        toast.success("Product removed successfully");
      } else {
        toast.error("error fetching Cart");
      }
    } catch (error) {
      toast.error("error fetching Cart");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, fetchUserCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
