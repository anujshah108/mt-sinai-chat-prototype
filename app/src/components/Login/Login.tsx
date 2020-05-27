import React, { useState } from "react";
import { LoginHeader } from "./styled";
import {
  LoginWrapper,
  FormWrapper,
  LoginInput,
  LoginButton,
  LoginLabel,
  LoginForm,
} from "./styled";

export default function Login(props: { setEmail: (email: string) => void }) {
  const [inputEmail, setInputEmail] = useState("");

  return (
    <LoginWrapper>
      <FormWrapper>
        <LoginForm onSubmit={() => props.setEmail(inputEmail)}>
          <LoginHeader>Sign In</LoginHeader>
          <LoginLabel>Email address:</LoginLabel>
          <LoginInput
            type="email"
            value={inputEmail}
            placeholder="Enter email"
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <br />
          <LoginButton type="submit">Join Chat</LoginButton>
        </LoginForm>
      </FormWrapper>
    </LoginWrapper>
  );
}
