import React, { useState, useEffect } from 'react';
import './App.scss';
import { Detailed } from './components/Detailed/Detailed';
import { Feed } from './components/Feed/Feed';
import { SideBar } from './components/Sidebar/SideBar';
import { db, auth } from './firebase';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [posts, setPosts] = useState ([]);
  const [popPosts, setPopPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('julius');

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

  // console.log(posts);

  return (
    <div className="App">
        <SideBar />
        <Feed posts={posts} user={user} popPosts={popPosts} />
        <Detailed />
    </div>
  );
}

export default App;
