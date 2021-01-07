import React from "react";

import {
  Container,
  Image,
  Footer,
  Avatar,
  AvatarImage,
  Buttons,
  Button,
} from "./styles/post";

export default function Post({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Post.Image = function PostImage({
  updateDetail,
  postId,
  imageUrl,
  children,
  ...restProps
}) {
  return (
    <Image onClick={() => updateDetail(postId)} {...restProps}>
      <img src={imageUrl} alt="post" />
    </Image>
  );
};

Post.Footer = function PostFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

Post.Avatar = function PostAvatar({ username, children, ...restProps }) {
  return (
    <Avatar {...restProps}>
      {children}
      <h3>{username}</h3>
    </Avatar>
  );
};

Post.AvatarImage = function PostAvatarImage({ src, children, ...restProps }) {
  return <AvatarImage src={src} alt="Avatar" {...restProps} />;
};

Post.Buttons = function PostButtons({ children, ...restProps }) {
  return <Buttons {...restProps}>{children}</Buttons>;
};

Post.Button = function PostButton({
  updateAction,
  postId,
  action,
  children,
  ...restProps
}) {
  return (
    <Button {...restProps}>
      <button onClick={() => updateAction(postId)}>{children}</button>
      <p>{action}</p>
    </Button>
  );
};
