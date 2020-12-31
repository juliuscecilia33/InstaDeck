import React, { useContext } from 'react';
import Styles from './SideBar.module.scss';
import DeckLogo from '../images/Decklol.png';
import DownArrow from '../images/DownArrow.png';
import BlankImage from '../images/UploadImageIcon.png';
import { FirebaseContext } from '../../context/firebase';
import { DetailedContext } from'../../context/detailed';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { auth } from '../../firebase';

export const SideBar = ({ user }) => {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {}; 
    const { setDetail } = useContext(DetailedContext);

    return (

        <>
            <div className={Styles.SidebarBg}>
                <div className={Styles.Logo}>
                    <a href={ROUTES.START}><img src={DeckLogo} alt="Logo" /></a>
                </div>

                <div className={Styles.Tabs}>
                    <button >
                        <i class="fas fa-home"></i>
                        <h3>Home</h3>
                    </button>
                    
                    <button>
                        <i class="fas fa-comment-dots"></i>
                        <h3>Messages</h3>
                    </button>

                    <button onClick={() => setDetail(false)}>
                        <i class="fas fa-user-alt"></i>
                        <h3>Profile</h3>
                    </button>

                    <button>
                        <i class="fas fa-bookmark"></i>
                        <h3>Saved</h3>
                    </button>
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
                            {firebaseUser.photoURL ? <img src={firebaseUser.photoURL} alt="Avatar"/>  : <img src={BlankImage} alt="Avatar"/>}
                            <div className={Styles.Label}>
                                { user ? <h3>Admin</h3> : <h3>...</h3>}
                                <p>{firebaseUser.displayName}</p>
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
