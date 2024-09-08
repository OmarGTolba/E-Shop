import React, { useContext } from "react";
import { ProductsContext } from "../../Contexts/ProductsContext";
import "./Pagination.css";
const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(ProductsContext);
  const pageNumbers = [1, 2, 3, 4, 5];

  return (
    <div
      className="pagination w-100 pb-2 m-auto d-flex justify-content-center"
      style={{ backgroundColor: "#EEF3F4" }}
    >
      <button
        className={`page-btn ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ border: "1px solid #354E57", backgroundColor: "transparent" }}
      >
        Previous
      </button>

      {pageNumbers?.map((number) => (
        <button
          style={{
            border: "1px solid #354E57",
            backgroundColor: "transparent",
          }}
          key={number}
          className={`page-btn mx-1 ${currentPage === number ? "active" : ""}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}

      <button
        className={`page-btn ${currentPage === 5 ? "disabled" : ""}`}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ border: "1px solid #354E57", backgroundColor: "transparent" }}
        disabled={currentPage === 5}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
