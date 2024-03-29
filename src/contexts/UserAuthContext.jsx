import React, { useState, createContext, useContext, useEffect } from "react";

const UserAuthContext = createContext();

// const errorMessage = "";

export const useUserAuthContext = () => {
  return useContext(UserAuthContext);
};

export const UserAuthProvider = ({ children }) => {
  const BASE_URL = "https://tastelink.onrender.com/api/v1/users";

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check localStorage for existing user session
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {

  },[errorMessage])

  const loginUser = async (email, password) => {
    setErrorMessage("")
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setUser(data.existingUser);

        // Save user session to localStorage
        localStorage.setItem("user", JSON.stringify(data.existingUser));
        localStorage.setItem("token", data.token);
      } else {
        // console.error(response);
        const errorData = await response.json(); // Parse error response
        setErrorMessage(errorData)
        console.error(errorData.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logoutUser = () => {
    setErrorMessage("")
    // Clear user and token from state and localStorage
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const createUser = async (userData) => {
    setErrorMessage("")
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (userId) => {
    setErrorMessage("")
    try {
      const response = await fetch(`${BASE_URL}/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const contextValue = {
    user,
    token,
    loginUser,
    logoutUser,
    createUser,
    deleteUser,
    errorMessage,
  };

  return (
    <UserAuthContext.Provider value={contextValue}>
      {children}
    </UserAuthContext.Provider>
  );
};
