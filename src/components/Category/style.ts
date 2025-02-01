import styled from "styled-components";

export const CategoryNav = styled.nav`
  padding-top: 20px;
  padding-bottom: 10px;
  text-align: center;
`;

export const Button = styled.button<{ isSelect: boolean }>`
  background-color: ${({ isSelect }) =>
    isSelect ? "var(--main_button)" : "transparent"};
  color: ${({ isSelect }) => (isSelect ? "white" : "black")};
  display: inline-block;
  width: fit-content;
  padding: 3px 10px;
  margin: 0 5px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 13px;
  border: 0;
`;
