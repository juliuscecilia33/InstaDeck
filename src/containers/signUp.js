import React, { useState, useEffect } from "react";
import { SignUp } from "../components";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import * as ROUTES from "../constants/routes";

export function SignUpContainer() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const isInvalid = username === "" || password === "" || email === "";

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        setUser(authUser);
      } else {
        // user has logged out...
        setUser(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe(); // used for efficiency since it will be an infinite loop of change
    };
  }, [user, username]);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password) // passed from state variables
      .then((authUser) => {
        return authUser.user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            history.push(ROUTES.HOME);
          });
      })
      .catch((error) => {
        setEmail("");
        setUsername("");
        setPassword("");
        alert(error.message);
      });
  };

  return (
    <SignUp>
      <SignUp.InputSec>
        <SignUp.LogoImage />

        <SignUp.Title>
          <SignUp.RedLine />
        </SignUp.Title>

        <SignUp.InputArea>
          <SignUp.InputText
            type="text"
            placeholder="Username"
            setAction={setUsername}
          >
            Username
          </SignUp.InputText>
          <SignUp.InputText
            type="email"
            placeholder="Email"
            setAction={setEmail}
          >
            Email
          </SignUp.InputText>
          <SignUp.InputText
            type="password"
            placeholder="Password"
            setAction={setPassword}
          >
            Password
          </SignUp.InputText>

          <SignUp.Button isInvalid={isInvalid} signUp={signUp} />

          <SignUp.Agreement />

          <SignUp.HaveAccount />
        </SignUp.InputArea>
      </SignUp.InputSec>

      <SignUp.DisplaySec>
        <SignUp.DisplayLogo />
        <SignUp.DisplayImage />
      </SignUp.DisplaySec>
    </SignUp>
  );
}
