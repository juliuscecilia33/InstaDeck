import React, { useContext, useEffect, useState } from "react";
import { Profile } from "../components";
import { ProfileContext } from "../context/profile";
import { DetailedContext } from "../context/detailed";
import { db } from "../firebase";

export function DetailedProfileContainer({ posts }) {
  const { profileData, profileText } = useContext(ProfileContext);
  const [profileUser, setProfileUser] = useState(null);
  const [profileUserPic, setProfileUserPic] = useState(null);
  const [setError] = useState("");
  const { setDetail, setSelectedDetail } = useContext(DetailedContext);

  let postCount = 0;
  let likesCount = [];

  const updateDetail = (postId) => {
    setDetail(true);
    setSelectedDetail(postId);
  };

  useEffect(() => {
    if (profileData) {
      db.collection("posts")
        .doc(profileData)
        .get()
        .then((doc) => {
          if (doc.exists) {
            let docData = doc.data();

            setProfileUser(docData.username);
            setProfileUserPic(docData.usernamepic);
            console.log(docData);
          } else {
            setError("doc not found");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [profileData, setError]);

  console.log(likesCount);

  return (
    <>
      <Profile>
        <Profile.Top>
          <Profile.Avatar src={profileUserPic} />
          <Profile.Username>{profileUser}</Profile.Username>
          {/* eslint-disable-next-line */}
          {posts.map(({ post }) => {
            post.username === profileText && postCount++;
          })}
          {/* eslint-disable-next-line */}
          {posts.map(({ post }) => {
            post.username === profileText && likesCount.push(post.likes);
          })}
          <Profile.Stats>{postCount}</Profile.Stats>
          <Profile.Totals>
            {likesCount.reduce((a, b) => a + b, 0)}
          </Profile.Totals>
        </Profile.Top>
        <Profile.Bottom height="50%">
          <Profile.Title />
          <Profile.Posts>
            {posts.map(({ id, post }) => {
              return (
                post.username === profileText && (
                  <Profile.Post
                    updateDetail={updateDetail}
                    postId={id}
                    src={post.imageUrl}
                  />
                )
              );
            })}
          </Profile.Posts>
        </Profile.Bottom>
      </Profile>
    </>
  );
}
