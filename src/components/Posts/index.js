import React from "react";

import { Container, Button } from "./styles/posts";

export default function Posts({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Posts.Button = function PostsButton({
  incrementCount,
  children,
  ...restProps
}) {
  return (
    <Button {...restProps}>
      <button onClick={() => incrementCount()}>{children}</button>
    </Button>
  );
};
