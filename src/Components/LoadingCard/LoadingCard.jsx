import React from "react";

export default function LoadingCard() {
  return (
      <div id="parent" className="col-md-3 p-0">
        <div className="home-card">
          <div className="home-image">
            <div className="placeholder-glow w-100 h-100">
              <span className="placeholder col-12 h-100"></span>
            </div>
          </div>
          <div className="home-info">
            <h3 className="placeholder-glow">
              <span className="placeholder col-6"></span>
            </h3>
            <h2 className="placeholder-glow">
              <span className="placeholder col-8"></span>
            </h2>
            <h2 className="price placeholder-glow">
              <span className="placeholder col-4"></span>
            </h2>
            <button
              className="add-to-cart placeholder-glow"
              disabled
              style={{
                border: "1px solid #354E57",
              }}
            >
              <span className="placeholder col-4"></span>
            </button>
          </div>
        </div>
      </div>
    );
}
