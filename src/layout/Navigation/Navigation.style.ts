import styled from "styled-components";

export const NavContainer = styled.nav.attrs({
  "aria-label": "메인 네비게이션",
})`
  position: sticky;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  height: 70px;
  padding: 12px 20px 8px;
  box-shadow: 0px 0px 10px rgba(189, 186, 186, 0.5);
  background-color: white;
`;

export const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90px;

  p {
    font-size: 11px;
    margin: 0;
  }
`;
