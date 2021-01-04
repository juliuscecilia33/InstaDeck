import React from 'react';
import { mapTime } from '../../mappers/mapTime';

import {
  Background,
  Container,
  Image,
  Caption,
  Comments,
  Comment,
  CommentBox,
  Icons,
  Icon,
  User,
  UserImage,
  ProfileData,
  TopProfile,
  ProfileImage,
} from './styles/detailed';

export default function Detailed({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Detailed.Container = function DetailedContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

Detailed.Image = function DetailedImage({
  src,
  children,
  ...restProps
}) {
  return (
    <Image {...restProps}>
      <img src={src} alt="Detailed Post" />
    </Image>
  );
};

Detailed.Caption = function DetailedCaption({
  detailedCaption,
  detailedTime,
  children,
  ...restProps
}) {
  return (
    <Caption {...restProps}>
      <h3>{detailedCaption}</h3>
      <p>{mapTime(detailedTime.seconds)}</p>
    </Caption>
  );
};

Detailed.Comments = function DetailedComments({
  children,
  ...restProps
}) {
  return <Comments {...restProps}>{children}</Comments>;
};

Detailed.Comment = function DetailedComment({
  comment,
  children,
  ...restProps
}) {
  return (
    <Comment {...restProps}>
      <h3>{comment.username}</h3>
      <p>{comment.text}</p>
    </Comment>
  );
};

Detailed.CommentBox = function DetailedCommentBox({
  comment,
  setComment,
  postComment,
  children,
  ...restProps
}) {
  return (
    <CommentBox {...restProps}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button disabled={!comment} type="submit" onClick={postComment}>
        Post
      </button>
    </CommentBox>
  );
};

Detailed.Icons = function DetailedIcons({ children, ...restProps }) {
  return <Icons {...restProps}>{children}</Icons>;
};

Detailed.Icon = function DetailedIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Detailed.User = function DetailedUser({
  src,
  detailedUserPic,
  children,
  ...restProps
}) {
  return (
    <User {...restProps}>
      <UserImage>
        <img src={src} alt="User Profile Pic" />
      </UserImage>
      <h3>{children}</h3>
    </User>
  );
};

Detailed.ProfileData = function DetailedProfileData({
  children,
  ...restProps
}) {
  return <ProfileData {...restProps}>{children}</ProfileData>;
};

Detailed.TopProfile = function DetailedTopProfile({
  children,
  ...restProps
}) {
  return <TopProfile {...restProps}>{children}</TopProfile>;
};

Detailed.ProfileImage = function DetailedProfileImage({
  children,
  ...restProps
}) {
  return <ProfileImage src={src} alt="Avatar" {...restProps} />;
};

Detailed.ProfileInput = function DetailedProfileInput({
  children,
  ...restProps
}) {
  return <ProfileInput {...restProps}>{children}</ProfileInput>;
};
