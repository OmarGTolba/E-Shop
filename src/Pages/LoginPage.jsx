import React, { useState, useContext } from "react";
import "./LoginPage.css";
import { UserContext } from "../Contexts/UserContext";
import Footer from "../Components/Footer/Footer";
import InstallPWAButton from "../Components/InstallPWAButton/InstallPWAButton ";

export default function LoginPage() {
  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <>
    <InstallPWAButton/>
      <h1 style={{ textAlign: "center", margin: 0, marginTop: "41px" }}>
        EShop
      </h1>
      <div className="login-container">
        <div className="login-card">
          <h3 className="login-title">LOGIN</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control logInInput"
                placeholder="Email Address"
                style={{ margin: 0, marginBottom: "10px" }}
                required
              />
            </div>
            <div className="form-group">
              <div className="password-wrapper">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control logInInput"
                  placeholder="Password"
                  required
                  style={{ margin: 0, marginBottom: "36px" }}
                />
                <button type="button" className="show-password">
                  👁️
                </button>
              </div>
            </div>
            <button type="submit" className="btn btn-primary login-btn">
              Continue
            </button>
          </form>
        </div>
      </div>
      <Footer height={"175px"} />
      <InstallPWAButton/>
    </>
  );
}
