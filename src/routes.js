import Home from "pages/Member/LoginRequired";
import Join from "pages/Member/Join";
import Login from "pages/Member/Login";
import Main from "pages/Main";
import Mypage from "pages/Member/MyPage";
import RecipeList from "pages/Recipe/RecipeList";
import Refrigerator from "pages/RefrigeratorManagement/Refrigerator";
import Basket from "pages/BasketManagement/Basket";
import MemberEdit from "pages/Member/MemberEdit";
import Avoidance from "pages/Member/Avoidance";
import JoinComplete from "pages/Member/JoinComplete";
import RefrigeratorAdd from "pages/RefrigeratorManagement/RefrigeratorAdd";
import RecipeInfo from "pages/Recipe/RecipeInfo";
import BasketAdd from "pages/BasketManagement/BasketAdd";
import RecipeBookmark from "pages/Recipe/RecipeBookmark";

const routes = [
  { path: "/", component: Main, showNav: true },
  { path: "/join", component: Join },
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  {
    path: "/mypage",
    component: Mypage,
    showNav: true,
    name: "냉장고 재료 등록",
  },
  {
    path: "/recipeinfo/:id",
    component: RecipeInfo,
    showNav: true,
    name: "레시피",
  },
  {
    path: "/recipelist",
    component: RecipeList,
    showNav: true,
    name: "레시피",
  },
  { path: "/refrigerator", component: Refrigerator, showNav: true },
  {
    path: "/basket",
    component: Basket,
    showNav: true,
    name: "장바구니",
  },
  {
    path: "/basket/add",
    component: BasketAdd,
    showNav: true,
    name: "장바구니 재료 등록",
  },
  { path: "/member/edit", component: MemberEdit },
  { path: "/avoidance", component: Avoidance },
  { path: "/join/complete", component: JoinComplete },
  {
    path: "/refrigerator/add",
    component: RefrigeratorAdd,
    showNav: false,
  },
  {
    path: "/recipebookmark",
    component: RecipeBookmark,
    showNav: true,
    name: "레시피 북마크",
  },
];

export default routes;
