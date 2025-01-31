import styled from "styled-components";

const Button = styled.div`
  box-sizing: border-box;
  margin: 8px auto;
  padding: 10px;
  font-size: 13px;
  border-radius: 10px;
  text-align: center;
  border: 0;
  width: 80%;
  cursor: pointer;
`;

export const PinkButton = styled(Button)`
  background-color: var(--main_button);
  color: white;
`;

export const WhiteButton = styled(Button)`
  background-color: white;
  border: 3px solid var(--main_button);
  color: var(--black);
`;
