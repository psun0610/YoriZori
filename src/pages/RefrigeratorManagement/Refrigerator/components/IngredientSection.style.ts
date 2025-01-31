export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 35px auto;

  p {
    display: inline-block;
    color: var(--grey60);
    font-size: 13px;
    width: 50px;
  }

  hr {
    display: block;
    background-color: var(--grey40);
    height: 1px;
    width: 100%;
    border: 0;
  }
`;

export const IngredientContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
  grid-gap: 35px 50px;
  place-items: center;
  padding: 0 12px;
  align-items: start;
`;
