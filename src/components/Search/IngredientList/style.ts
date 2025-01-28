import styled from "styled-components";
import { Ingredient } from "styles/Ingredient.style";

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

export const ImageBox = styled.div`
  width: 45px;
  height: 45px;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: var(--grey40) 0 0 5px 1px;
  }
`;

export const IngredientButton = styled(Ingredient)<{ isSelect: boolean }>`
  background-color: ${isSelect => isSelect && "rgba(0, 0, 0, 0.082"};
`;
