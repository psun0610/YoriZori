import { useState, useEffect } from "react";
import axiosAuth from "utils/axiosAuth";
import * as S from "./style";
import { ImageBox } from "styles/Ingredient.style";
import { IngredientType } from "types/IngredientType";

interface IngredientListProps {
  selectCategory: number;
  searchText: string;
  userSelectList: IngredientType[];
  onItemSelect: (select: IngredientType) => void;
}

function IngredientList({
  selectCategory,
  searchText,
  userSelectList,
  onItemSelect,
}: IngredientListProps) {
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);
  const [filteredIngredients, setFilteredIngredients] = useState<
    IngredientType[]
  >([]);

  useEffect(() => {
    axiosAuth.get("/ingredients").then(response => {
      setIngredients(response.data);
    });
  }, []);

  useEffect(() => {
    const filtered = ingredients.filter(
      ingredient =>
        ingredient.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (selectCategory === 0 || ingredient.categoryId === selectCategory),
    );
    setFilteredIngredients(filtered);
  }, [searchText, selectCategory, ingredients]);

  return (
    <S.Container>
      <S.IngredientList>
        {filteredIngredients.map(ingredient => (
          <S.NewIngredientButton
            key={ingredient.id}
            onClick={() => {
              onItemSelect(ingredient);
            }}
            $isSelect={userSelectList.includes(ingredient)}
          >
            <ImageBox>
              <img src={ingredient.imageUrl} alt={ingredient.name} />
            </ImageBox>
            <p>{ingredient.name}</p>
          </S.NewIngredientButton>
        ))}
      </S.IngredientList>
    </S.Container>
  );
}

export default IngredientList;
