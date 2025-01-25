import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled.header`
  background-image: url(${require("../../../assets/images/logo.jpg")});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  margin-bottom: 16px;
`;

export const JoinButton = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 5px;
  font-size: 14px;
`;
