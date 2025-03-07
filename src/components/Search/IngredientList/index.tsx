import { useState, useEffect, memo } from "react";
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
          <NewIngredientButton
            key={ingredient.id}
            ingredient={ingredient}
            onItemSelect={onItemSelect}
            isSelected={userSelectList.includes(ingredient)}
          />
        ))}
      </S.IngredientList>
    </S.Container>
  );
}

// NewIngredientButton 컴포넌트에 React.memo 적용
const NewIngredientButton = memo(
  ({
    ingredient,
    onItemSelect,
    isSelected,
  }: {
    ingredient: IngredientType;
    onItemSelect: (select: IngredientType) => void;
    isSelected: boolean;
  }) => {
    return (
      <S.NewIngredientButton
        onClick={() => onItemSelect(ingredient)}
        $isSelect={isSelected}
      >
        <ImageBox>
          <img src={ingredient.imageUrl} alt={ingredient.name} />
        </ImageBox>
        <p>{ingredient.name}</p>
      </S.NewIngredientButton>
    );
  },
  (prevProps, nextProps) => {
    // ingredient와 isSelected가 변경되지 않으면 리렌더링 하지 않음
    return (
      prevProps.ingredient.id === nextProps.ingredient.id &&
      prevProps.isSelected === nextProps.isSelected
    );
  },
);

export default IngredientList;
