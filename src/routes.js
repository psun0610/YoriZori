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
import RecipeInfo from "./pages/RecipeInfo";
import ShoppingBasketAdd from "./pages/ShoppingBasketAdd";
import RecipeBookmark from "./pages/RecipeBookmark";

const routes = [
  { path: "/", component: Main, showNav: true },
  { path: "/join", component: Join, showNav: false },
  { path: "/login", component: Login, showNav: false },
  { path: "/home", component: Home, showNav: false },
  { path: "/mypage", component: Mypage, showNav: true },
  { path: "/recipeinfo/:id", component: RecipeInfo, showNav: true },
  { path: "/recipelist", component: RecipeList, showNav: true },
  { path: "/refrigerator", component: Refrigerator, showNav: true },
  { path: "/shoppingbasket", component: ShoppingBasket, showNav: true },
  { path: "/shoppingbasketadd", component: ShoppingBasketAdd, showNav: true },
  { path: "/memberedit", component: MemberEdit, showNav: false },
  { path: "/avoidance", component: Avoidance, showNav: false },
  { path: "/join_complete", component: JoinComplete, showNav: false },
  { path: "/refrigerator_add", component: RefrigeratorAdd, showNav: false },
  { path: "/recipebookmark", component: RecipeBookmark, showNav: true },
];

export default routes;
