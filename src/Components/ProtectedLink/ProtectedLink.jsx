import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../Contexts/UserContext";

const ProtectedLink = ({ to, children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  const handleClick = (e) => {
    if (loading) {
      e.preventDefault();
      return;
    }

    if (!localStorage.getItem("token")) {
      e.preventDefault();
      toast.error("You must log in first!", { toastId: "auth-toast" });
    }
  };

  return (
    <Link
      to={to}
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        textDecoration: "none",
        color: location.pathname === to ? "#00BCFF" : "black",
        fontFamily: "Proxima Nova",
      }}
      onClick={handleClick}
      state={{ from: location }}
    >
      {children}
    </Link>
  );
};

export default ProtectedLink;
