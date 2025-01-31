import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 2vh;
  position: relative;
`;

export const AddButton = styled(Link)`
  position: fixed;
  right: calc((100% - 600px) / 2 + 30px);
  bottom: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    right: 30px;
  }

  p {
    font-size: 13px;
    margin: 0;
    font-weight: 600;
    color: var(--grey80);
  }
`;
