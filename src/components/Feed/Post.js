import React, { useState, useEffect } from 'react';
import Styles from './Post.module.scss';
import { db } from '../../firebase';
import firebase from 'firebase';
import JuanSoto from '../images/juansotolol.jpg';

export const Post = ({ user, username, caption, imageUrl, postId }) => {

    return (
        <>
            <div className={Styles.Post}>

                <img src={imageUrl} alt="post" className={Styles.Post__Image} />

                <div className={Styles.Post__Footer}>
                    <div className={Styles.Post__Avatar}>
                        <img src={JuanSoto} alt="Avatar Image"/>

                        <h3>{username}</h3>
                    </div>

                    <div className={Styles.Post__Buttons}>
                        <div className={Styles.Post__Button}>
                            <i class="fas fa-heart"></i>
                            
                            <p>757</p>
                        </div>

                        <div className={Styles.Post__Button}>
                            <i class="fas fa-comments"></i>
                            
                            <p>750</p>
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
