import React from "react";
import { Posts } from "../components";
import { PostContainer } from "../containers";

export function PopularPostsContainer({ posts, user }) {
  return (
    <Posts>
      {posts.map(({ id, post }) => {
        return (
          post.likes >= 10 && (
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
          )
        );
      })}
    </Posts>
  );
}
