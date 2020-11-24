import React from 'react';
import Styles from './SignUpPage.module.scss';
import Logo from '../components/images/Decklol.png';
import UploadImageIcon from '../components/images/UploadImageIcon.png';

export const SignUpPage = () => {
    return (
        <>
            <div className={Styles.InputSec}>
                <div className={Styles.LogoImage}>
                    <img src={Logo} alt="Logo"/>    
                </div>

                <div className={Styles.SignUpTitle}>
                    <h2>Sign Up</h2>
                    <div className={Styles.RedLine}></div>
                    <h3>Sign up with</h3>
                </div>

                <div className={Styles.InputArea}>
                    <div className={Styles.Username}>
                        <h3>Username</h3>
                        <input type="text" placeholder="Username" className={Styles.UsernameInput} />
                    </div>
                    <div className={Styles.Password}>
                        <h3>Password</h3>
                        <input type="password" placeholder="Password" className={Styles.UsernameInput} />
                    </div>

                    <div className={Styles.UploadImage}>
                        <img src={UploadImageIcon} alt="Upload Image"/>
                        <h3>Upload Image</h3>
                    </div>

                    <div className={Styles.CreateAccButton}>
                        <button type="submit">
                            <i class="far fa-user"></i>
                            <h3>Create Account</h3>
                        </button>
                    </div>
                </div>
            </div>

            <div className={Styles.DisplaySec}></div>
        </>
    )
}
