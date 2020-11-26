import React, { useContext } from 'react';
import Styles from './SideBar.module.scss';
import DeckLogo from '../images/Decklol.png';
import DownArrow from '../images/DownArrow.png';
import Illenium from '../images/illenium.jpg';
import Fairlane from '../images/fairlane.jpg';
import Dabin from '../images/dabin.jpg';
import { FirebaseContext } from '../../context/firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { auth } from '../../firebase';

export const SideBar = ({ user }) => {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {};
    console.log(user);
    console.log(firebaseUser)

    return (

        <>
            <div className={Styles.SidebarBg}>
                <div className={Styles.Logo}>
                    <img src={DeckLogo} alt="Logo" />
                </div>

                <div className={Styles.Tabs}>
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                        <i class="fas fa-home"></i>
                        <h3>Home</h3>
                    </a>
                    
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                        <i class="fas fa-comment-dots"></i>
                        <h3>Messages</h3>
                    </a>

                    <a href="/#" onClick={(e) => e.preventDefault()}>
                        <i class="fas fa-user-alt"></i>
                        <h3>Profile</h3>
                    </a>

                    <a href="/#" onClick={(e) => e.preventDefault()}>
                        <i class="fas fa-bookmark"></i>
                        <h3>Saved</h3>
                    </a>
                </div>

                <div className={Styles.Account}>
                    <div className={Styles.AccountTop}>
                        <div className={Styles.Top}>
                            <h3>Account</h3>
                            <img src={DownArrow} alt="DownArrow"/>
                        </div>

                        <div className={Styles.Bottom}>
                            <div className={Styles.Border}></div>
                        </div>
                    </div>


                    <div className={Styles.Profiles}>

                        <div className={`${Styles.Profile} ${Styles.Admin}`}>
                            <img src={Illenium} alt="illenium-profile"/>
                            <div className={Styles.Label}>
                                <h3>Admin</h3>
                                <p>@illeniunmusic</p>
                            </div>
                        </div>

                        <div className={Styles.Profile}>
                            <img src={Fairlane} alt="Fairlane-profile"/>
                            <div className={Styles.Label}>
                                <h3>Editor</h3>
                                <p>@fairlanemusic</p>
                            </div>
                        </div>

                        <div className={Styles.Profile}>
                            <img src={Dabin} alt="Dabin-profile"/>
                            <div className={Styles.Label}>
                                <h3>Moderator</h3>
                                <p>@dabinmusic</p>
                            </div>
                        </div>

                    </div>


                    <div className={Styles.AccountBottom}>
                        
                        {user ? (
                            <Link to={ROUTES.SIGN_IN}>
                                <a href="#/" onClick={() => auth.signOut()}>
                                    <h3>Log Out</h3>
                                </a>
                            </Link>
                        ) : (
                            <div className={Styles.SignInOrUp}>
                                <Link to="/signin"><h3>Sign In</h3></Link>
                                <Link to="/signup"><h3>Sign Up</h3></Link>
                            </div>
                        )}

                        <p>InstaDeck Business</p>
                    </div>


                </div>
            </div>
        </>
    )
}
