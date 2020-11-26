import React, { useState, useEffect } from 'react';
import Styles from './SignInPage.module.scss';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';

export const SignInPage = () => {
    const history = useHistory();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);

    const isInvalid = password === '' || email === ''; 

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            // user has logged in...
            console.log(authUser);
            setUser(authUser);
    
          } else {
            // user has logged out...
            setUser(null);
          }
        })
    
        return () => {
          // perform some cleanup actions
          unsubscribe(); // used for efficiency since it will be an infinite loop of change
        }
    
    }, [user]);

    const signIn = (event) => {
        event.preventDefault();
    
        auth
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            history.push(ROUTES.HOME);
        })
          .catch((error) => {
            setEmail('');
            setPassword('');
            alert(error.message);
          })
    }
    
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
                            <input type="email" placeholder="Email" className={Styles.UsernameInput} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className={Styles.InputText}>
                            <h3>Password</h3>
                            <input type="password" placeholder="Password" className={Styles.UsernameInput} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className={Styles.ButtonAgreement}>
                        
                        <div className={Styles.CreateAccButton}>
                            <button disabled={isInvalid} type="submit" onClick={signIn}>
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
