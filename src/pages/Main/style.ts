import styled from "styled-components";

export const HeaderImage = styled.header`
  width: 100%;
  height: 150px;
  padding: 15px;
  background-image: url(${require("../../assets/images/logo.jpg")});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-origin: content-box;
`;

export const Container = styled.div`
  margin: 0 12px;
`;
