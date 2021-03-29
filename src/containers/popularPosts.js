import React, { useState } from "react";
import { Posts } from "../components";
import { PostContainer } from "../containers";

export function PopularPostsContainer({ posts, user }) {
  const [count, setCount] = useState(5);

  const incrementCount = () => {
    setCount(count + 5);
    console.log(count);
  };

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
      {posts && (
        <Posts.Button incrementCount={incrementCount}>
          Load more posts
        </Posts.Button>
      )}
    </Posts>
  );
}
