import React from 'react';
import Styles from './Post.module.scss';
import BlankImage from '../images/UploadImageIcon.png'

export const Post = ({ user, username, caption, imageUrl, postId, likes, comments, usernamepic }) => {
    // <Route exact path="/detailed" render={(props) => <PropsPage {...props} title={`Props through render`} />}/>
    
    
    return (
        <>
            <div className={Styles.Post}>

                <a href="#/"><img src={imageUrl} alt="post" className={Styles.Post__Image} /></a>

                <div className={Styles.Post__Footer}>
                    <div className={Styles.Post__Avatar}>
                        <div className={Styles.Post__ProfileImg}>
                            {usernamepic ? <img src={usernamepic} alt="Avatar"/>  : <img src={BlankImage} alt="Avatar"/>}
                        </div>

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
