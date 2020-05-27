import styled from "styled-components/macro";

export const LoginWrapper = styled.div`
  display: flex;
  font-weight: 400;
  font-family: "Fira Sans", sans-serif;
  vertical-align: center;
  align-items: center;
  justify-content: center;
  background-color: #dc298d;
`;

export const FormWrapper = styled.div`
  max-height: 500px;
  max-width: 400px;
  min-height: 500px;
  min-width: 400px;
  background: #06abeb;
`;

export const LoginForm = styled.form``;

export const LoginInput = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  height: 30px;
  background: white;
  padding-left: 10px;
  ::placeholder {
    opacity: 0.3;
    padding-left: 10px;
  }
`;

export const LoginButton = styled.button`
  font-size: 12px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #00002d;
  color: white;
`;

export const LoginHeader = styled.h3`
  color: #212070;
`;

export const LoginLabel = styled.label`
  font-size: 14px;
  padding-right: 5px;
`;
