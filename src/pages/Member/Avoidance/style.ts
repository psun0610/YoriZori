import styled from "styled-components";
import { PinkButton } from "styles/Button.style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Title = styled.h1<{ isSelect: boolean }>`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: var(--grey80);
  margin: ${({ isSelect }) => (isSelect ? "0 0 2.3vh" : "0 0 4vh")};

  span {
    font-weight: 700;
    color: var(--main_text);
    font-size: 22px;
  }
`;

export const SelectList = styled.div<{ isSelect: boolean }>`
  width: 95%;
  margin: ${({ isSelect }) => (isSelect ? "0 0 2.3vh" : "0 0 4vh")};

  > div {
    display: inline-block;
    width: fit-content;
    margin: 0 5px;
    padding: 3px 10px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 20px;
    border: 2px solid var(--main_button);
  }
`;

export const Notice = styled.div`
  margin: 4vh 0 0;
  width: 100%;
`;

export const Button = styled(PinkButton)`
  width: 95%;
`;
