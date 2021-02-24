import React, { useState, useEffect } from "react";
import * as ROUTES from "./constants/routes";
import { db, auth } from "./firebase";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MainPage, SignUpPage, SignInPage, HomePage } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { DetailedContext } from "./context/detailed";
import { ProfileContext } from "./context/profile";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";

function App() {
  const [posts, setPosts] = useState([]);
  const [popPosts, setPopPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [detail, setDetail] = useState(false);
  const [profile, setProfile] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [profileText, setProfileText] = useState(null);
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    console.log("I changed themes to!");
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    db.collection("popularposts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPopPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

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

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <ProfileContext.Provider
          value={{
            profile,
            setProfile,
            profileData,
            setProfileData,
            profileText,
            setProfileText,
          }}
        >
          <DetailedContext.Provider
            value={{
              selectedDetail,
              setSelectedDetail,
              detail,
              setDetail,
            }}
          >
            <Router>
              <Switch>
                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.HOME}
                  path={ROUTES.START}
                  exact
                >
                  <HomePage user={user} />
                </IsUserRedirect>

                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.HOME}
                  path={ROUTES.SIGN_UP}
                  exact
                >
                  <SignUpPage />
                </IsUserRedirect>

                <IsUserRedirect
                  user={user}
                  loggedInPath={ROUTES.HOME}
                  path={ROUTES.SIGN_IN}
                  exact
                >
                  <SignInPage />
                </IsUserRedirect>

                <ProtectedRoute path={ROUTES.HOME} user={user} exact>
                  <MainPage
                    themeToggler={themeToggler}
                    posts={posts}
                    user={user}
                    popPosts={popPosts}
                  />
                </ProtectedRoute>
              </Switch>
            </Router>
          </DetailedContext.Provider>
        </ProfileContext.Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
