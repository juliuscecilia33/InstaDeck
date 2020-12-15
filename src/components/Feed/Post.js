import React, { useContext, useState } from 'react';
import Styles from './Post.module.scss';
import BlankImage from '../images/UploadImageIcon.png';
import { DetailedContext } from '../../context/detailed';
import { db } from '../../firebase';

export const Post = ({ user, username, caption, imageUrl, postId, likes, comments, usernamepic }) => {

    const { detail, setDetail, selectedDetail, setSelectedDetail } = useContext(DetailedContext);

    const updateDetail = (postId) => {
        setDetail(true);
        setSelectedDetail(postId);
    }

    const updateLike = (postId) => {

        db.collection("posts").doc(postId).update({
            likes: likes + 1
        });
    }
    
    return (
        <>
            <div className={Styles.Post}>

                <a href="#/" onClick={() => updateDetail(postId)}><img src={imageUrl} alt="post" className={Styles.Post__Image} /></a>

                <div className={Styles.Post__Footer}>
                    <div className={Styles.Post__Avatar}>
                        {usernamepic ? <img src={usernamepic} alt="Avatar"/>  : <img src={BlankImage} alt="Avatar"/>}

                        <h3>{username}</h3>
                    </div>

                    <div className={Styles.Post__Buttons}>
                        <div className={Styles.Post__Button}>
                            <button onClick={() => updateLike(postId)}><i class="fas fa-heart"></i></button>
                            
                            <p>{likes}</p>
                        </div>

                        <div className={Styles.Post__Button}>
                            <button><i class="fas fa-comments"></i></button>
                            
                            <p>{comments}</p>
                        </div>

                        <div className={Styles.Post__Button}>
                            <button><i class="fas fa-bookmark"></i></button>
                        </div>
                    </div>
                    
                </div>  

            </div>
        </>
    )
}
