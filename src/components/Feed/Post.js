import React, { useContext } from 'react';
import Styles from './Post.module.scss';
import BlankImage from '../images/UploadImageIcon.png';
import { FirebaseContext } from '../../context/firebase';

export const Post = ({ user, username, caption, imageUrl, postId, likes, comments, usernamepic }) => {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {};
    
    
    return (
        <>
            <div className={Styles.Post}>

                <a href="#/"><img src={imageUrl} alt="post" className={Styles.Post__Image} /></a>

                <div className={Styles.Post__Footer}>
                    <div className={Styles.Post__Avatar}>
                        {usernamepic ? <img src={usernamepic} alt="Avatar"/>  : <img src={BlankImage} alt="Avatar"/>}

                        <h3>{username}</h3>
                    </div>

                    <div className={Styles.Post__Buttons}>
                        <div className={Styles.Post__Button}>
                            <i class="fas fa-heart"></i>
                            
                            <p>{likes}</p>
                        </div>

                        <div className={Styles.Post__Button}>
                            <i class="fas fa-comments"></i>
                            
                            <p>{comments}</p>
                        </div>

                        <div className={Styles.Post__Button}>
                            <i class="fas fa-bookmark"></i>
                        </div>
                    </div>
                    
                </div>  

            </div>
        </>
    )
}
