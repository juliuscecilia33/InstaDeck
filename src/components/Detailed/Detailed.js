import React from 'react';
import { DetailedBg } from './Detailed.module.scss';
import Kellenic from '../images/jkellenic.jpg';
import Styles from './Detailed.module.scss';

export const Detailed = () => {
    return (
        <>
            <div className={DetailedBg}>

                <div className={Styles.ProfileData}>
                    
                    <div className={Styles.TopProfile}>
                        <img src={Kellenic} alt="Profile Picture" className={Styles.ProfileImage} />

                        <h2>jarredkellenic</h2>
                        <p>Admin</p>

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

                        </div>
                    </div>

                    <div className={Styles.Statistics}>
                        
                    </div>

                </div>


                <div className={Styles.Suggestions}></div>

            </div>
        </>
    )
}
