import React, { createContext, useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetchUserFavorites();
  }, [user]);

  const fetchUserFavorites = async () => {
    if (!localStorage.getItem("token")) return;

    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/user-favorites",
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

        setFavorites(data.data);
      } else {
        toast.error("Failed to fetch the favorites");
      }
    } catch (error) {
      toast.error("Error fetching favorites:", error);
    }
  };

  const addToFavorites = async (productId) => {
    if (!localStorage.getItem("token")) {
      toast.error("User is not logged in");
      return;
    }

    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/add-to-favorites",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: productId,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        fetchUserFavorites();
       
      } else {
        toast.error("error adding to favorites");
      }
    } catch (error) {}
  };

  const removeFromFavorites = async (productId) => {
    if (!localStorage.getItem("token")) {
      return;
    }
    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/remove-form-favorites",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: productId,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        fetchUserFavorites();
      } else {
        toast.error("error removing from favorites");
      }
    } catch (error) {}
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        fetchUserFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
