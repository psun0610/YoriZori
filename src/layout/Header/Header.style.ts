import styled from "styled-components";

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 0 8px var(--grey40);
  position: "sticky";
  top: "0";
  z-index: "99";
  background-color: "white";

  h1 {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const GoBackButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
