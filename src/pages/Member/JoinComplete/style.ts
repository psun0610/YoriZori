import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  h1,
  span {
    font-size: 24px;
    font-weight: 700;
    color: var(--grey80);
  }

  span {
    color: var(--main_text);
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  color: var(--grey80);
  font-size: 15px;
  margin: 7px 0;
`;
