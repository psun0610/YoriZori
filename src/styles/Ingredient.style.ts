import styled from "styled-components";

export const IngredientButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65px;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  border: 0;

  p {
    font-size: 12px;
    margin: 0;
    text-align: center;
  }
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