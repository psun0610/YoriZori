import { useState, useEffect } from "react";
import AxiosAuth from "utils/AxiosAuth";
import * as S from "./style";
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
    AxiosAuth.get("/ingredients").then(response => {
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
        {filteredIngredients.map((ingredient, index) => (
          <S.IngredientButton
            key={index}
            onClick={() => {
              onItemSelect(ingredient);
            }}
            isSelect={userSelectList.includes(ingredient)}
          >
            <S.ImageBox>
              <img src={ingredient.imageUrl} alt={ingredient.name} />
            </S.ImageBox>
            <p>{ingredient.name}</p>
          </S.IngredientButton>
        ))}
      </S.IngredientList>
    </S.Container>
  );
}

export default IngredientList;
