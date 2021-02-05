import React from "react";

import {
  Container,
  Top,
  Avatar,
  Username,
  Bottom,
  Stats,
  PostStat,
  FollowerStat,
  FollowingStat,
  Totals,
  LikeStat,
  CommentStat,
  Icon,
  Title,
  Post,
  Posts,
} from "./styles/profile";

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profile.Top = function ProfileTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Profile.Avatar = function ProfileAvatar({ src, children, ...restProps }) {
  return <Avatar src={src} alt="User Profile" {...restProps}></Avatar>;
};

Profile.Username = function ProfileUsername({
  profileUser,
  children,
  ...restProps
}) {
  return <Username {...restProps}>{profileUser}</Username>;
};

Profile.Stats = function ProfileStats({ children, ...restProps }) {
  return (
    <Stats {...restProps}>
      <PostStat>
        <h3>5</h3>
        <p>Posts</p>
      </PostStat>
      <FollowerStat>
        <h3>10</h3>
        <p>Followers</p>
      </FollowerStat>
      <FollowingStat>
        <h3>15</h3>
        <p>Following</p>
      </FollowingStat>
    </Stats>
  );
};

Profile.Totals = function ProfileTotals({ children, ...restProps }) {
  return (
    <Totals {...restProps}>
      <LikeStat>
        <Icon></Icon>
        <h3>100</h3>
        <p>Total Likes</p>
      </LikeStat>
      <CommentStat>
        <Icon></Icon>
        <h3>50</h3>
        <p>Total Comments</p>
      </CommentStat>
    </Totals>
  );
};

Profile.Bottom = function ProfileBottom({ children, ...restProps }) {
  return <Bottom {...restProps}>{children}</Bottom>;
};

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>Posts</Title>;
};

Profile.Posts = function ProfilePosts({ children, ...restProps }) {
  return <Posts {...restProps}>{children}</Posts>;
};

Profile.Post = function ProfilePost({ src, children, ...restProps }) {
  return (
    <Post src={src} alt="Post" {...restProps}>
      {children}
    </Post>
  );
};
