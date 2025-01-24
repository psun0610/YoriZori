import * as S from "./style";

function MainRecipe({ recipe, isLogin }) {
  return (
    <article>
      <S.ThumbNail src={recipe.imageUrl} alt={recipe.name} />
      <div>
        <S.Title>{recipe.name}</S.Title>
        {isLogin &&
          (recipe.insufficientIngredientsCount ? (
            <div>
              <S.LackCount>
                부족한 재료 <span>{recipe.insufficientIngredientsCount}</span>개
              </S.LackCount>
              <S.LackIngredientList>
                {recipe.insufficientIngredients.map((ingredient, i) => (
                  <div key={i}>{ingredient.name}</div>
                ))}
              </S.LackIngredientList>
            </div>
          ) : (
            <S.RightPossible>지금 만들 수 있어요!</S.RightPossible>
          ))}
      </div>
    </article>
  );
}

export default MainRecipe;
