import styled from "styled-components";
import { IngredientButton } from "styles/Ingredient.style";

export const Container = styled.div`
  height: 35vh;
  overflow-y: auto;
`;

export const IngredientList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-gap: 20px;
  place-items: center;
  cursor: default;
  align-items: start;
`;

export const NewIngredientButton = styled(IngredientButton)<{
  isSelect: boolean;
}>`
  background-color: ${isSelect => isSelect && "rgba(0, 0, 0, 0.082"};
`;
