import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import Styles from './SignUpPage.module.scss';
import Logo from '../components/images/Decklol.png';
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom';

// Have to create Firebase Context, look at BrowseContainer of Netflix clone and selectProfileCOntainer

export const SignUpPage = () => {

  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  const isInvalid = username === '' || password === '' || email === ''; 

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // user has logged in...
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
  
    }, [user, username]);
  
    const signUp = (event) => {
      event.preventDefault();
    
      auth
        .createUserWithEmailAndPassword(email, password) // passed from state variables
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: username,
          })
          .then(() => {
              history.push(ROUTES.HOME)
          })
        })
        .catch((error) => {
          setEmail('');
          setUsername('');
          setPassword('');
          alert(error.message);
        })
    }

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
                    <div className={Styles.InputText}>
                        <h3>Username</h3>
                        <input type="text" placeholder="Username" className={Styles.UsernameInput} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={Styles.InputText}>
                        <h3>Email</h3>
                        <input type="email" placeholder="Email" className={Styles.UsernameInput} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={Styles.InputText}>
                        <h3>Password</h3>
                        <input type="password" placeholder="Password" className={Styles.UsernameInput} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className={Styles.CreateAccButton}>
                        <button disabled={isInvalid} type="submit" onClick={signUp}>
                            <i class="far fa-user"></i>
                            <h3>Create Account</h3>
                        </button>
                    </div>

                    <h3>By signing up I agree to the <span>Private Policy</span><br /> and <span>Terms of Services</span></h3>

                    <h2>Have an account? <Link to="/signin"><span>Sign In</span></Link></h2>
                </div>
            </div>

            <div className={Styles.DisplaySec}></div>
        </>
    )
}
