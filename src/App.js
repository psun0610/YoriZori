import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main/Main";
import Mypage from "./pages/Mypage";
import Recipe from "./pages/Recipe";
import RecipeList from "./pages/RecipeList";
import Refrigerator from "./pages/Refrigerator";
import ShoppingBasket from "./pages/ShoppingBasket";
import MemberEdit from "./pages/MemberEdit";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipelist" element={<RecipeList />} />
        <Route path="/refrigerator" element={<Refrigerator />} />
        <Route path="/shoppingbasket" element={<ShoppingBasket />} />
        <Route path="/memberedit" element={<MemberEdit />} />
      </Routes>
    </>
  );
};

export default App;
