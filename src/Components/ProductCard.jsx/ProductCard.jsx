import React, { useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../../Contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FavoriteContext } from "../../Contexts/FavoritesContext";

export default function ProductCard({ type, product }) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { removeFromFavorites } = useContext(FavoriteContext);
  return (
    <>
      <div id="parent" className="col-md-6 col-xxl-3 position-relative">
        <div className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info">
            <h3>{product.name}</h3>
            <h2 className="price">${product.price}</h2>

            {type === "cart" && (
              <div className="cart-controls">
                <div className="quantity-selector">
                  <button
                    style={{
                      width: "50px",
                      height: "34px",
                      backgroundColor: "transparent",
                      border: ".5px solid black",
                    }}
                    className="decrease-btn"
                  >
                    -
                  </button>
                  <input
                    style={{ width: "148px", height: "34px" }}
                    className="text-center"
                    type="number"
                    value={1}
                    readOnly
                  />
                  <button
                    style={{
                      width: "50px",
                      height: "34px",
                      backgroundColor: "transparent",
                      border: ".5px solid black",
                    }}
                    className="increase-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            {type === "cart" && (
              <div
                className="remove-icon"
                onClick={() => removeFromCart(product.id)}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "25px",
                  cursor: "pointer",
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  style={{ color: "#A67744", fontSize: "18px" }}
                />
              </div>
            )}

            {type === "favorite" && (
              <div className="contain">
                <button
                  className="add-to-cart-btn"
                  style={{ border: "1px solid #354E57" }}
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to cart
                </button>
                <button
                  onClick={() => {
                    removeFromFavorites(product.id);
                  }}
                  className="favorite"
                >
                  ❤️
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
