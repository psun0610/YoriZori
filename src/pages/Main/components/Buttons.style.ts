import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.nav`
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  margin-top: 20px;
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-radius: 5px;
  box-shadow: var(--grey40) 0 0 5px 2px;

  h1 {
    font-size: 14px;
    margin-left: 3px;
    font-weight: 600;
  }
`;

export const LeftButton = styled.div`
  width: 49%;
  ${Button} {
    height: 120px;
  }
`;

export const RightButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  justify-content: space-between;

  ${Button} {
    height: 46%;
  }
`;
