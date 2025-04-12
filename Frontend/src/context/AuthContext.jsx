// AuthContext.js
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true); // 🧠 key part

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
    setCheckingAuth(false); // 🔓 done checking
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, checkingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
