import React, { useState, useEffect } from 'react';
import * as ROUTES from './constants/routes';
import { db, auth } from './firebase';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { MainPage, SignUpPage, SignInPage, HomePage } from './pages';
import { DetailedContext } from './context/detailed';

function App() {
  const [posts, setPosts] = useState ([]);
  const [popPosts, setPopPosts] = useState([]);
  const [user, setUser] = useState('julius');
  const [ selectedDetail, setSelectedDetail ] = useState(null);
  const [ detail, setDetail ] = useState(false);

  useEffect(() => {
    db.collection('popularposts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPopPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
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
    })

    return () => {
      // perform some cleanup actions
      unsubscribe(); // used for efficiency since it will be an infinite loop of change
    }

  }, [user]);

  return (
    <>
      <DetailedContext.Provider value={{ selectedDetail, setSelectedDetail, detail, setDetail }}>
        <Router>
          <Switch>
            <Route path={ROUTES.START} exact>
              <HomePage />
            </Route>

            <Route path={ROUTES.SIGN_UP} exact>
              <SignUpPage />
            </Route>

            <Route path={ROUTES.SIGN_IN} exact>
              <SignInPage />
            </Route>

            <Route path={ROUTES.HOME} exact>
              <MainPage posts={posts} user={user} popPosts={popPosts} />  
            </Route>

          </Switch>
        </Router>
      </DetailedContext.Provider>
    </>
  );
}

export default App;
