import React from 'react';
import { SideBar } from '../components/Sidebar';
import * as ROUTES from '../constants/routes';
import DeckLogo from '../components/images/Decklol.png';
import DownArrow from '..components/images/DownArrow.png';
import BlankImage from '..components/images/UploadImageIcon.png';
import { FirebaseContext } from '../context/firebase';
import { DetailedContext } from '../context/detailed';
import { auth } from '../firebase';

export function SideBarContainer({ user }) {
    const { firebaseApp } = useContext(FirebaseContext);
    const firebaseUser = firebaseApp.auth().currentUser || {}; 
    const { setDetail } = useContext(DetailedContext);

    return (

        <SideBar.Container>

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

                <SideBar.Tab label="Profile">
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
            </SideBar.Account>

        </SideBar.Container>

    )
}