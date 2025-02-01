import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: fixed;
  bottom: 98px;
  width: calc(600px - 4vh);
  padding: 20px 0 20px 30px;
  background-color: white;
  box-shadow: 0 4px 13px var(--grey40);
  border-radius: 10px;

  @media (max-width: 600px) {
    width: calc(100% - 4vh);
  }
`;

export const Ingredient = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 20%;

  > p {
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

  > p {
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-bottom: 15px;

    > span {
      color: var(--main_text);
    }
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    > button {
      background-color: transparent;
      border: 0;
      color: var(--main_text);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 14px;
    }
  }
`;
