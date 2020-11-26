import React, { useContext } from 'react';
import { DetailedBg } from './Detailed.module.scss';
import Kellenic from '../images/jkellenic.jpg';
import Dabin from '../images/dabin.jpg';
import Bichette from '../images/bichette.jpg';
import Julio from '../images/julio.jpg';
import Styles from './Detailed.module.scss';
import { FirebaseContext } from '../../context/firebase';

export const Detailed = () => {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {};
    console.log(firebaseUser)

    return (
        <>
            <div className={DetailedBg}>

                <div className={Styles.ProfileData}>
                    
                    <div className={Styles.TopProfile}>
                        <img src={Kellenic} alt="UserProfile" className={Styles.ProfileImage} />

                        <h2>{firebaseUser.displayName}</h2>
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

                    </div>

                </div>


                <div className={Styles.Suggestions}>
                    <div className={Styles.TopText}>
                        <h2>Suggestions For You</h2>
                        <h3>See All</h3>
                    </div>

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
                </div>

            </div>
        </>
    )
}
