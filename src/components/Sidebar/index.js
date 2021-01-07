import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import DownArrow from "../images/DownArrow.png";

import {
  Container,
  Logo,
  Link,
  Tabs,
  Tab,
  Account,
  AccountBar,
  Top,
  Bottom,
  Border,
  Profiles,
  Profile,
  Label,
  Heading,
  DisplayName,
  AccountFooter,
  SignInOrUp,
  Option,
  LogOut,
} from "./styles/sidebar";

export default function SideBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

SideBar.Logo = function SideBarLogo({ to, children, ...restProps }) {
  return (
    <Logo {...restProps}>
      <ReactRouterLink to={to}>
        <Link>{children}</Link>
      </ReactRouterLink>
    </Logo>
  );
};

SideBar.Tabs = function SideBarTabs({ children, ...restProps }) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

SideBar.Tab = function SideBarTabs({ label, children, ...restProps }) {
  return (
    <Tab {...restProps}>
      {children}
      <h3>{label}</h3>
    </Tab>
  );
};

SideBar.Account = function SideBarAccount({ children, ...restProps }) {
  return <Account {...restProps}>{children}</Account>;
};

SideBar.AccountBar = function SideBarAccountBar({ children, ...restProps }) {
  return (
    <AccountBar {...restProps}>
      <Top>
        <h3>Account</h3>
        <img src={DownArrow} alt="DownArrow" />
      </Top>

      <Bottom>
        <Border />
      </Bottom>
    </AccountBar>
  );
};

SideBar.Profiles = function SideBarProfiles({ children, ...restProps }) {
  return <Profiles {...restProps}>{children}</Profiles>;
};

SideBar.Profile = function SideBarProfile({
  heading,
  displayName,
  label,
  children,
  ...restProps
}) {
  return (
    <Profile {...restProps}>
      {children}
      <Label>
        <Heading>{heading}</Heading>
        <DisplayName>{displayName}</DisplayName>
      </Label>
    </Profile>
  );
};

SideBar.AccountFooter = function SideBarAccountFooter({
  children,
  ...restProps
}) {
  return (
    <AccountFooter {...restProps}>
      {children}
      <p>InstaDeck Business</p>
    </AccountFooter>
  );
};

SideBar.SignInOrUp = function SideBarSignInOrUp({
  to,
  children,
  ...restProps
}) {
  return <SignInOrUp {...restProps}>{children}</SignInOrUp>;
};

SideBar.LogOut = function SideBarLogOut({ to, children, ...restProps }) {
  return <LogOut {...restProps}>{children}</LogOut>;
};

SideBar.Option = function SideBarOption({ to, children, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Option {...restProps}>
        <h3>{children}</h3>
      </Option>
    </ReactRouterLink>
  );
};
