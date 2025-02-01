import styled from "styled-components";

export const ThumbNail = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 700;
  margin-top: 3px;
`;

export const LackCount = styled.p`
  color: var(--grey80);
  font-size: 12px;
  margin: 0;
  margin-bottom: 5px;

  span {
    color: var(--main_text);
    font-weight: 700;
    font-size: 12px;
  }
`;

export const LackIngredientList = styled.div`
  display: flex;
  margin: 2px 0;
  flex-wrap: wrap;

  div {
    background-color: var(--main_button);
    font-size: 12px;
    color: white;
    padding: 1px 7px 3px;
    margin-right: 5px;
    margin-bottom: 3px;
    border-radius: 8px;
  }
`;

export const RightPossible = styled.p`
  color: var(--main_text);
  font-weight: 700;
  font-size: 13px;
  padding-top: 2px;
`;
