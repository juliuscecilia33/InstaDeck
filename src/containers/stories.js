import React, { useContext } from "react";
import { Stories } from "../components";
import { ProfileContext } from "../context/profile";
import { DetailedContext } from "../context/detailed";

export function StoriesContainer({ themeToggler, posts }) {
  const { setDetail } = useContext(DetailedContext);
  const { setProfile, setProfileData, setProfileText } = useContext(
    ProfileContext
  );

  const showProfile = (postId, username) => {
    // console.log(userId);
    setDetail(false);
    setProfile(true);
    setProfileData(postId);
    setProfileText(username);
  };

  return (
    <Stories>
      <Stories.List>
        {posts.slice(0, 5).map(({ id, post }) => {
          return (
            <Stories.Story
              onClick={() => showProfile(id, post.username)}
              src={post.usernamepic}
            >
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
