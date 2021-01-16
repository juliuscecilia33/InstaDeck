import React, { useContext, useState } from "react";
import { DetailedContext } from "../context/detailed";
import { ProfileContext } from "../context/profile";
import { db } from "../firebase";
import { Post } from "../components";
import BlankImage from "../components/images/UploadImageIcon.png";

export function PostContainer({
  post,
  user,
  username,
  imageUrl,
  postId,
  likes,
  comments,
  usernamepic,
  userId,
}) {
  const { setDetail, setSelectedDetail } = useContext(DetailedContext);
  const { setProfile, setProfileData, setProfileText } = useContext(
    ProfileContext
  );
  const [heartColor, setHeartColor] = useState(false);

  const updateDetail = (postId) => {
    setDetail(true);
    setSelectedDetail(postId);
  };

  const showProfile = (postId, username) => {
    // console.log(userId);
    setDetail(false);
    setProfile(true);
    setProfileData(postId);
    setProfileText(username);
  };

  const updateLike = (postId) => {
    setHeartColor(!heartColor);

    if (heartColor) {
      db.collection("posts")
        .doc(postId)
        .update({
          likes: likes - 1,
        });
    } else {
      db.collection("posts")
        .doc(postId)
        .update({
          likes: likes + 1,
        });
    }
  };

  const deletePost = (postId) => {
    db.collection("posts")
      .doc(postId)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  let inputStyle = {
    transition: ".5s ease all",
    color: "#c4c4c4",
  };

  if (heartColor) {
    inputStyle = {
      transition: ".5s ease all",
      color: "#E45257",
    };
  }

  return (
    <>
      {user && (
        <Post>
          <Post.Image
            updateDetail={updateDetail}
            postId={postId}
            imageUrl={imageUrl}
          />

          <Post.Footer>
            <Post.Avatar
              username={username}
              onClick={() => showProfile(postId, username)}
            >
              {usernamepic ? (
                <Post.AvatarImage src={usernamepic} />
              ) : (
                <Post.AvatarImage src={BlankImage} />
              )}
            </Post.Avatar>

            <Post.Buttons>
              <Post.Button action={likes}>
                <button onClick={() => updateLike(postId)}>
                  <i class="fas fa-heart" style={inputStyle}></i>
                </button>
              </Post.Button>
              <Post.Button action={comments}>
                <a href="#/" onClick={() => updateDetail(postId)}>
                  <button>
                    <i class="fas fa-comments"></i>
                  </button>
                </a>
              </Post.Button>
              <Post.Button>
                <button>
                  <i class="fas fa-bookmark"></i>
                </button>
              </Post.Button>
              {username === user.displayName && (
                <Post.Button>
                  <button onClick={() => deletePost(postId)}>
                    <i class="fas fa-trash"></i>
                  </button>
                </Post.Button>
              )}
            </Post.Buttons>
          </Post.Footer>
        </Post>
      )}
    </>
  );
}
