import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserInfo(localStorage.getItem("token"));
   
  }, [localStorage.getItem("token")]);

  async function getUserInfo(token) {
    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/user-data",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        setUser(data.data);
        setUser({ ...user, token: localStorage.getItem("token") });
      } else {
      }
    } catch (error) {}
  }

  const login = async (email, password) => {
    try {
      const response = await fetch(
        "https://assessment.nexus-ecosystem.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        toast.error('failed to login')
        throw new Error(`Error: ${response.statusText}`);
      }
      toast.success("Logged successfully");
      const data = await response.json();

      navigate("/");
      if (data.token) {
        setUser({ email, token: data.token });
        localStorage.setItem("token", data.token);
      } else {
      }
    } catch (error) {}
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
