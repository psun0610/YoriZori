import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 24px 0 0;

  h1 {
    font-size: 16px;
    margin-right: 12px;
    font-weight: 700;
  }

  a {
    font-size: 11px;
    color: var(--grey80);
  }
`;

export const RecipeList = styled.div`
  display: grid;
  grid-gap: 2rem 1.25rem;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  margin: 16px auto 12px;
`;
