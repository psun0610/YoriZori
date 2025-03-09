import LoginRequired from "pages/Member/LoginRequired";
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
import RefrigeratorAddEdit from "pages/RefrigeratorManagement/RefrigeratorAddEdit";
import RecipeInfo from "pages/Recipe/RecipeInfo";
import BasketAdd from "pages/BasketManagement/BasketAdd";
import RecipeBookmark from "pages/Recipe/RecipeBookmark";

export interface RouterInfoType {
  path: string;
  element: React.ComponentType;
  name?: string;
  showNav?: boolean;
  isProtected?: boolean;
}

const routerInfo: RouterInfoType[] = [
  { path: "/", element: Main, showNav: true },
  { path: "/join", element: Join },
  { path: "/login", element: Login },
  { path: "/loginRequired", element: LoginRequired },
  {
    path: "/mypage",
    element: Mypage,
    showNav: true,
    name: "냉장고 재료 등록",
    isProtected: true,
  },
  {
    path: "/recipeinfo/:id",
    element: RecipeInfo,
    showNav: true,
    name: "레시피",
  },
  {
    path: "/recipelist",
    element: RecipeList,
    showNav: true,
    name: "레시피",
  },
  {
    path: "/refrigerator",
    element: Refrigerator,
    showNav: true,
    isProtected: true,
  },
  {
    path: "/basket",
    element: Basket,
    showNav: true,
    name: "장바구니",
    isProtected: true,
  },
  {
    path: "/basket/add",
    element: BasketAdd,
    showNav: true,
    name: "장바구니 재료 등록",
    isProtected: true,
  },
  { path: "/member/edit", element: MemberEdit, isProtected: true },
  { path: "/avoidance", element: Avoidance, isProtected: true },
  { path: "/join/complete", element: JoinComplete, isProtected: true },
  {
    path: "/refrigerator/submit",
    element: RefrigeratorAddEdit,
    showNav: false,
    isProtected: true,
  },
  {
    path: "/recipebookmark",
    element: RecipeBookmark,
    showNav: true,
    name: "레시피 북마크",
    isProtected: true,
  },
];

export default routerInfo;
