import Home from "./pages/Member/LoginRequired/LoginRequired";
import Join from "./pages/Member/Join/Join";
import Login from "./pages/Member/Login/Login";
import Main from "./pages/Main/Main";
import Mypage from "./pages/Member/MyPage/MyPage";
import RecipeList from "./pages/Recipe/RecipeList";
import Refrigerator from "./pages/RefrigeratorManagement/Refrigerator/Refrigerator";
import ShoppingBasket from "./pages/BasketManagement";
import MemberEdit from "./pages/Member/MemberEdit/MemberEdit";
import Avoidance from "./pages/Member/Avoidance";
import JoinComplete from "./pages/Member/JoinComplete/JoinComplete";
import RefrigeratorAdd from "./pages/RefrigeratorManagement/RefrigeratorAdd/RefrigeratorAdd";
import RecipeInfo from "./pages/recipe/RecipeInfo";
import ShoppingBasketAdd from "./pages/BasketManagement/BasketAdd/ShoppingBasketAdd";
import RecipeBookmark from "./pages/recipe/RecipeBookmark";

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
    path: "/shoppingbasket",
    component: ShoppingBasket,
    showNav: true,
    name: "장바구니",
  },
  {
    path: "/shoppingbasketadd",
    component: ShoppingBasketAdd,
    showNav: true,
    name: "장바구니 재료 등록",
  },
  { path: "/Memberedit", component: MemberEdit },
  { path: "/avoidance", component: Avoidance },
  { path: "/join_complete", component: JoinComplete },
  {
    path: "/refrigerator_add",
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
