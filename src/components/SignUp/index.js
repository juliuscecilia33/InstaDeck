import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Logo from "../../components/images/Decklol.png";

import {
  Container,
  InputSec,
  LogoImage,
  Title,
  RedLine,
  InputArea,
  InputText,
  Button,
  Agreement,
  HaveAccount,
  DisplaySec,
} from "./Styles/signUp";

export default function SignUp({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SignUp.InputSec = function SignUpInputSec({ children, ...restProps }) {
  return <InputSec {...restProps}>{children}</InputSec>;
};

SignUp.LogoImage = function SignUpLogoImage({ children, ...restProps }) {
  return (
    <LogoImage {...restProps}>
      <ReactRouterLink to={ROUTES.START}>
        <img src={Logo} alt="Logo" />
      </ReactRouterLink>
    </LogoImage>
  );
};

SignUp.Title = function SignUpTitle({ children, ...restProps }) {
  return (
    <Title {...restProps}>
      <h2>Sign Up</h2>
      {children}
      <h3>Sign up with</h3>
    </Title>
  );
};

SignUp.RedLine = function SignUpRedLine({ children, ...restProps }) {
  return <RedLine {...restProps}>{children}</RedLine>;
};

SignUp.InputArea = function SignUpInputArea({ children, ...restProps }) {
  return <InputArea {...restProps}>{children}</InputArea>;
};

SignUp.InputText = function SignUpInputText({
  type,
  placeholder,
  setAction,
  children,
  ...restProps
}) {
  return (
    <InputText {...restProps}>
      <h3>{children}</h3>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setAction(e.target.value)}
      />
    </InputText>
  );
};

SignUp.Button = function SignUpButton({
  isInvalid,
  signUp,
  children,
  ...restProps
}) {
  return (
    <Button {...restProps}>
      <button disabled={isInvalid} type="submit" onClick={signUp}>
        <i class="far fa-user"></i>
        <h3>Create Account</h3>
      </button>
    </Button>
  );
};

SignUp.Agreement = function SignUpAgreement({ children, ...restProps }) {
  return (
    <Agreement {...restProps}>
      By signing up I agree to the <span>Private Policy</span>
      <br /> and <span>Terms of Services</span>
    </Agreement>
  );
};

SignUp.HaveAccount = function SignUpHaveAccount({ children, ...restProps }) {
  return (
    <HaveAccount {...restProps}>
      Have an account?{" "}
      <ReactRouterLink to="/signin">
        <span>Sign In</span>
      </ReactRouterLink>
    </HaveAccount>
  );
};

SignUp.DisplaySec = function SignUpDisplaySec({ children, ...restProps }) {
  return <DisplaySec {...restProps}>{children}</DisplaySec>;
};
