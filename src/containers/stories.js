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

  const uniqueProfiles = [];
  const profiles = [];

  // eslint-disable-next-line
  posts.map(({ id, post }) => {
    if (uniqueProfiles.indexOf(post.username) === -1) {
      uniqueProfiles.push(post.username);
      profiles.push({
        id: id,
        postUsername: post.username,
        postUsernamePic: post.usernamepic,
      });
    }
  });

  console.log(uniqueProfiles);
  console.log(profiles);

  return (
    <Stories>
      <Stories.List>
        {profiles.slice(0, 5).map(({ id, postUsername, postUsernamePic }) => {
          return (
            <Stories.Story
              onClick={() => showProfile(id, postUsername)}
              src={postUsernamePic}
            >
              {postUsername}
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
