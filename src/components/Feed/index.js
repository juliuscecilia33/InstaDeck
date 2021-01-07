import React from "react";

import { Container, User, Following, Link, Links } from "./styles/feed";

export default function Feed({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feed.User = function FeedUser({ children, ...restProps }) {
  return <User {...restProps}>{children}</User>;
};

Feed.Following = function FeedFollowing({ children, ...restProps }) {
  return <Following {...restProps}>{children}</Following>;
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
