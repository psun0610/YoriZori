import { useEffect, useState } from "react";
import axiosAuth from "utils/axiosAuth";
import AxiosCommon from "utils/AxiosCommon";
import * as S from "./style";
import NearExpList from "./components/NearExpList";
import RecommendRecipeList from "./components/RecommendRecipeList";
import Buttons from "./components/Buttons";
import { useAuthStore } from "stores/useAuthStore";

interface Ingredient {
  id: number;
  expDate: string;
  putDate: string;
  storagePlace: string;
  ingredientId: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  name: string;
  dday: number;
}

interface GuestRecommendRecipe {
  id: number;
  name: string;
  bookmarkCount: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
}

interface UserRecommendRecipe {
  id: number;
  name: string;
  bookmarkCheck: true;
  bookmarkCount: number;
  imageUrl: string;
  categoryId: number;
  categoryName: string;
  insufficientIngredientsCount: number;
  insufficientIngredients: [
    {
      id: number;
      name: string;
    },
  ];
}

const Main = () => {
  const [nearExpList, setNearExpList] = useState<Ingredient[]>([]);
  const [RecipeList, setRecipeList] = useState<
    (UserRecommendRecipe | GuestRecommendRecipe)[]
  >([]);

  const { isLogin } = useAuthStore.getState();

  /**
   * 소비기한 3일 이하 재료 리스트 받아오는 함수
   */
  const GetNearExpList = async () => {
    const response = await axiosAuth.get<Ingredient[]>(`/fridges/ingredients`);
    const nearExpList = response.data.filter(
      ingredient => ingredient.dday <= 3,
    );
    setNearExpList(nearExpList);
  };

  /**
   * 로그인한 유저에게 보여주는 추천 레시피
   */
  const GetRecommendRecipe = async () => {
    const response = await axiosAuth.get<UserRecommendRecipe[]>(
      `/recipes/recommendations`,
    );
    setRecipeList(response.data);
  };

  /**
   * 비로그인 유저에게 보여주는 추천 레시피
   */
  const GetGuestRecommendRecipe = async () => {
    const response = await AxiosCommon.get<GuestRecommendRecipe[]>(
      `/recipes/recommendations/guest`,
    );
    setRecipeList(response.data);
  };

  useEffect(() => {
    const GetUserData = async () => {
      try {
        if (isLogin) {
          await GetNearExpList();
          await GetRecommendRecipe();
        } else {
          await GetGuestRecommendRecipe();
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    GetUserData();
  }, [isLogin]);

  return (
    <div>
      <div id="wrapper">
        <S.HeaderImage></S.HeaderImage>
        <S.Container>
          <Buttons /> {/* 메인 버튼 3개 */}
          <NearExpList nearExpList={nearExpList} />
          {/* 소비기한 임박 재료 리스트 */}
          <RecommendRecipeList RecipeList={RecipeList} isLogin={isLogin} />
          {/** 오늘의 추천 레시피 */}
        </S.Container>
      </div>
    </div>
  );
};

export default Main;
