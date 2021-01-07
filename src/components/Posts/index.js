import React from "react";

import { Container } from "./styles/posts";

export default function Posts({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
