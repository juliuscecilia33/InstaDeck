import React from "react";
import { Stories } from "../components";

export function StoriesContainer({ themeToggler, posts }) {
  console.log(posts);

  return (
    <Stories>
      <Stories.List>
        {posts.slice(0, 5).map(({ id, post }) => {
          return (
            <Stories.Story src={post.usernamepic}>
              {post.username}
            </Stories.Story>
          );
        })}
      </Stories.List>

      <Stories.SettingsList>
        <Stories.SearchBox />
        <Stories.Icons themeToggler={themeToggler} />
      </Stories.SettingsList>
    </Stories>
  );
}
