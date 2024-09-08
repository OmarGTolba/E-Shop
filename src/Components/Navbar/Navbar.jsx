import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProtectedLink from "../ProtectedLink/ProtectedLink";

export default function Navbar({ text, color, Profile }) {
  const location = useLocation();

  return (
    <div
      style={{ backgroundColor: color, height: "138px" }}
      className="w-100 position-absolute z-3  "
    >
      <div
        className="d-flex container justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="row text-center align-items-center w-100">
          <div className="col-4 text-start" id="pagetitle">
            {text && <h1>{text}</h1>}
          </div>
          <div className="col-4 " id="logo">
            <Link
              to="/"
              style={{
                fontSize: "32px",
                textDecoration: "none",
                color: "black",
                fontFamily: "somantic-Round",
              }}
            >
              EShop
            </Link>
          </div>
          <div
            className="col-4 d-flex justify-content-evenly align-items-center"
            id="NavbarCollection"
          >
            <nav className="navbar w-100 justify-content-center navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse w-100 navbar-collapse justify-content-evenly align-items-center"
                id="navbarNav"
              >
                <ul className="navbar-nav w-100 align-items-center justify-content-evenly">
                
                  <li className="nav-item">
                    <ProtectedLink className="nav-link" to="/favorite">
                      Favorites
                    </ProtectedLink>
                  </li>
                  <li className="nav-item">
                    <ProtectedLink className="nav-link" to="/cart">
                      Cart
                    </ProtectedLink>
                  </li>
            { !localStorage.getItem('token') && (      <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        color:
                          location.pathname === "/login" ? "blue" : "black",
                        fontFamily: "Proxima Nova",
                      }}
                    >
                      Login
                    </Link>
                  </li>)}

                  {localStorage.getItem('token') && (      <li className="nav-item">
                    <Link
                    onClick={()=>{localStorage.setItem('token','')}}
                      className="nav-link"
                      to="/login"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        color:
                          location.pathname === "/login" ? "blue" : "black",
                        fontFamily: "Proxima Nova",
                      }}
                    >
                      Logout
                    </Link>
                  </li>)}
                  <li className="nav-item">
                    <ProtectedLink className="nav-link" to="/cart">
                      {Profile && (
                        <img
                          src="ava1.png"
                          className="d-none d-lg-flex"
                          alt=""
                        />
                      )}
                    </ProtectedLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
