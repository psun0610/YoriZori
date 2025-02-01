import Ingredient from "components/Ingredient";
import * as S from "./IngredientSection.style";
import { IngredientDetailType } from "../IngredientDetailType";

interface Props {
  title: string;
  ingredientList: IngredientDetailType[];
  handleSelectIngredient: (ingredient: IngredientDetailType) => void;
}

const IngredientSection = ({
  title,
  ingredientList,
  handleSelectIngredient,
}: Props) => {
  return (
    <section>
      <S.Header>
        <p>{title}</p>
        <hr />
      </S.Header>
      <S.IngredientContainer>
        {ingredientList.map((ingredient, index) => (
          <div key={index} onClick={() => handleSelectIngredient(ingredient)}>
            <Ingredient
              name={ingredient.name}
              dday={ingredient.dday}
              src={ingredient.imageUrl}
            />
          </div>
        ))}
      </S.IngredientContainer>
    </section>
  );
};

export default IngredientSection;
