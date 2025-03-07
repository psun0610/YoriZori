import {
  createBrowserRouter,
  RouteObject,
  useLocation,
} from "react-router-dom";
import withAuth from "./withAuth";
import routerInfo, { RouterInfoType } from "./routerInfo";
import Header from "layout/Header";
import Navigation from "layout/Navigation";

const RouteWrapper = ({ path, isProtected, element, name, showNav }: any) => {
  const location = useLocation();
  const isCurrentPath = location.pathname === path;

  const WrappedElement = isProtected ? withAuth(element) : element;

  return (
    <>
      {isCurrentPath && name && <Header name={name} />}
      <WrappedElement />
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
          element={router.element}
          name={router.name}
          showNav={router.showNav}
        />
      ),
    };
  }),
);

export default RouterObject;
