import React from "react";

import { Container, User, Layout, Link, Links } from "./styles/feed";

export default function Feed({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feed.User = function FeedUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Feed.Layout = function FeedLayout({ children, ...restProps }) {
  return <Layout {...restProps}>{children}</Layout>;
};

Feed.Links = function FeedLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Feed.Link = function FeedLink({ children, ...restProps }) {
  return (
    <Link {...restProps}>
      <h3>{children}</h3>
    </Link>
  );
};
