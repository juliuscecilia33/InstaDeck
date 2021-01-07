import React from "react";
import Styles from "./Feed.module.scss";
import {
  StoriesContainer,
  ImageUploadContainer,
  PopularPostsContainer,
  PostsContainer,
} from "../../containers";

export const Feed = ({ posts, user, popPosts }) => {
  return (
    <>
      <div className={Styles.FeedBg}>
        <StoriesContainer />

        <div className={Styles.UserFeed}>
          <div className={Styles.FollowingFeed}>
            <div className={Styles.Link}>
              <h1>Following</h1>
            </div>

            <PostsContainer posts={posts} user={user} />
          </div>

          <div className={Styles.PopularFeed}>
            <div className={Styles.Links}>
              <a href="/#">
                <h3>Popular</h3>
              </a>
              <a href="/#">
                <h3>Notifications</h3>
              </a>
              <a href="/#">
                <h3>Messages</h3>
              </a>
              <a href="/#">
                <h3>Saved</h3>
              </a>
            </div>

            <PopularPostsContainer posts={posts} user={user} />
          </div>
        </div>

        <ImageUploadContainer user={user} />
      </div>
    </>
  );
};
