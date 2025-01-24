import styled from "styled-components";

export const CloseExpContainer = styled.section`
  padding: 14px 0 10px;

  h1 {
    font-size: 16px;
    margin-bottom: 18px;
    font-weight: 700;

    span {
      font-size: 16px;
      color: var(--main_text);
      font-weight: 700;
    }
  }
`;

export const IngredientContainer = styled.div`
  display: grid;
  grid-gap: 22px 24px;
  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
`;
