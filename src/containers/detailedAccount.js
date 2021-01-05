import React, { useState, useContext } from 'react';
import { Detailed } from '../components';
import BlankAvatar from '../components/images/BlankAvatarSquare.jpg';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export function DetailedAccountContainer() {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const { firebaseApp } = useContext(FirebaseContext);
  const firebaseUser = firebaseApp.auth().currentUser || {};

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
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
          .ref('images')
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
      },
    );
  };

  return (
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
                <span>Upload An Image</span>
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
            <Detailed.Stat quantity="15" label="Posts" />
            <Detailed.Stat quantity="100,000" label="Followers" />
            <Detailed.Stat quantity="100" label="Following" />
          </Detailed.Stats>
        )}
      </Detailed.TopProfile>

      <Detailed.Statistics></Detailed.Statistics>
    </Detailed.ProfileData>
  );
}
