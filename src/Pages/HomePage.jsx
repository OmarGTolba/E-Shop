import "./HomePage.css";
import React, { useContext, useState } from "react";
import { ProductsContext } from "../Contexts/ProductsContext";
import HomeCard from "../Components/HomeCard.jsx/HomeCard";
import Hero from "../Components/Hero/Hero";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Pagination from "../Components/Pagination/Pagination";
import InstallPWAButton from "../Components/InstallPWAButton/InstallPWAButton ";
import LoadingCard from "../Components/LoadingCard/LoadingCard";
export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { products } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState(true);
  const categories = ["All", "Sun", "Vitiligio", "Ezcema", "Psoriasis"];
  useEffect(() => {
    let filtered = products;
    if (products && filteredProducts) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
    if(selectedCategory ==="All"){
      setPagination(true)
    }
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
      setPagination(false);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if(!e.target.value){
      setPagination(true)
    }
  };

  const handleSearchClick = () => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
      setPagination(true);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPagination(false);
    }
    if(!searchQuery){
      setPagination(true)
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <InstallPWAButton />
      <Hero />
      <div style={{ backgroundColor: "#EEF3F4" }}>
        <div
          className="container d-none d-xl-block"
          style={{ maxWidth: "646px", margin: "auto", paddingTop: "102px" }}
        >
          <div
            className="search-container"
            style={{ position: "relative", width: "646px", height: "40px" }}
          >
            <input
              type="text"
              className="search-input "
              style={{
                width: "100%",
                height: "40px",
                border: "1px solid #956A53",
                borderColor: "#956A53",
              }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              style={{
                position: "absolute",
                backgroundColor: "#A67744",
                border: "1px solid #956A53",
                width: "65px",
                height: "40px",
                right: "0",
              }}
              className="search-button"
              onClick={handleSearchClick}
            >
              {" "}
              <img src="Icon map-search.png" style={{}} alt="Search" />
            </button>
          </div>

          <div
            className="small-nav d-flex justify-content-evenly"
            style={{ marginTop: "47px" }}
          >
            {categories.map((category, index) => (
              <span
                key={index}
                className={`category-item ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="container" style={{ paddingTop: "48px" }}>
          <div className="row p-0 m-0">
            {!loading &&
              filteredProducts &&
              filteredProducts?.map((product) => (
                <HomeCard key={product.id} product={product} />
              ))}

            {loading && (
              <>
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
              </>
            )}
          </div>
        </div>
      </div>
      {pagination && <Pagination />} <Footer height={"175px"} />
    </>
  );
}
