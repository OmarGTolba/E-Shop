import React from "react";
import "./Hero.module.css";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  return (
    <>
      <div style={{ backgroundColor: "#A67744", height: "40px" }}></div>
      <div style={{ backgroundColor: "#e0e3e8" }}>
        <Navbar color={"#e0e3e8"} />
        <div style={{ height: "98vh", position: "relative" }}>
          <div
            id="hero"
            style={{
              height: "100vh",
              backgroundImage: `url('Group 3284.png')`,
              display: "flex",
              flexDirection: "column",
              width: "1306px",
              backgroundRepeat: "no-repeat",
              marginLeft: "auto",
              paddingLeft: "50px",
              position: "absolute",
              right: 0,
            }}
          >
            <div
              className="hero-text"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "441px",
                marginTop: "309px",
              }}
            >
              <h1 style={{ height: "116px", fontSize: "48px" }}>All Natural</h1>
              <p style={{ fontSize: "16px", marginBottom: "28px" }}>
                A healthier you from the inside out. We’ve sourced the cleanest
                ingredients to create a line of clean skin care.
              </p>
              <button
                style={{
                  width: "173px",
                  height: "35px",
                  textAlign: "center",
                  backgroundColor: "transparent",
                  border: "1px solid #354E57",
                }}
              >
                Shop products
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
