import React, { useContext, useState } from "react";
import "./HomeCard.css";
import { CartContext } from "../../Contexts/CartContext";
import { FavoriteContext } from "../../Contexts/FavoritesContext";

export default function HomeCard({ product }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div id="parent" className="col-md-6 col-lg-4 col-xxl-3 p-0 ">
      <div className="home-card  ">
        <div className="home-image">
          <img src={product.image} alt={product.name} />
          <button
            className="favorite-icon"
            onClick={() => {
              favorites.some((fav) => fav.id === product.id)
                ? removeFromFavorites(product.id)
                : addToFavorites(product.id);
            }}
          >
            {favorites?.some((fav) => fav.id === product.id) ? "❤️" : "♡"}
          </button>
        </div>
        <div className="home-info">
          <h3>{product.name}</h3>
          <h2>
            {product.description.split(" ").slice(0, 4).join(" ") + "..."}
          </h2>
          <h2 className="price">${product.price}</h2>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="add-to-cart"
            style={{ border: "1px solid #354E57" }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
