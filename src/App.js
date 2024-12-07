import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;

const Main = () => {
  const location = useLocation();
  const shouldShowNav = routes.find(
    route => route.path === location.pathname,
  )?.showNav;

  return (
    <>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      {shouldShowNav && <Navigation />}
    </>
  );
};
