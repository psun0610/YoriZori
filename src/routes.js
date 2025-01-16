import Home from "./pages/member/Home";
import Join from "./pages/member/Join";
import Login from "./pages/member/Login";
import Main from "./pages/Main";
import Mypage from "./pages/member/Mypage";
import RecipeList from "./pages/recipe/RecipeList";
import Refrigerator from "./pages/refrigerator/Refrigerator";
import ShoppingBasket from "./pages/ShoppingBasket";
import MemberEdit from "./pages/member/MemberEdit";
import Avoidance from "./pages/member/Avoidance";
import JoinComplete from "./pages/member/JoinComplete";
import RefrigeratorAdd from "./pages/refrigerator/RefrigeratorAdd";
import RecipeInfo from "./pages/recipe/RecipeInfo";
import ShoppingBasketAdd from "./pages/ShoppingBasketAdd";
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
  { path: "/memberedit", component: MemberEdit },
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
