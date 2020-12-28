import React, { useContext, useEffect, useState } from 'react';
import Styles from './Post.module.scss';
import BlankImage from '../images/UploadImageIcon.png';
import { DetailedContext } from '../../context/detailed';
import { db, storage } from '../../firebase';

export const Post = ({ user, username, caption, imageUrl, postId, likes, comments, usernamepic }) => {

    const { setDetail, setSelectedDetail } = useContext(DetailedContext);
    const [ heartColor, setHeartColor ] = useState(false);

    const updateDetail = (postId) => {
        setDetail(true);
        setSelectedDetail(postId);
    }

    const updateLike = (postId) => {

        setHeartColor(!heartColor);

        if (heartColor) {

            db.collection("posts").doc(postId).update({
                likes: likes - 1
            });

        } else {
            db.collection("posts").doc(postId).update({
                likes: likes + 1
            });
        }


    }

    let inputStyle= {
        transition: '.5s ease all',
        color: '#c4c4c4'
    };

    if (heartColor) {
        inputStyle ={
            transition: '.5s ease all',
            color: '#E45257'
        }
    }

    console.log(user);
    
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
                            <button onClick={() => updateLike(postId)}><i class="fas fa-heart" style={inputStyle}></i></button>
                            
                            <p>{likes}</p>
                        </div>

                        <div className={Styles.Post__Button}>
                            <a href="#/" onClick={() => updateDetail(postId)}><button><i class="fas fa-comments"></i></button></a>
                            
                            <p>{comments}</p>
                        </div>

                        <div className={Styles.Post__Button}>
                            <button><i class="fas fa-bookmark"></i></button>
                        </div>

                        { username === user.displayName && <div className={Styles.Post__Button}>
                            <button><i class="fas fa-trash"></i></button>
                        </div> }
                    </div>
                    
                </div>  

            </div>
        </>
    )
}
