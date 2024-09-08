import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard.jsx/ProductCard";
import { ProductsContext } from "../Contexts/ProductsContext";
import "./CartContainer.css";
import ScrollContainer from "../Components/ScrollContainer/ScrollContainer";
import { CartContext } from "../Contexts/CartContext";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
export default function CartPage() {
  const { cart } = useContext(CartContext);
console.log(cart);
const[totalPrice,setTotalPrice] = useState(0)
useEffect(() => {
  setTotalPrice(cart?.data?.products.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0))
}, [cart])
  return (
    <div style={{ backgroundColor: "#EEF2F4" }}>
      <Navbar text={"Your Cart"} Profile={"true"} color={"#EEF2F4"} />
      <div style={{ backgroundColor: "#EEF2F4" }}>
        <div style={{ paddingTop: "138px" }}>
          <ScrollContainer height={"427px"}>
          {!cart?.data?.products?.length && (<>
          <div className="d-flex flex-column justify-content-center align-items-center w-100 text-center m-auto">
          <h1 >
          You Have No CartItems 
          </h1>
          <Link className=" text-decoration-none text-black" to={'/'}>
                Add Some 
               </Link>
               
          </div>
          </>)}
          
            {cart &&
              cart?.data &&
              cart?.data?.products?.map((product) => (
                <ProductCard
                  key={product?.name}
                  product={product}
                  type="cart"
                  imageUrl={product?.image}
                  productName={product?.name}
                  productDescription={product?.description}
                  productPrice={product?.price}
                />
              ))}
          </ScrollContainer>
        </div>
        <hr />

        <div className="d-flex justify-content-between  container">
          <div className="flex-column">
            <h6>Subtotal</h6>
            <h6>
              Tax <span>(calculated in checkout)</span>
            </h6>
            <h6>
              shipping <span>(free standard over 40 $)</span>
            </h6>
            <h5 style={{ marginTop: "20px" }}>Estimated Total</h5>
          </div>

          <div className="flex-column">
            <h6>{totalPrice}$</h6>
            <h6>${cart?.data?.tax}</h6>
            <h6>{cart?.data?.shipping}%</h6>
            <h5>${(totalPrice + (totalPrice*cart?.data?.tax) + cart?.data?.shipping).toFixed(2)}</h5>
          </div>
        </div>

        <button
          className="w-25 mx-auto d-flex justify-content-center checkout align-items-center"
          style={{ marginBottom: "27px", width: "454px", height: "50px" }}
        >
          Checkout
        </button>
      </div>

      <Footer height={"139px"} />
    </div>
  );
}
