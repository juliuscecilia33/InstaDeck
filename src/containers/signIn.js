import React, { useState, useEffect } from "react";
import { SignIn } from "../components";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export function SignInContainer() {
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const isInvalid = password === "" || email === "";

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
  }, [user]);

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        alert(error.message);
      });
  };

  return (
    <SignIn>
      <SignIn.DisplaySec>
        <SignIn.DisplayLogo />
        <SignIn.DisplayImage />
      </SignIn.DisplaySec>

      <SignIn.InputSec>
        <SignIn.Title />
        <SignIn.InputArea>
          <SignIn.Inputs>
            <SignIn.InputText
              type="email"
              placeholder="Email"
              setAction={setEmail}
            >
              Email
            </SignIn.InputText>
            <SignIn.InputText
              type="password"
              placeholder="Password"
              setAction={setPassword}
            >
              Password
            </SignIn.InputText>
          </SignIn.Inputs>

          <SignIn.ButtonAgreement>
            <SignIn.CreateAcc isInvalid={isInvalid} signIn={signIn} />
            <SignIn.NoAccount />
          </SignIn.ButtonAgreement>
        </SignIn.InputArea>
      </SignIn.InputSec>
    </SignIn>
  );
}
