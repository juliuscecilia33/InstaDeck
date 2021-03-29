import React, { useState } from "react";
import { Posts } from "../components";
import { PostContainer } from "../containers";

export function PostsContainer({ posts, user }) {
  const [count, setCount] = useState(5);

  const incrementCount = () => {
    setCount(count + 5);
    console.log(count);
  };

  return (
    <Posts>
      {posts.slice(0, count).map(({ id, post }) => (
        <PostContainer
          key={id}
          postId={id}
          post={post}
          user={user}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          likes={post.likes}
          comments={post.comments}
          usernamepic={post.usernamepic}
          userId={post.userId}
          commentCount={post.commentCount}
        />
      ))}
      <Posts.Button incrementCount={incrementCount}>
        Load more posts
      </Posts.Button>
    </Posts>
  );
}
