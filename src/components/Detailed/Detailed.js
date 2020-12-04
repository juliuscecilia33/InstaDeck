import React, { useContext, useState } from 'react';
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

export const Detailed = ({ user }) => {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {};
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

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
            }
        )
    }

    return (
        <>
            <div className={DetailedBg}>

                <div className={Styles.ProfileData}>
                    
                    <div className={Styles.TopProfile}>
                        
                        { user ? user.photoURL ? <img src={user.photoURL} alt="Avatar"/>  : <img src={BlankAvatar} alt="Avatar"/> : <img src={BlankAvatar} alt="Avatar"/>}

                        <div className={Styles.ProfileInput}>
                            <div className={Styles.InputStuff}>
                                
                                <input type="file" name="file-1[]" id="file-1" className={Styles.inputfile} data-multiple-caption="{count} files selected" multiple onChange={handleChange} />
                                <label for="file-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
                                    </svg> 
                                    { image ? <span>Ready to Post</span> : <span>Upload An Image</span> }
                                </label>
                            </div>
                            <progress className={Styles.Progress} value={progress} max="100" />
                        </div>       
                                      
                        <button onClick={handleUpload}>
                            Upload
                        </button>

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

            </div>
        </>
    )
}
