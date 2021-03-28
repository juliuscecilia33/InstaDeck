import React from "react";
import {
  StoriesContainer,
  ImageUploadContainer,
  PopularPostsContainer,
  PostsContainer,
} from "../containers";
import { Feed } from "../components";

export function FeedContainer({ themeToggler, posts, user }) {
  return (
    <Feed>
      <StoriesContainer posts={posts} themeToggler={themeToggler} />

      <Feed.User>
        <Feed.Layout>
          <Feed.Links>
            <Feed.Link>Following</Feed.Link>
          </Feed.Links>
          <PostsContainer posts={posts} user={user} />
        </Feed.Layout>

        <Feed.Layout>
          <Feed.Links>
            <Feed.Link>Popular</Feed.Link>
            {/* <Feed.Link>Messages</Feed.Link>
            <Feed.Link>Notifications</Feed.Link>
            <Feed.Link>Saved</Feed.Link> */}
          </Feed.Links>

          <PopularPostsContainer posts={posts} user={user} />
        </Feed.Layout>
      </Feed.User>

      <ImageUploadContainer user={user} />
    </Feed>
  );
}
