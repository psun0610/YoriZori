import { Link } from "react-router-dom";
import * as S from "./RecommandRecipeList.style";
import MainRecipe from "components/MainRecipe";

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

const RecommendRecipeList = ({
  RecipeList,
  isLogin,
}: {
  RecipeList: GuestRecommendRecipe[] | UserRecommendRecipe[];
  isLogin: boolean;
}) => {
  return (
    <section>
      <S.Header>
        <h1>오늘의 추천 레시피</h1>
        <Link to="/recipelist">더보기{">"}</Link>
      </S.Header>
      <S.RecipeList>
        {RecipeList.map((recipe, index) => (
          <Link
            to={`/recipeinfo/${recipe.id}`}
            style={{ cursor: "pointer" }}
            key={index}
          >
            <MainRecipe recipe={recipe} isLogin={isLogin} />
          </Link>
        ))}
      </S.RecipeList>
    </section>
  );
};

export default RecommendRecipeList;
