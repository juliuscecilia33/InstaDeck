import React from "react";
import { Posts } from "../components";
import { PostContainer } from "../containers";

export function PostsContainer({ posts, user }) {
  return (
    <Posts>
      {posts.map(({ id, post }) => (
        <PostContainer
          key={id}
          postId={id}
          user={user}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
          usernamepic={post.usernamepic}
        />
      ))}
    </Posts>
  );
}