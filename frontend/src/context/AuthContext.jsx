import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      // Only attempt to fetch user if they were previously logged in
      const wasLoggedIn = localStorage.getItem("wasLoggedIn");
      
      if (!wasLoggedIn) {
        setLoading(false);
        return;
      }

      try {
        const res = await getMe();
        setUser(res.data.user);
      } catch (err) {
        localStorage.removeItem("wasLoggedIn");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        setUser: (userData) => {
          setUser(userData);
          if (userData) {
            localStorage.setItem("wasLoggedIn", "true");
          } else {
            localStorage.removeItem("wasLoggedIn");
          }
        },
        loading 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
