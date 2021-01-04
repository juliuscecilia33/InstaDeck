import React, { useState } from 'react';
import { ImageUpload } from '../components';
import { storage, db } from '../firebase';
import firebase from "firebase";

export function ImageUploadContainer({ user }) {
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

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
                    .then(url => {
                        // post image inside database
                        db.collection("posts").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(), // allows the most recent image to be on top
                            caption: caption,
                            imageUrl: url,
                            username: user.displayName,
                            usernamepic: user.photoURL,
                            likes: 0,
                            comments: 0,
                        });

                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });

                    
            }
        )
    }

    return (
        <ImageUpload>
            <ImageUpload.Contain>
                <ImageUpload.InputStuff handleChange={handleChange}>
                    { image ? <span>Ready to Post</span> : <span>Upload An Image</span> }
                </ImageUpload.InputStuff>
                <ImageUpload.CaptionInput setCaption={setCaption} caption={caption} />
                <ImageUpload.Progress progress={progress} />
                <ImageUpload.PostButton handleUpload={handleUpload} image={image} />
            </ImageUpload.Contain>
        </ImageUpload>
    )
}