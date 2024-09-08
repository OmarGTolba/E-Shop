import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import { ProductsContext } from "./Contexts/ProductsContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import FavoritesPage from "./Pages/FavoritesPage";
import LoginPage from "./Pages/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./Contexts/UserContext";
import "bootstrap/dist/js/bootstrap.bundle.min";
import InstallPWAButton from "./Components/InstallPWAButton/InstallPWAButton ";
export default function App() {
  const { products } = useContext(ProductsContext);
  const { user } = useContext(UserContext);

  useEffect(() => {}, [products]);

  return (
    <>
      {/* <Navbar /> */}
        
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/favorite" Component={FavoritesPage} />
      </Routes>
      <ToastContainer />
    </>
  );
}
