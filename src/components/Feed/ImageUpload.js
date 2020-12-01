import React, { useContext, useState } from 'react';
import Styles from './ImageUpload.module.scss';
import { FirebaseContext } from '../../context/firebase';
import { storage, db } from '../../firebase';
import firebase from "firebase";


export const ImageUpload = ({ user }) => {
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
        <div className={Styles.ImageUpload}>
            <div className={Styles.Container}>
                <div className={Styles.InputStuff}>
                    <input type="file" name="file-1[]" id="file-1" className={Styles.inputfile} data-multiple-caption="{count} files selected" multiple onChange={handleChange} />
					<label for="file-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
                        </svg> 
                        { image ? <span>Ready to Post</span> : <span>Upload An Image</span> }
                    </label>
                </div>
                <input className={Styles.CaptionInput} type="text" placeholder='Enter a caption...' onChange={event => setCaption(event.target.value)} value={caption} />
                <progress className={Styles.Progress} value={progress} max="100" />
                <button onClick={handleUpload} disabled={user ? false : true }>
                    Upload
                </button>
            </div>
        </div>
    )
}
