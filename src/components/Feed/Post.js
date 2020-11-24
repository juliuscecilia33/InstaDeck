import React from 'react';
import Styles from './Post.module.scss';
import JuanSoto from '../images/juansotolol.jpg';

export const Post = ({ user, username, caption, imageUrl, postId }) => {
    // <Route exact path="/detailed" render={(props) => <PropsPage {...props} title={`Props through render`} />}/>
    
    
    return (
        <>
            <div className={Styles.Post}>

                <a href="#/"><img src={imageUrl} alt="post" className={Styles.Post__Image} /></a>

                <div className={Styles.Post__Footer}>
                    <div className={Styles.Post__Avatar}>
                        <img src={JuanSoto} alt="Avatar"/>

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
