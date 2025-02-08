import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Logo = styled.header`
  background-image: url(${require("../../assets/images/logo.jpg")});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  color: var(--grey80);
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 10px auto;
  width: 80%;

  & :focus-visible {
    outline: none;
    border-bottom-color: var(--black);
    padding-top: 25px;
    top: -2px;

    + label {
      color: var(--black);
      top: -2px;
    }
  }

  input {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 5px 5px;
    border: none;
    border-bottom: 2px solid var(--grey60);
    background-color: transparent;
    font-size: 14px;
    position: relative;
    transition: border-bottom 0.3s ease, padding-top 0.3s ease, top 0.3s ease; /* top 속성에 대한 전환 효과 추가 */
  }
`;

export const Label = styled.label<{ $isActive: boolean }>`
  position: absolute;
  top: ${({ $isActive }) => ($isActive ? "-2px" : "13px")};
  left: 10px;
  margin: 0;
  padding: 0;
  color: var(--grey60);
  pointer-events: none;
  transition: top 0.3s ease, font-size 0.3s ease;
  font-size: ${({ $isActive }) => ($isActive ? "0.8em" : "13px")};
`;

export const WarningMessage = styled.p`
  color: var(--red);
  width: 80%;
`;
