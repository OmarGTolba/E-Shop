import React from "react";
import ScrollContainer from "../Components/ScrollContainer/ScrollContainer";
import { useContext } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import ProductCard from "../Components/ProductCard.jsx/ProductCard";
import { FavoriteContext } from "../Contexts/FavoritesContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const { products } = useContext(ProductsContext);
  const { favorites } = useContext(FavoriteContext);


  return (
    <>
      <Navbar Profile={"true"} text={"Your Favorites"} color={"#EEF2F4"} />

      <div
        style={{
          paddingTop: "138px",
          paddingBottom: "30px",
          backgroundColor: "#EEF2F4",
        }}
      >
        <ScrollContainer height={"75vh"}>
         
         
        {!favorites.length && (<>
          <div className="d-flex flex-column justify-content-center align-items-center w-100 text-center m-auto">

          <h1 >
          You Have No favorite items 
          </h1>
          <Link className=" text-decoration-none text-black" to={'/'}>
                Add Some 
               </Link>
               
          </div>
          </>)}
         
         
          {favorites &&
            favorites?.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                type="favorite"
                imageUrl={product.image}
                productName={product.name}
                productDescription={product.description}
                productPrice={product.price}
              />
            ))}
        </ScrollContainer>
      </div>

      <Footer height={"175px"} />
    </>
  );
}
