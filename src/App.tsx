import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes.js";
import Navigation from "./layout/Navigation";
import Header from "./layout/Header";

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
  const name = routes.find(route => route.path === location.pathname)?.name;

  return (
    <>
      {name && <Header name={name} />}
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      {shouldShowNav && <Navigation />}
    </>
  );
};
