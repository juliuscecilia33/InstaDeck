import React, { useContext, useEffect, useState } from "react";
import { Detailed } from "../components";
import { ProfileContext } from "../context/profile";
import { db } from "../firebase";

export function DetailedProfileContainer({ posts }) {
  const { profileData, profileText } = useContext(ProfileContext);
  const [profileUser, setProfileUser] = useState(null);
  const [profileUserPic, setProfileUserPic] = useState(null);
  const [setError] = useState("");

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

  return (
    <>
      <Detailed.Container>
        <img
          style={{ width: "300px", height: "auto" }}
          src={profileUserPic}
          alt="User Profile"
        />
        <h3>{profileUser}</h3>
        {posts.map(({ id, post }) => {
          return (
            post.username === profileText && (
              <img
                style={{ width: "100px", height: "auto" }}
                src={post.imageUrl}
                alt="Post"
              />
            )
          );
        })}
      </Detailed.Container>
    </>
  );
}
