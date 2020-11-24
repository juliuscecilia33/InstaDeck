import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { firebaseApp } from './firebase';
import { FirebaseContext } from './context/firebase';

render(
  <>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <App />
      </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
