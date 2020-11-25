import React from 'react';
import Styles from './SignInPage.module.scss';
import { Link } from 'react-router-dom';

export const SignInPage = () => {
    return (
        <>
              
            <div className={Styles.DisplaySec}>
            
            </div>  
            
            <div className={Styles.InputSec}>

                <div className={Styles.SignUpTitle}>
                    <h2>Sign In <br />to <span>InstaDeck</span></h2>
                </div>

                <div className={Styles.InputArea}>
                    <div className={Styles.Inputs}>
                        <div className={Styles.InputText}>
                            <h3>Email</h3>
                            <input type="email" placeholder="Email" className={Styles.UsernameInput} />
                        </div>
                        <div className={Styles.InputText}>
                            <h3>Password</h3>
                            <input type="password" placeholder="Password" className={Styles.UsernameInput} />
                        </div>
                    </div>

                    <div className={Styles.ButtonAgreement}>
                        
                        <div className={Styles.CreateAccButton}>
                            <button>
                                <h3>Sign In</h3>
                            </button>
                        </div>

                        <h3>By signing up I agree to the <span>Private Policy</span><br /> and <span>Terms of Services</span></h3>
                    </div>

                    

                    <h2>If you don't have an account <br /><Link to="/signup"><span>Sign Up Here</span></Link></h2>
                </div>
            </div>
        </>
    )
}
