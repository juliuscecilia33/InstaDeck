import React, { useContext, useState } from 'react';
import Styles from './ImageUpload.module.scss';
import { FirebaseContext } from '../../context/firebase';
import { storage, db } from '../../firebase';
import firebase from "firebase";


export const ImageUpload = () => {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {}; 
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
                console.log(error);
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
                            username: firebaseUser.displayName
                        });

                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });

                    
            }
        )
    }
    

    return (
        <div className={Styles.ImageUpload}>
            <progress className={Styles.Progress} value={progress} max="100" />
            <input type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)} value={caption} />
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>
                Upload
            </button>
        </div>
    )
}
