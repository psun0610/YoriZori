import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  padding: 2.3vh 2vh;
  box-shadow: 0 0 7px var(--grey60);
  border-radius: 10px;
  position: relative;
`;

export const Category = styled.div<{ isOpen: boolean }>`
  transition: max-height 0.6s ease-in-out;
  max-height: ${isOpen => (isOpen ? "1000px" : 0)};
  overflow: hidden;
`;
