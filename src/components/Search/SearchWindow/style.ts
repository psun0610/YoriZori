import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 90%;
  padding: 5px 42px 5px 10px;
  margin: auto;
  border: 0;
  border-bottom: 2px solid var(--grey60);
  font-size: 12px;
  font-weight: 500;

  ::placeholder {
    color: var(--grey60);
  }

  :focus {
    outline: 0;
  }
`;

export const Expansion = styled.button`
  position: absolute;
  top: 0;
  right: 22px;
  border: 0;
  background: transparent;
`;
