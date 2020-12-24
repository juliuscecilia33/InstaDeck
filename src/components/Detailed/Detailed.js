import React, { useContext, useState, useEffect } from 'react';
import { DetailedBg } from './Detailed.module.scss';
import Dabin from '../images/dabin.jpg';
import Bichette from '../images/bichette.jpg';
import BlankAvatar from '../images/BlankAvatarSquare.jpg';
import Julio from '../images/julio.jpg';
import Styles from './Detailed.module.scss';
import { FirebaseContext } from '../../context/firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { storage } from '../../firebase';
import { DetailedContext } from '../../context/detailed';
import { db } from '../../firebase';
import { mapTime } from '../../mappers/mapTime';
import firebase from 'firebase';

export const Detailed = ({ user, posts }) => {
    const { detail, selectedDetail } = useContext(DetailedContext);
    const [ detailedLikes, setDetailedLikes ] = useState(0);
    const [ detailedImage, setDetailedImage ] = useState(null);
    const [ detailedUser, setDetailedUser ] = useState('');
    const [ detailedUserPic, setDetailedUserPic ] = useState(null);
    const [ detailedCaption, setDetailedCaption ] = useState('');
    const [ detailedTime, setDetailedTime ] = useState('');
    const [ error, setError ] = useState('');
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {};
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [ comment, setComment ] = useState([]);
    const [ comments, setComments ] = useState([]);

    useEffect(() => {

        if (selectedDetail) {

            db.collection("posts").doc(selectedDetail).get().then(doc => {
                
                if (doc.exists) {

                    let docData = doc.data();

                    setDetailedLikes(docData.likes);
                    setDetailedImage(docData.imageUrl);
                    setDetailedUser(docData.username);
                    setDetailedUserPic(docData.usernamepic);
                    setDetailedCaption(docData.caption);
                    setDetailedTime(docData.timestamp);


                } else {
                    setError('doc not found')
                }

                
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            
        }

        
        
    }, [selectedDetail])

    useEffect(() => {
        // let unsubscribe;

        if (selectedDetail) {
           db   
                .collection("posts")
                .doc(selectedDetail)
                .collection("comments")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()))
                });
        }

        
        // return () => {
        //     unsubscribe();
        // };
    }, [selectedDetail])

    const updateLike = (selectedDetail) => {

        db.collection("posts").doc(selectedDetail).update({
            likes: detailedLikes + 1,
        });

    }

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
                        user.updateProfile({
                            photoURL: url
                        })
                    }); 

                    setProgress(0);
                    setImage(null);
            }
        )
    }

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(selectedDetail).collection("comments").add({
            text: comment,
            username: firebaseUser.displayName,
            timestamp: mapTime(firebase.firestore.FieldValue.serverTimestamp())
        });

        setComment('');
    }

    return (
        <>
            <div className={DetailedBg}>

                { detail 
                ? 
                    <>
                        <div className={Styles.DetailedContainer}>

                            <div className={Styles.DetailedImage}>
                                <img src={detailedImage} alt="Detailed Post" />
                            </div>

                            <div className={Styles.DetailedCaption}>
                                <h3>{detailedCaption}</h3>
                                <p>{mapTime(detailedTime.seconds)}</p>
                            </div>

                            <div className={Styles.DetailedComments}>
                                {comments.map((comment) => (
                                    <div className={Styles.Comment}>
                                        <h3>
                                            {comment.username}
                                        </h3>
                                        <p>
                                            {comment.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            
                            <form className={Styles.CommentBox}>
                                <input  
                                    type="text" 
                                    placeholder="Add a comment..." 
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />

                                <button
                                    disabled={!comment}
                                    type="submit"
                                    onClick={postComment}
                                >
                                    Post
                                </button>
                            </form>
                            

                            <div className={Styles.DetailedIcons}>
                                <div className={Styles.DetailedIcon}>
                                    <button onClick={() => updateLike(selectedDetail)}><i class="fas fa-heart"></i></button>
                            
                                    {/* <p>{detailedLikes}</p> */}
                                </div>

                                <div className={Styles.DetailedIcon}>
                                    <button><i class="fas fa-comments"></i></button>
                            
                                    {/* <p>0</p> */}
                                </div>

                                <div className={Styles.DetailedIcon}>
                                    <button><i class="fas fa-bookmark"></i></button>
                                </div>

                                <div className={Styles.DetailedIcon}>
                                    <button><i class="fas fa-share"></i></button>
                                </div>
                            </div>

                            <div className={Styles.DetailedUser}>
                                <div className={Styles.DetailedUserImage}>
                                    <img src={detailedUserPic} alt="User Profile Pic"/>
                                </div>
                                <h3>{detailedUser}</h3>
                            </div>

                        </div>
                    </>
                : 
                    <>
                        <div className={Styles.ProfileData}>
                    
                            <div className={Styles.TopProfile}>
                                
                                { user ? user.photoURL ? <img src={user.photoURL} alt="Avatar"/>  : <img src={BlankAvatar} alt="Avatar"/> : <img src={BlankAvatar} alt="Avatar"/>}

                                <div className={Styles.ProfileInput}>
                                    <div className={Styles.ProfileButtons}>
                                        <div className={Styles.InputStuff}>
                                            
                                            <input type="file" name="file-2[]" id="file-2" className={Styles.inputfile} data-multiple-caption="{count} files selected" multiple onChange={handleChange} />
                                            <label for="file-2">
                                                { image ? <span>Ready to Upload</span> : <span>Upload An Image</span> }
                                            </label>
                                        </div>

                                        <button disabled={!image} onClick={handleUpload}>
                                            Upload
                                        </button>
                                    </div>
                                    <progress className={Styles.Progress} value={progress} max="100" />
                                </div>       

                                

                                <h2>{firebaseUser.displayName}</h2>

                                { user ? <p>Admin</p> : <Link to={ROUTES.SIGN_IN}><p>Log In</p></Link> }

                                { user ? 
                                    <div className={Styles.Stats}>

                                        <div className={Styles.Posts}>
                                            <h3>15</h3>
                                            <p>Posts</p>
                                        </div>

                                        <div className={Styles.Followers}>
                                            <h3>198,242</h3>
                                            <p>Followers</p>
                                        </div>

                                        <div className={Styles.Following}>
                                            <h3>104</h3>
                                            <p>Following</p>
                                        </div>

                                    </div> :

                                    <div className={Styles.Stats}></div>
                                }
                                
                            </div>

                            { user ? <div className={Styles.Statistics}>

                                <div className={Styles.FirstRow}>

                                    <div className={Styles.FirstItem}>
                                        <div className={Styles.Icon}>
                                            <i class="fas fa-user-friends"></i>
                                        </div>
                                        <div className={Styles.Number}>
                                            <h2>26</h2>
                                        </div>
                                        <div className={Styles.Text}>
                                            <p>New</p>
                                            <p>Followers</p>
                                        </div>
                                    </div>

                                    <div className={Styles.SecondItem}>
                                        <div className={Styles.Icon}>
                                            <i class="fas fa-comments"></i>
                                        </div>
                                        <div className={Styles.Number}>
                                            <h2>6</h2>
                                        </div>
                                        <div className={Styles.Text}>
                                            <p>New</p>
                                            <p>Comments</p>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className={Styles.SecondRow}>
                                    <div className={Styles.ThirdItem}>
                                        <div className={Styles.Icon}>
                                            <i class="fas fa-heart"></i>
                                        </div>
                                        <div className={Styles.Number}>
                                            <h2>73</h2>
                                        </div>
                                        <div className={Styles.Text}>
                                            <p>New</p>
                                            <p>Likes</p>
                                        </div>
                                    </div>

                                    <div className={Styles.FourthItem}>
                                        <div className={Styles.Icon}>
                                            <i class="fas fa-user-circle"></i>
                                        </div>
                                        <div className={Styles.Number}>
                                            <h2>49</h2>
                                        </div>
                                        <div className={Styles.Text}>
                                            <p>Profile</p>
                                            <p>Views</p>
                                        </div>
                                    </div>
                                </div>

                            </div> : <div className={Styles.Statistics}></div> }

                        </div>


                        <div className={Styles.Suggestions}>
                            <div className={Styles.TopText}>
                                <h2>Suggestions For You</h2>
                                <h3>See All</h3>
                            </div>

                            { user ? 
                                <div className={Styles.ToFollow}>
                                    <div className={Styles.SuggestedFollow}>
                                        <div className={Styles.FollowUser}>
                                            <img src={Dabin} alt="Suggested 1" /> 

                                            <div className={Styles.FollowUserText}>
                                                <h3>Dabin</h3>
                                                <p>@dabinmusic</p>
                                                {/* <div className={Styles.VerifiedUser}>
                                                    <img src={Verified} alt="Verified Logo" />
                                                </div> */}
                                            </div>
                                        </div>

                                        <a className={Styles.FollowButton} href="#/">
                                            <h3>Follow</h3>
                                        </a>
                                    </div>

                                    <div className={Styles.SuggestedFollow}>
                                        <div className={Styles.FollowUser}>
                                            <img src={Bichette} alt="Suggested 2" /> 

                                            <div className={Styles.FollowUserText}>
                                                <h3>Bo Bichette</h3>
                                                <p>@bobichette</p>
                                                {/* <div className={Styles.VerifiedUser}>
                                                    <img src={Verified} alt="Verified Logo" />
                                                </div> */}
                                            </div>
                                        </div>

                                        <a className={Styles.FollowButton} href="#/">
                                            <h3>Follow</h3>
                                        </a>
                                    </div>

                                    <div className={Styles.SuggestedFollow}>
                                        <div className={Styles.FollowUser}>
                                            <img src={Julio} alt="Suggested 3" /> 

                                            <div className={Styles.FollowUserText}>
                                                <h3>JROD</h3>
                                                <p>@j_rod</p>
                                                {/* <div className={Styles.VerifiedUser}>
                                                    <img src={Verified} alt="Verified Logo" />
                                                </div> */}
                                            </div>
                                        </div>

                                        <a className={Styles.FollowButton} href="#/">
                                            <h3>Follow</h3>
                                        </a>
                                    </div>
                                </div> 
                                : 
                                <div className={Styles.ToFollow}></div>
                            }
                        </div>
                    </>
                }

                

            </div>
        </>
    )
}
