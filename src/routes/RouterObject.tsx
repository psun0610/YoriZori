import {
  createBrowserRouter,
  RouteObject,
  useLocation,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import routerInfo, { RouterInfoType } from "./routerInfo";
import Header from "layout/Header";
import Navigation from "layout/Navigation";

const RouteWrapper = ({ path, isProtected, element, name, showNav }: any) => {
  const location = useLocation();
  const isCurrentPath = location.pathname === path;

  return (
    <>
      {isCurrentPath && name && <Header name={name} />}
      {isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element}
      {isCurrentPath && showNav && <Navigation />}
    </>
  );
};

const RouterObject = createBrowserRouter(
  routerInfo.map((router: RouterInfoType): RouteObject => {
    return {
      path: router.path,
      element: (
        <RouteWrapper
          path={router.path}
          isProtected={router.isProtected}
          element={<router.element />}
          name={router.name}
          showNav={router.showNav}
        />
      ),
    };
  }),
);

export default RouterObject;
