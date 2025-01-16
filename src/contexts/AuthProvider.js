import React, { createContext, useState, useEffect, useContext } from "react";
import AxiosAuth from "../components/AxiosAuth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // 토큰 검증 및 사용자 정보 가져오기
  const verifyToken = async accessToken => {
    try {
      const response = await AxiosAuth.post("/auth/validate", {
        token: accessToken,
      });
      setIsAuthenticated(true);
      setUser(response.data.user); // 사용자 정보를 저장
    } catch (error) {
      console.error("Token verification failed", error);
      logout();
    }
  };

  const login = newToken => {
    setToken(newToken);
    localStorage.setItem("accessToken", newToken);
    verifyToken(newToken); // 로그인 시 토큰 검증
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      verifyToken(storedToken); // 앱 로드 시 토큰 검증
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
