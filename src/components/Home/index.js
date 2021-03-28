import React from "react";
import Brand from "../../components/images/Decklol.png";
import Profile from "../../components/images/picofme.jpg";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import LazyLoad from "react-lazyload";

import {
  Container,
  Header,
  MainSect,
  DisplaySect,
  TextSect,
  TextSub,
  Logo,
  LargeFillButton,
  FillButton,
  OutlinedButton,
  Title,
  Subtitle,
  Description,
  Message,
  QuoteSect,
  Quote,
  ProfilePic,
  Info,
  Image,
  Overlay,
  Buttons,
} from "./styles/home";

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Overlay = function HomeOverlay({ children, ...restProps }) {
  return <Overlay {...restProps}>{children}</Overlay>;
};

Home.Header = function HomeHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Home.MainSect = function HomeMainSect({ children, ...restProps }) {
  return <MainSect {...restProps}>{children}</MainSect>;
};

Home.Logo = function HomeLogo({ children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <LazyLoad
        height={200}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Brand} alt="Logo" />
      </LazyLoad>
      <p>InstaDeck</p>
    </Logo>
  );
};

Home.Buttons = function HomeButtons({ children, ...restProps }) {
  return <Buttons {...restProps}>{children}</Buttons>;
};

Home.FillButton = function HomeFillButton({
  borderRadius,
  fontSize,
  width,
  height,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={ROUTES.SIGN_UP}>
      <FillButton
        borderRadius={borderRadius}
        fontSize={fontSize}
        width={width}
        height={height}
        {...restProps}
      >
        {children}
      </FillButton>
    </ReactRouterLink>
  );
};

Home.LargeFillButton = function HomeLargeFillButton({
  borderRadius,
  fontSize,
  width,
  height,
  children,
  ...restProps
}) {
  return (
    <ReactRouterLink to={ROUTES.SIGN_UP}>
      <LargeFillButton
        borderRadius={borderRadius}
        fontSize={fontSize}
        width={width}
        height={height}
        {...restProps}
      >
        {children}
      </LargeFillButton>
    </ReactRouterLink>
  );
};

Home.OutlinedButton = function HomeOutlinedButton({ children, ...restProps }) {
  return (
    <ReactRouterLink to={ROUTES.SIGN_IN}>
      <OutlinedButton {...restProps}>{children}</OutlinedButton>
    </ReactRouterLink>
  );
};

Home.DisplaySect = function HomeDisplaySect({ children, ...restProps }) {
  return <DisplaySect {...restProps}>{children}</DisplaySect>;
};

Home.Image = function HomeImage({ src, children, ...restProps }) {
  return (
    <Image {...restProps}>
      <LazyLoad
        height={200}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={src} alt="Display" />
      </LazyLoad>
    </Image>
  );
};

Home.TextSect = function HomeTextSect({ children, ...restProps }) {
  return <TextSect {...restProps}>{children}</TextSect>;
};

Home.TextSub = function HomeTextSub({ children, ...restProps }) {
  return <TextSub {...restProps}>{children}</TextSub>;
};

Home.Title = function HomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Home.Subtitle = function HomeSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

Home.Description = function HomeDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Home.Message = function HomeMessage({ children, ...restProps }) {
  return (
    <Message {...restProps}>
      <p>
        Have an account?{" "}
        <ReactRouterLink to={ROUTES.SIGN_IN}>
          <span>Sign in.</span>
        </ReactRouterLink>
      </p>
    </Message>
  );
};

Home.QuoteSect = function HomeQuoteSect({ children, ...restProps }) {
  return <QuoteSect {...restProps}>{children}</QuoteSect>;
};

Home.Quote = function HomeQuote({ children, ...restProps }) {
  return <Quote {...restProps}>{children}</Quote>;
};

Home.ProfilePic = function HomeProfilePic({ children, ...restProps }) {
  return (
    <ProfilePic {...restProps}>
      <LazyLoad
        height={200}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={Profile} alt="Profile" />
      </LazyLoad>
      <Info>
        <h3>Julius Cecilia</h3>
        <p>College Student</p>
      </Info>
    </ProfilePic>
  );
};
