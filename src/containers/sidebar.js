import React, { useContext } from 'react';
import { SideBar } from '../components';

import * as ROUTES from '../constants/routes';
import DeckLogo from '../components/images/Decklol.png';
import BlankImage from '../components/images/UploadImageIcon.png';
import { FirebaseContext } from '../context/firebase';
import { DetailedContext } from '../context/detailed';
import { auth } from '../firebase';

export function SideBarContainer({ user }) {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {}; 
    const { setDetail } = useContext(DetailedContext);

    console.log('here');

    return (

        <SideBar>

            <SideBar.Logo to={ROUTES.START}>
                <img src={DeckLogo} alt="Logo" />
            </SideBar.Logo>

            <SideBar.Tabs>

                <SideBar.Tab label="Home">
                    <i class="fas fa-home"></i>
                </SideBar.Tab>

                <SideBar.Tab label="Messages">
                    <i class="fas fa-comment-dots"></i>
                </SideBar.Tab>

                <SideBar.Tab label="Profile" onClick={() => setDetail(false)}>
                    <i class="fas fa-user-alt"></i>
                </SideBar.Tab>

                <SideBar.Tab label="Saved">
                    <i class="fas fa-bookmark"></i>
                </SideBar.Tab>
                
            </SideBar.Tabs>

            <SideBar.Account>
                <SideBar.AccountBar />
                
                <SideBar.Profiles>
                    <SideBar.Profile heading={ user ? "Admin" : "..." } displayName={firebaseUser.displayName}>
                        {firebaseUser.photoURL ? <img src={firebaseUser.photoURL} alt="Avatar"/>  : <img src={BlankImage} alt="Avatar"/>}
                    </SideBar.Profile>
                </SideBar.Profiles>

                <SideBar.AccountFooter>
                    { user ? (
                        <SideBar.LogOut>
                            <SideBar.Option onClick={() => auth.signOut()} to={ROUTES.SIGN_IN}>Log Out</SideBar.Option>
                        </SideBar.LogOut>
                    ) : (
                        <SideBar.SignInOrUp>
                            <SideBar.Option to={ROUTES.SIGN_IN}>Sign In</SideBar.Option>
                            <SideBar.Option to={ROUTES.SIGN_UP}>Sign Up</SideBar.Option>
                        </SideBar.SignInOrUp>
                    )}
                </SideBar.AccountFooter>
            </SideBar.Account>

        </SideBar>

    )
}