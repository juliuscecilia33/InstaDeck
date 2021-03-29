import React, { useState, useContext } from "react";
import { Detailed, Profile } from "../components";
import BlankAvatar from "../components/images/BlankAvatarSquare.jpg";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { DetailedContext } from "../context/detailed";
import { storage } from "../firebase";
import { useHistory } from "react-router";

export function DetailedAccountContainer({ user, posts }) {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const { firebaseApp } = useContext(FirebaseContext);
  const firebaseUser = firebaseApp.auth().currentUser || {};
  const { setDetail, setSelectedDetail } = useContext(DetailedContext);
  const history = useHistory();

  let postCount = 0;
  let likesCount = [];

  const updateDetail = (postId) => {
    setDetail(true);
    setSelectedDetail(postId);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function...
        alert(error.message);
      },
      () => {
        // when the upload completes...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL() // thet image is already uploaded, this gives us a download link for the uploaded image
          .then((url) => {
            // post image inside database
            user.updateProfile({
              photoURL: url,
            });
          });

        setProgress(0);
        setImage(null);
        history.go(0);
      }
    );
  };

  return (
    <>
      {/* eslint-disable-next-line */}
      {posts.map(({ post }) => {
        post.username === firebaseUser.displayName && postCount++;
      })}
      {/* eslint-disable-next-line */}
      {posts.map(({ post }) => {
        post.username === firebaseUser.displayName &&
          likesCount.push(post.likes);
      })}
      <Detailed.ProfileData>
        <Detailed.TopProfile>
          {user ? (
            user.photoURL ? (
              <Detailed.ProfileImage src={user.photoURL} />
            ) : (
              <Detailed.ProfileImage src={BlankAvatar} />
            )
          ) : (
            <Detailed.ProfileImage src={BlankAvatar} />
          )}

          <Detailed.ProfileInput>
            <Detailed.ProfileButtons>
              <Detailed.InputStuff handleChange={handleChange}>
                {image ? (
                  <span>Ready to Upload</span>
                ) : (
                  <span>Upload Profile</span>
                )}
              </Detailed.InputStuff>
              <Detailed.UploadButton
                image={image}
                handleUpload={handleUpload}
              />
            </Detailed.ProfileButtons>

            <Detailed.ProfileProgress progress={progress} />
          </Detailed.ProfileInput>

          <Detailed.DisplayName>
            {firebaseUser.displayName}
          </Detailed.DisplayName>

          {user ? (
            <Detailed.Status>Admin</Detailed.Status>
          ) : (
            <Link to={ROUTES.SIGN_IN}>
              <Detailed.Status>Log In</Detailed.Status>
            </Link>
          )}

          {user && (
            <Detailed.Stats>
              <Detailed.Stat quantity={postCount} label="Posts" />
              <Detailed.Stat quantity="---" label="Followers" />
              <Detailed.Stat quantity="---" label="Following" />
            </Detailed.Stats>
          )}
        </Detailed.TopProfile>

        {user && (
          <Detailed.Statistics>
            <Detailed.Row>
              <Detailed.Item>
                <Detailed.SecondaryIcon>
                  <i class="fas fa-user-friends"></i>
                </Detailed.SecondaryIcon>
                <Detailed.Number number="--" />
                <Detailed.Text>
                  <p>New</p>
                  <p>Followers</p>
                </Detailed.Text>
              </Detailed.Item>

              <Detailed.Item>
                <Detailed.SecondaryIcon>
                  <i class="fas fa-comments"></i>
                </Detailed.SecondaryIcon>
                <Detailed.Number number="--" />
                <Detailed.Text>
                  <p>New</p>
                  <p>Comments</p>
                </Detailed.Text>
              </Detailed.Item>
            </Detailed.Row>

            <Detailed.Row>
              <Detailed.Item>
                <Detailed.SecondaryIcon>
                  <i class="fas fa-heart"></i>
                </Detailed.SecondaryIcon>
                <Detailed.Number
                  number={likesCount.reduce((a, b) => a + b, 0)}
                />
                <Detailed.Text>
                  <p>Total</p>
                  <p>Likes</p>
                </Detailed.Text>
              </Detailed.Item>

              <Detailed.Item>
                <Detailed.SecondaryIcon>
                  <i class="fas fa-user-circle"></i>
                </Detailed.SecondaryIcon>
                <Detailed.Number number="49" />
                <Detailed.Text>
                  <p>Profile</p>
                  <p>Views</p>
                </Detailed.Text>
              </Detailed.Item>
            </Detailed.Row>
          </Detailed.Statistics>
        )}
      </Detailed.ProfileData>

      <Profile.Bottom height="35%">
        <Profile.Title />
        <Profile.Posts>
          {posts.map(({ id, post }) => {
            return (
              post.username === firebaseUser.displayName && (
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
    </>
  );
}
