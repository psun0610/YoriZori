import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "stores/useAuthStore";
import { JSX, useEffect, useState } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const useAuth = useAuthStore.getState();
  const [user, setUser] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkToken = async () => {
      if (useAuth.isLogin) {
        const isValid = await useAuth.verifyToken(); // 토큰 유효성 검사
        setUser(isValid);
      } else {
        setUser(false);
      }
    };

    checkToken();
  }, [useAuth.accessToken]);

  if (user === null) {
    return <div>Loading...</div>;
  }

  return user ? (
    children
  ) : (
    <Navigate to={"/loginRequired"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
