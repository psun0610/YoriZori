import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import RecipeList from "./pages/RecipeList";
import Refrigerator from "./pages/Refrigerator";
import ShoppingBasket from "./pages/ShoppingBasket";
import MemberEdit from "./pages/MemberEdit";
import Avoidance from "./pages/Avoidance";
import JoinComplete from "./pages/JoinComplete";
import RefrigeratorAdd from "./pages/RefrigeratorAdd";
import RefrigeratorEdit from "./pages/RefrigeratorEdit";
import RecipeInfo from "./pages/RecipeInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/recipeinfo" element={<RecipeInfo />} />
      <Route path="/recipelist" element={<RecipeList />} />
      <Route path="/refrigerator" element={<Refrigerator />} />
      <Route path="/shoppingbasket" element={<ShoppingBasket />} />
      <Route path="/memberedit" element={<MemberEdit />} />
      <Route path="/avoidance" element={<Avoidance />} />
      <Route path="/join_complete" element={<JoinComplete />} />
      <Route path="/refrigerator_add" element={<RefrigeratorAdd />} />
      <Route path="/refrigerator_edit" element={<RefrigeratorEdit />} />
    </Routes>
  );
};

export default App;
