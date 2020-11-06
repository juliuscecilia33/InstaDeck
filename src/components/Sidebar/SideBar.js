import React, { useState } from 'react';
import Styles from './SideBar.module.scss';
import DeckLogo from '../images/Decklol.png';
import DownArrow from '../images/DownArrow.png';
import Illenium from '../images/illenium.jpg';
import Fairlane from '../images/fairlane.jpg';
import Dabin from '../images/dabin.jpg';

export const SideBar = () => {

    return (

        <>
            <div className={Styles.SidebarBg}>
                <div className={Styles.Logo}>
                    <img src={DeckLogo} alt="Logo" />
                </div>

                <div className={Styles.Tabs}>
                    <a href="/#" onClick={(e) => e.preventDefault()}><h3>Home</h3></a>
                    <a href="/#" onClick={(e) => e.preventDefault()}><h3>Messages</h3></a>
                    <a href="/#" onClick={(e) => e.preventDefault()}><h3>Profile</h3></a>
                    <a href="/#" onClick={(e) => e.preventDefault()}><h3>Saved Posts</h3></a>
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
                        <a href="#/">
                            <h3>Log Out</h3>
                        </a>
                        <p>InstaDeck Business</p>
                    </div>

                </div>
            </div>
        </>
    )
}
