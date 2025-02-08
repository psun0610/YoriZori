import styled from "styled-components";
import { PinkButton } from "styles/Button.style";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 2vh 0 6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  padding: 30px 0;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 18px;

    > span {
      font-weight: 700;
      color: var(--main_text);
    }
  }
`;

export const SelectBox = styled.div`
  display: flex;
  align-items: baseline;
  height: 30px;
  margin-bottom: 18px;
`;

export const SelectedIngredient = styled.div`
  margin-left: 14px;
  padding: 1px 12px 2px;
  border-radius: 16px;
  font-weight: 500;
  background-color: var(--main_text);
  color: white;
  font-size: 14px;
`;

export const SearchWindow = styled.div`
  > div {
    max-width: 100%;
    margin: auto;
  }
`;

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Button = styled.button<{ $active: boolean }>`
  background-color: ${({ $active }) =>
    $active ? "var(--main_text)" : "white"};
  border: ${({ $active }) =>
    $active ? "2px solid var(--main_button)" : "2px solid var(--main_text)"};
  color: ${({ $active }) => ($active ? "white" : "black")};
  width: 100%;
  padding: 3px 0;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
`;

export const AddDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  > p {
    font-size: 13px;
    width: 70px;
    font-weight: 500;
  }

  > div {
    flex: 1;
  }

  input {
    font-size: 13px;
    padding: 5px 0;
    text-align: center;
  }
`;

export const None = styled.div`
  font-size: 13px;
  padding: 5px 0;
  text-align: center;
  border-width: 0;
  border-radius: 10px;
  box-shadow: 0 0 6px var(--grey60);
`;

export const SubmitButton = styled(PinkButton).attrs({
  as: "input",
  type: "submit",
})`
  width: 100%;
  background-color: var(--main_text);
`;
