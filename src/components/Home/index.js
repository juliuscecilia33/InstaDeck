import React from "react";
import Brand from "../../components/images/Decklol.png";
import Profile from "../../components/images/picofme.png";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import {
  Container,
  Header,
  MainSect,
  DisplaySect,
  TextSect,
  TextSub,
  Logo,
  FillButton,
  OutlinedButton,
  Title,
  Subtitle,
  Description,
  Message,
  QuoteSect,
  Quote,
  ProfilePic,
  ProfileInfo,
  Image,
  Overlay,
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
      <img src={Brand} alt="Logo" />
      <p>InstaDeck</p>
    </Logo>
  );
};

Home.FillButton = function HomeFillButton({ children, ...restProps }) {
  return (
    <ReactRouterLink to={ROUTES.SIGN_UP}>
      <FillButton {...restProps}>{children}</FillButton>;
    </ReactRouterLink>
  );
};

Home.OutlinedButton = function HomeOutlinedButton({ children, ...restProps }) {
  return (
    <ReactRouterLink to={ROUTES.SIGN_IN}>
      <OutlinedButton {...restProps}>{children}</OutlinedButton>;
    </ReactRouterLink>
  );
};

Home.DisplaySect = function HomeDisplaySect({ children, ...restProps }) {
  return <DisplaySect {...restProps}>{children}</DisplaySect>;
};

Home.Image = function HomeImage({ src, children, ...restProps }) {
  return (
    <Image {...restProps}>
      <img src={`../../components/images/${src}.jpg`} alt="Display" />
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
  return <Message {...restProps}>{children}</Message>;
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
      <img src={Profile} alt="Profile" />
    </ProfilePic>
  );
};

Home.ProfileInfo = function HomeProfileInfo({ children, ...restProps }) {
  return (
    <ProfileInfo {...restProps}>
      <h3>Julius Cecilia</h3>
      <p>College Student</p>
    </ProfileInfo>
  );
};
