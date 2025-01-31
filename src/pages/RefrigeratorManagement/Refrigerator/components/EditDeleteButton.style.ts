import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 20%;
`;

export const Ingredient = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 20%;
  p {
    font-size: 12px;
    margin: 0;
  }
`;

export const IngredientImgBox = styled.div`
  width: 50px;
  height: 50px;
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

export const OptionsBox = styled.div`
  width: 280px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
