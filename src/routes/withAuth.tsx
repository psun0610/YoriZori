import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "stores/useAuthStore";
import { useEffect, useState } from "react";

const withAuth = (Component: React.ComponentType) => {
  return (props: any) => {
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
      <Component {...props} />
    ) : (
      <Navigate to="/loginRequired" state={{ from: location }} replace />
    );
  };
};

export default withAuth;
